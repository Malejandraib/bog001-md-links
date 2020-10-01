/* module.exports = () => {
  // ... Deberia tener require en algún lado? 
};
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https')
const MarkdownIt = require('markdown-it');
const { relative } = require('path');
const md = new MarkdownIt();
const file = './README.md'
const asset = './assets'
const linkify = md.linkify
const relativePath = '.'
const pathError = "otro.js"
const newPath = 'C:/Users/ASUS/Desktop/nuevo/Prueba'
const otherPath = 'C:\\Users\\ASUS\\Desktop\\nuevo\\Prueba'
let arrResults = [];

// Aqui deberia resolver si el path es absoluto y resolverlo 
const findPath = (lookingPath) => {
  if (!path.isAbsolute(lookingPath)) {
    console.log('here is a relative path ' + lookingPath)
    return path.resolve(lookingPath)
  }
  return lookingPath; // true
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


//Aquí deberia leer cada archivo .md y retornar el array de links 
const arr = [];
const reading = (probAsset) => {

  probAsset.forEach(file => {
    const readingFile = fs.readFileSync(file, { encoding: 'utf8' })
    const match = linkify.match(readingFile)

    if (match) {
      match.forEach((link) => {
        arr.push({ href: link.url, text: link.text, path: file})
      })
      console.log(arr)
      return arr
    }

    if (!match){
      return console.log(new Error('none of those have links'));
    }

  })

}
reading(dirOrFile(findPath(file)))

/* const firstFunc = (pathPrueba) => {
  return new Promise ((resolve, reject) => {
    findPath(pathPrueba)
  })
} */

// validacion de links 



/* var urlExists = require('url-exists');
urlExists('https://www.google.com', function(err, exists) {
  console.log(exists); // true
}); */

/* const validate = (arrPaths) =>{

  arrPaths.forEach(paths =>{
    
  })
  
}

validate() */




/* const mdLinksDefault = (filePath, option = { validate: false } ) => {

    if(!(path.extname(filePath) === ".md")){
      return Promise.reject(new Error('Not supported file, markdown files only'));
    }
} */
