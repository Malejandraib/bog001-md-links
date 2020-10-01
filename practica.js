const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const { resolve } = require('path');
const { rejects } = require('assert');
const md = new MarkdownIt();
const file = './README.txt'
const asset ='./assets'
const linkify = md.linkify
const relativePath  = '.'
const newPath = 'C:/Users/ASUS/Desktop/nuevo/Prueba'
const otherPath= 'C:\\Users\\ASUS\\Desktop\\nuevo\\Prueba'
const pathError = "otro.js" 

// Aqui deberia resolver si el path es absoluto y resolverlo 
const findPath = (lookingPath)=>{
    if (!path.isAbsolute(lookingPath)){
        console.log('here is a relative path ' + lookingPath)
        return path.resolve(lookingPath)
    }
    console.log(lookingPath)
    return lookingPath; // true
}
console.log('this path is absolute: ' + findPath(otherPath))

//let arr= [];
// Está función debe retornar el array de objetos de los links 
/* const reading =(probAsset)=>{
    
    console.log(probAsset)
    probAsset.forEach( (file) => {
        const readingFile = fs.readFileSync(file,{ encoding: 'utf8' })
        const match = linkify.match(readingFile)
        //console.log(match)
        if (match){
            match.forEach((link) => {
                //console.log(link)
                arr.push({href:link.url, text:link.text, path:file })
            })
            console.log(arr)
            return arr
        }
    })
} */


//Aquí debería leer los directorios hasta llegar a un array con los archivos .md 

const busqueda = (pathPrueba, resultado)  => {   //passsing directoryPath and callback function
    let arrResult = [];
    
    let statPath = fs.lstatSync(pathPrueba)

    if(statPath.isDirectory()){
        let arrArchivos = fs.readdirSync(pathPrueba)
        arrResult = arrArchivos.map(filePath =>{
            return busqueda(path.join(pathPrueba, filePath))
        })
    }

    else if (path.extname(pathPrueba) =='.md') {
        let file = pathPrueba
        arrResult.push(file)
    } 
    else if (!path.extname(pathPrueba) =='.md')  {
        reject(new Error('The file extension is invalid'));
    }

    if (resultado){
        resultado(arrResult.flat())
    }
    else{
        return arrResult.flat()
    }
    
}

console.log(busqueda)

const readingFolder = (pathPrueba, searchMethod) => {
        return new Promise ((resolve, reject) => {
            searchMethod(pathPrueba, resolve)
        })
}

readingFolder(findPath(file), busqueda).then(console.log)










