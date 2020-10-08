const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https')
const marked = require('marked');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const linkify = md.linkify
let arrResults = [];

// Aqui deberia resolver si el path es absoluto y resolverlo 
const findPath = (lookingPath) => {
  if (!path.isAbsolute(lookingPath)) {
    return path.resolve(lookingPath)
  }
  return lookingPath;
}

// Verificar si es directorio o file y extraer los md files y rechazar cuando no hay .md
const dirOrFile = (pathUsed) => {
  if (fs.lstatSync(pathUsed).isDirectory()) {

    const arrFiles = fs.readdirSync(pathUsed);
    arrFiles.map(fileName => {
      if (path.extname(path.join(pathUsed, fileName)) == '.md') {
        arrResults.push(path.join(pathUsed, fileName));
      }
      else if (fs.lstatSync(path.join(pathUsed, fileName)).isDirectory()) {
        dirOrFile(path.join(pathUsed, fileName));
      }
    })
  }
  else if (path.extname(pathUsed) == '.md') {
    arrResults.push(pathUsed)
  }
  else {
    console.log(new Error('The file extension is invalid'));
    return arrResults
  }
  return arrResults;
}

//Aquí deberia leer cada archivo .md y retornar el array de links Reading file async 
const readingAsync = (arrPaths) => {
  let arr = [];
  const readPromise = new Promise((resolve, reject) => {
    arrPaths.forEach(paths => {
      fs.readFile(paths, 'utf8', (err, data) => {

        if (err) { reject(console.log(new Error('None of this files have links' + err))) };

        const matching = linkify.match(data);
        if (matching) {
          const renderer = new marked.Renderer();
          renderer.link = (href, title, text) => {
            arr.push({ href, text: text.slice(0, 49), file: paths });
          };
          marked(data, { renderer, });
          resolve(arr)
        }
      })
    })
  })
  return readPromise
}

// validacion de links 
const validate = (url) => {
  const myURL = new URL(url.href);

  return new Promise((resolve) => {

    if (myURL.protocol == 'http:') {
      http.get(url.href, (res) => {
        if (res.statusCode == 404) {
          resolve({ href: myURL.href, path: url.file, text: url.text, status: res.statusCode, Check: 'FAIL' })
        }
        else {
          resolve({ href: myURL.href, path: url.file, text: url.text, status: res.statusCode, Check: 'OK' })
        }
      }).on('error', function (e) {
        resolve({ href: myURL.href, path: url.file, text: url.text, status: 404, Check: 'OK' })
      });
    }

    else if (myURL.protocol == 'https:') {
      https.get(url.href, (res) => {
        if (res.statusCode == 404) {
          resolve({ href: myURL.href, path: url.file, text: url.text, status: res.statusCode, Check: 'FAIL' })
        }
        else {
          resolve({ href: myURL.href, path: url.file, text: url.text, status: res.statusCode, Check: 'OK' })
        }
      }).on('error', function (e) {
        resolve({ href: myURL.href, path: url.file, text: url.text, status: 404, Check: 'Ok' })

      });
    }
  })
}

const mdLinks = (filePath, options = {}) => {
  return readingAsync(dirOrFile(findPath(filePath)))
    .then((arrobjects) => {
      if (options.validate) {
        return Promise.all(arrobjects.map(validate)).then((data) => {
          return Promise.resolve(data)
        })
      }
      else {
        return Promise.resolve(arrobjects)
      }
    }).catch((error) => { return Promise.reject(error) })
}

//mdLinks(asset, { validate: true }).then(console.log).catch(console.log)
module.exports = mdLinks