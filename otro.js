const fs = require('fs');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const linkify = md.linkify
const http = require('http');
const https = require('https')


/* const axios = require('axios');
//async 
axios.get('https://fantoniak.xyz/test').then((res) =>{
  console.log("Este es el res:", res.status); // 404
}, (e) =>{
  console.log("Este es el otro callbak:", e);
  return Promise.resolve(e);
}).then((loquesea) => {console.log(loquesea);
  return 'Holi'
}).then(console.log); */

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


const arr = [];
const reading = (probAsset) => {

  //console.log(probAsset)
  probAsset.forEach((file) => {
    const readingFile = fs.readFileSync(file, { encoding: 'utf8' })
    const match = linkify.match(readingFile)
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


reading(arrayx)

const arraypaths = [
  {
    href: 'http://google.com/',
    text: 'http://google.com/',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  },
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\README.md'
  }
]

let arrValidate = [];

//const url = 'https://example.org'

const validate = (url) => {
  const myURL = new URL(url);
  console.log(myURL.href)
  console.log(myURL.protocol)

  console.log(url)

  if (myURL.protocol == 'http:'){
    http.get(url, (res) => {
    const { statusCode } = res;
    arrValidate.push({ href: myURL.href, status: res.statusCode, statusValid: res.statusMessage })
    console.log(arrValidate)
  })
}
  else if (myURL.protocol == 'https:'){
    https.get ( url, (res) => {
    const { statusCode } = res;
    arrValidate.push({ href: myURL.href, status: res.statusCode, statusValid: res.statusMessage })
    console.log(arrValidate)
    const contentType = res.headers['content-type'];
    })
  }
}

validate('https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e')



