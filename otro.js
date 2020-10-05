const fs = require('fs');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const linkify = md.linkify
const http = require('http');
const https = require('https')


arrayx = [
  'C:/Users/ASUS/Desktop/nuevo/Prueba/Folder 1/fileotro.md',
  'C:/Users/ASUS/Desktop/nuevo/Prueba/Folder 1/Folder1-2/folder1.2otro.md',
  'C:/Users/ASUS/Desktop/nuevo/Prueba/Folder 1/Folder1-2/folder1.2otro2.md',
  'C:/Users/ASUS/Desktop/nuevo/Prueba/Folder 1/otro file.md',
  'C:/Users/ASUS/Desktop/nuevo/Prueba/Folder 2/folder2.1otro.md',
  'C:/Users/ASUS/Desktop/nuevo/Prueba/Folder 2/folder2.1otro2.md',
  'C:/Users/ASUS/Desktop/nuevo/Prueba/primer file - copia.md',
  'C:/Users/ASUS/Desktop/nuevo/Prueba/primer file.md'
]

const arrFake = ['C:/Users/ASUS/Desktop/nuevo/Prueba/primer file.md', 'C:/Users/ASUS/Desktop/nuevo/Prueba/primer file - copia.md']


const arr = [];
const reading = (probAsset) => {

  //console.log(probAsset)
  probAsset.forEach((file) => {
    const readingFile = fs.readFileSync(file, { encoding: 'utf8' })
    const match = linkify.match(readingFile)
    //const byLines = file.split(/\r?\n/)
    //console.log(byLines)
    //const text = line.split('[').pop().split(']')[0];
    //console.log(match)
    if (match) {
      match.forEach((link) => {
        //console.log(link)
        arr.push({ href: link.url, text: link.text, path: file })
      })
      console.log(arr)
      return arr
    }

  })
}
//reading(arrayx)

const readingAsync = (arrPaths) => {
  const readPromise = new Promise((resolve, reject) => {
    arrPaths.forEach(paths => {
      fs.readFile(paths, 'utf8', (err, data) => {

        if (err) { reject(console.log(new Error('None of this files have links' + err))) };

        const matching = linkify.match(data);

        if (matching) {
          matching.forEach(link => {
            arr.push({ href: link.url, text: link.text, path: paths })
          })
          console.log(arr)
          resolve(arr)
        }
      })
    })

  })
  return readPromise
}


//readingAsync(arrayx)

const arraypaths = [
  {
    href: 'https://github.com/markedjs/marked',
    text: 'https://github.com/markedjs/marked',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  },
  {
    href: 'https://github.com/jsdom/jsdom',
    text: 'https://github.com/jsdom/jsdom',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  },
  {
    href: 'https://github.com/cheeriojs/chsadfgheerio',
    text: 'https://github.com/cheeriojs/cdfsheerio',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'https://github.com/markedjs/marked',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  },
  {
    href: 'http://community.laboratoria.la/c/js',
    text: 'http://community.laboratoria.la/c/js',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  },
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'https://github.com/workshopper/learnyounode',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'https://github.com/workshopper/how-to-npm',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  },
  {
    href: 'https://github.com/stevekane/promise-it-wont-hurt',
    text: 'https://github.com/stevekane/promise-it-wont-hurt',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  }
]


/* const reading = (probAsset) => {
  const arr = [];
  probAsset.forEach(file => {
    const readingFile = fs.readFileSync(file, { encoding: 'utf8' })
    const match = linkify.match(readingFile)
    if (!match){
      return console.log(new Error('none of those files have links'));
    }
    if (match) {
      match.forEach((link) => {
        arr.push({ href: link.url, text: text, path: file})
      })
      console.log(arr)
      return arr
    }
    return arr
  })
}
 */

/* const validate = (urls) => {
  let arrValidate = [];
  urls.forEach(url => {
    const myURL = new URL(url.href);
    console.log(url.href)

    if (myURL.protocol == 'http:') {
      http.get(url.href, (res) => {
        const { statusCode } = res;
        if (res.statusCode == 404) {
          arrValidate.push({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: 'FAIL' })
          //console.log(arrValidate)
          return arrValidate
        }
        else {
          arrValidate.push({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: 'OK' })
          //console.log(arrValidate)
          return arrValidate
        }

      })
    }
    else if (myURL.protocol == 'https:') {
      https.get(url.href, (res) => {
        const { statusCode } = res;
        if (res.statusCode == 404) {
          arrValidate.push({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: 'FAIL' })
          //console.log(arrValidate)
          return arrValidate
        }
        else {
          arrValidate.push({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: 'OK' })
          //console.log(arrValidate)
          return arrValidate
        }

      })
    }
  })
  console.log(arrValidate)
  return arrValidate
} */


/* const validate = (urls) => {
  urls.forEach(url => {
    const myURL = new URL(url.href);
    console.log(url.href)

    if (myURL.protocol == 'http:'){
      http.get(url.href, (res) => {
      const { statusCode } = res;
      arrValidate.push({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: res.statusMessage })
      console.log(arrValidate)
      return arrValidate
    })
  }
    else if (myURL.protocol == 'https:'){
      https.get ( url.href, (res) => {
      const { statusCode } = res;
      arrValidate.push({ href: myURL.href, path: url.path, status: res.statusCode, statusValid: res.statusMessage })
      console.log(arrValidate)
      return arrValidate
    })
  }
  })

} */


//validate(arraypaths)

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
      })
      return promiseHttp

    })
    
    Promise.all(arrValidate).then(resolve)

    
  })
  return validatePromise
}

//validate(arraypaths).then(console.log)
