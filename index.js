/* module.exports = () => {
  // ... Deberia tener require en algún lado? 
};
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https')
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const linkify = md.linkify


const file = './README.md'
const asset = './assets'
const relativePath = '.'
const pathError = "otro.js"
const newPath = 'C:/Users/ASUS/Desktop/nuevo/Prueba'
const otherPath = 'C:\\Users\\ASUS\\Desktop\\nuevo\\Prueba'
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
          matching.forEach(link => {
            arr.push({ path: paths, href: link.url, text: link.text })
          })
          resolve(arr)
        }
      })
    })
  })
  return readPromise
}

// validacion de links 
const validate = (urls) => {
  let arrValidate = [];
  const validatePromise = new Promise((resolve, reject) => {
    arrValidate = urls.map(url => {

      const myURL = new URL(url.href);

      const promiseHttp = new Promise((resolve, reject) => {
        if (myURL.protocol == 'http:') {
          http.get(url.href, (res) => {
            const { statusCode } = res;
            if (res.statusCode == 404) {
              resolve({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: 'FAIL' })

            }
            else {
              resolve({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: 'OK' })
            }
          })
        }

        else if (myURL.protocol == 'https:') {
          https.get(url.href, (res) => {
            const { statusCode } = res;
            if (res.statusCode == 404) {
              resolve({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: 'FAIL' })
            }
            else {
              resolve({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: 'OK' })
            }
          })
        }
        else { reject(new Error('None of this links work')) }
      })

      return promiseHttp
    })
    Promise.all(arrValidate).then(resolve)
  })
  return validatePromise
}

const mdLinksDefault = (filePath, option = {}) => {

  if (path.extname(filePath) !== ".md") {
    return Promise.reject(new Error('Not supported file, markdown files only'));
  }

  return readingAsync(dirOrFile(findPath(filePath)))
    .then((arrobjects) => {
      console.log(arrobjects)
      if (option.validate) {
        console.log('hay que validar')
        /* return validate(arrobjects).then((result) => {
          console.log(result)
        }) */
      }
      else {
        console.log('no hay que validar')
        return Promise.resolve(arrobjects)
      }
    })
}

mdLinksDefault(file, { validate: true }).then(console.log)
