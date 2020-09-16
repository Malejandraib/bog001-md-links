const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const file = './README.md'
const asset ='./assets'
const linkify = md.linkify

// Aqui deberia resolver si el path es absoluto y normalizarlo 
const findPath = (lookingPath)=>{
    if (!path.isAbsolute(lookingPath)){
        console.log('here is a relative path ' + lookingPath)
        return path.resolve(path.normalize(lookingPath)) 
    }
    return path.isAbsolute(lookingPath); // true
}
console.log('this path is absolute: ' + findPath('.'))


const readingFolder = (pathPrueba) => {

    const assets = fs.statSync(pathPrueba)  //Verifica sí es un directorio o un file
    console.log('Here is a file: '+ assets.isFile());

    if (!assets.isFile()){
        let directoryPath = path.join(pathPrueba);
        console.log(directoryPath)
        let findDir = []
        fs.readdir(directoryPath, (err, content) => {   //passsing directoryPath and callback function
            if (err){  
                return console.log('Unable to scan directory: ' + err);
            }
            content.map(lookingDir =>{
                fs.lstat(path.join(pathPrueba, lookingDir), (err,stats) => {
                    if (err){  
                        return console.log('Unable to scan directory: ' + err);
                    }
                    if(stats.isDirectory()){
                        console.log(path.join(probAsset, lookingDir))
                        findDir.push(path.join(probAsset, lookingDir))
                        //readingFolder(path.join(probAsset, lookingDir))
                        console.log(findDir)
                        //return findDir
                    }
                    if(!stats.isDirectory()){
                        let arrayFiles = content.filter(filesFold =>{
                            if (path.extname(filesFold) =='.md') {
                                return filesFold
                            }
                        });
                        console.log(arrayFiles)
                    }
                
                })
            
            })


/*             else {
                let arrayFiles = content.filter(filesFold =>{
                    if (path.extname(filesFold) =='.md') {
                        return filesFold
                    }
                });
                console.log(arrayFiles)
                //return arrayFiles
            } */
        });
    }
}

readingFolder(asset)

       /*      let i = 0
            while (i <= findDir.length){
                console.log(path.extname(i) =='.md')
            } */