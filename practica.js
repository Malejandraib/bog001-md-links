const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const { resolve } = require('path');
const { rejects } = require('assert');
const md = new MarkdownIt();
const file = './README.md'
const asset ='./assets'
const linkify = md.linkify
const otherPath = '.'
const newPath = 'C:/Users/ASUS/Desktop/nuevo/Prueba'
const relativePath = 'C:\\Users\\ASUS\\Desktop\\nuevo\\Prueba' 

// Aqui deberia resolver si el path es absoluto y normalizarlo 
const findPath = (lookingPath)=>{
    if (!path.isAbsolute(lookingPath)){
        console.log('here is a relative path ' + lookingPath)
        return path.resolve(lookingPath)
    }
    console.log(lookingPath)
    return lookingPath; // true
}
console.log('this path is absolute: ' + findPath(otherPath))

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
/*         const readingFile = fs.readFileSync(file,{ encoding: 'utf8' })
        const match = linkify.match(readingFile)
        match.forEach(link, () => {
            //arr.push(link)
            arrResult.push(link)
        }) */
        arrResult.push(file)
    } 

    if (resultado){
        resultado(arrResult.flat())
    }
    else{
        return arrResult.flat()
    }
    
}


//process.stdout.write (content)

console.log(busqueda)

const readingFolder = (pathPrueba, searchMethod) => {
        return new Promise ((resolve, reject) => {
            searchMethod(pathPrueba, resolve)
        })
}

readingFolder(findPath(otherPath), busqueda).then(console.log)


/* const readingFiles = (filePath)=>{
    fs.createReadStream(filePath, { encoding: 'utf8' })
    readStream.on('data', (chunk) => {
        console.log(chunk)
    });
}

readingFiles () */

//Aquí deberia leer cada uno de los archivos .md y sacar los links 
/* arrayx = ['C:/Users/ASUS/Desktop/Laboratoria/bog001-md-links/assets/README.md','C:/Users/ASUS/Desktop/Laboratoria/bog001-md-links/node_modules/follow-redirects/README.md']
const reading =(probAsset)=>{
    const arr = [];
    probAsset.forEach(file, () =>{
        const readingFile = fs.readFileSync(file,{ encoding: 'utf8' })
        const match = linkify.match(readingFile)
        match.forEach(link, () => {
            arr.push(link)
        })
    return arr
    })
}


reading(arrayx) */





