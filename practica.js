const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const { resolve } = require('path');
const { rejects } = require('assert');
const md = new MarkdownIt();
const file = './README.md'
const asset ='./assets'
const linkify = md.linkify
const newPath = 'C:/Users/ASUS/Desktop/nuevo/Prueba'
const relativePath = 'C:\\Users\\ASUS\\Desktop\\nuevo\\Prueba' //'.'

// Aqui deberia resolver si el path es absoluto y normalizarlo 
const findPath = (lookingPath)=>{
    if (!path.isAbsolute(lookingPath)){
        console.log('here is a relative path ' + lookingPath)
        return path.resolve(lookingPath)
    }
    console.log(lookingPath)
    return lookingPath; // true
}
console.log('this path is absolute: ' + findPath(relativePath))

//Aquí debería leer los directorios hasta llegar a los archivos .md

const busqueda = (pathPrueba, resultado)=> {   //passsing directoryPath and callback function
    let arrResult = [];

    let algoTemporal = fs.lstatSync(pathPrueba)

    if(algoTemporal.isDirectory()){
        let arrArchivos = fs.readdirSync(pathPrueba)
        arrResult = arrArchivos.map(filePath =>{
            return busqueda(path.join(pathPrueba, filePath))
        })
    }

    else if (path.extname(pathPrueba) =='.md') {
        let file = pathPrueba
        arrResult.push(file)
    } 

    if (resultado){
        resultado(arrResult.flat())
    }
    else{
        return arrResult.flat()
    }
    
}




const readingFolder = (pathPrueba, searchMethod) => {
        return new Promise ((resolve, reject) => {
            searchMethod(pathPrueba, resolve)
        })
}

readingFolder(findPath(relativePath), busqueda).then(console.log)


/* const readingFiles = (filePath)=>{
    fs.createReadStream(filePath, { encoding: 'utf8' })
    readStream.on('data', (chunk) => {
        console.log(chunk)
    });
}

readingFiles () */







/* 
findPath(relativePath)
.then(readingFolder(response) {
    return findfiles(response);
}).then()

firstRequest()
  .then(function(response) {
    return secondRequest(response);
}).then(function(nextResponse) {  
    return thirdRequest(nextResponse);
}).then(function(finalResponse) {  
    console.log('Final response: ' + finalResponse);
}).catch(failureCallback); */

       /*      let i = 0
            while (i <= findDir.length){
                console.log(path.extname(i) =='.md')
            } */