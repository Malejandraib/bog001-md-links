/* eslint-disable */
const dirOrFileArr = [
    "C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md",
    "C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\otro.md",
    "C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md",
    "C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\otro.md",
];

const arrObjmd =
{
    href: 'https://www.lego.c/esfghjkn-us/404/',
    text: 'Node.js',
    file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\otro.md'
}
const arrObjmd2 =
{
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\otro.md'
}

const arrObjmd3 =
{
    href: 'http://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\otro.md'
}

const obj404 = {
    href: 'https://www.lego.c/esfghjkn-us/404/',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\otro.md',
    text: 'Node.js',
    status: 404,
    Check: 'FAIL'
}

const obj200 = {
    href: 'https://nodejs.org/es/',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\otro.md',
    text: 'Node.js',
    status: 200,
    Check: 'OK'
}

const obj301 = {
    href: 'http://nodejs.org/es/',
    path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\otro.md',
    text: 'Node.js',
    status: 301,
    Check: 'OK'
}


const mdvalidate = [
    {
        href: 'https://nodejs.org/es/about/',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Acerca de Node.js - Documentación oficial',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://nodejs.org/api/fs.html',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Node.js file system - Documentación oficial',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Node.js http.get - Documentación oficial',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://es.wikipedia.org/wiki/Node.js',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Node.js - Wikipedia',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'What exactly is Node.js? - freeCodeCamp',
        status: 301,
        Check: 'OK'
    },
    {
        href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: '¿Qué es Node.js y para qué sirve? - drauta.com',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt ',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: '¿Simplemente qué es Node.js? - IBM Developer Work',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Node.js y npm',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Módulos, librerías, paquetes, frameworks... ¿cuál',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Asíncronía en js',
        status: 404,
        Check: 'Ok'
    },
    {
        href: 'https://docs.npmjs.com/getting-started/what-is-npm',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'NPM',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Publicar packpage',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Crear módulos en Node.js',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Leer un archivo',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Leer un directorio',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://nodejs.org/api/path.html',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Path',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        path: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md',
        text: 'Linea de comando CLI',
        status: 200,
        Check: 'OK'
    }
]

const mdSinValidate = [
    {
        href: 'https://nodejs.org/es/about/',
        text: 'Acerca de Node.js - Documentación oficial',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://nodejs.org/api/fs.html',
        text: 'Node.js file system - Documentación oficial',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
        text: 'Node.js http.get - Documentación oficial',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://es.wikipedia.org/wiki/Node.js',
        text: 'Node.js - Wikipedia',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
        text: 'What exactly is Node.js? - freeCodeCamp',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
        text: '¿Qué es Node.js y para qué sirve? - drauta.com',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
        text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt ',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
        text: '¿Simplemente qué es Node.js? - IBM Developer Work',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
        text: 'Node.js y npm',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
        text: 'Módulos, librerías, paquetes, frameworks... ¿cuál',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
        text: 'Asíncronía en js',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://docs.npmjs.com/getting-started/what-is-npm',
        text: 'NPM',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        text: 'Publicar packpage',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        text: 'Crear módulos en Node.js',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
        text: 'Leer un archivo',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
        text: 'Leer un directorio',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://nodejs.org/api/path.html',
        text: 'Path',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    },
    {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'Linea de comando CLI',
        file: 'C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links\\assets\\Carpeta 1\\otro.md'
    }
]
const mocks = {
    dirOrFileArr,
    arrObjmd,
    arrObjmd2,
    arrObjmd3,
    obj404,
    obj200,
    obj301,
    mdSinValidate,
    mdvalidate,
}

module.exports = mocks 