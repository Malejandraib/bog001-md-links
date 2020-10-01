const readingFolder = (probAsset) => {
    //Verifica sí es un directorio o un file
    const assets = fs.statSync(probAsset)
    console.log(assets.isFile())
    //let result =[]
    if (!assets.isFile()){
      const directoryPath = path.join(probAsset);
  
      //passsing directoryPath and callback function
      fs.readdir(directoryPath, (err, files) => {
          if (err){  
              return console.log('Unable to scan directory: ' + err);
          } 
          //listing all files using forEach
          const arrayFiles = [];
          files.forEach(function (file) {
              console.log(file);
              if (path.extname(file)=='.md') {
                arrayFiles.push(file)
              }
          });
          return console.log(arrayFiles)
          //result = arrayFiles
      });
    }
  
    else {
      const readStream = fs.createReadStream(probAsset, { encoding: 'utf8' })
      
      readStream.on('data', (chunk) => {
        const arr = [];
  
        //Verificación de path .md
        if (path.extname(probAsset)=='.md') {
          //Extrae todos los links del documento .md
          const match = linkify.match(chunk)
          console.log(match.length)
          for (let i = 0; i < match.length; i++){
            arr.push(match[i])
          }
        }
        return console.log(arr)
        //result = arr
      });
    }
    //return result 
  };
  
  readingFolder(file)


  //Leer file deberá ser sync 
/* const readStream = fs.createReadStream(file, { encoding: 'utf8' })
readStream.on('data', (chunk) => {
  console.log('---------New Chunk------------');

  //Verificación de path .md

  //Extrae todos los links del documento .md
  const match = linkify.match(chunk)
  console.log(match.length)
  const arr = [];
  for (let i = 0; i < match.length; i++){
    //console.log(match[i].url);
    arr.push(match[i].url)
  }
  console.log(arr)

}) */



/* const readingFile = (file)=>{
  return new Promise((resolve, reject) =>{
    fs.readFile(file, 'utf8', (err, data) => {
      const match = linkify.match(data)
      resolve (match)
      reject (new Error (err))
    })
  })
}

console.log(readingFile(file)) */




// Verificación de url unicos 
/* const stats = (urlsArray) => {
  var i,
  len = urlsArray.length,
  out = [],
  obj = {};

for (i = 0; i < len; i++) {
obj[urlsArray[i]] = 0;
}
for (i in obj) {
out.push(i);
}
return out; // out.lenght quita todos los repetidos, con .length del array
} */

//status code, resolucion normal }

//Respuesta, res, status code, href, text



/* https.get('https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e', (res) => {
  
  const { statusCode } = res;
  console.log(res.statusCode , res.statusMessage)
  const contentType = res.headers['content-type'];

  let error;
  // Any 2xx status code signals a successful response but
  // here we're only checking for 200.
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  
}); */