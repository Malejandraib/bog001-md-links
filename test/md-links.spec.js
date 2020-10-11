/* eslint-disable */
const { mdLinks,findPath, dirOrFile, readingAsync, validate,} = require('../src/index');
const { mdvalidate } = require('./_mocks_.js');
const mocks = require('./_mocks_.js')
const relativePath = '.';
const pathPrueba = 'C:/Users/ASUS/Desktop/Laboratoria/bog001-md-links/assets';

describe('findPath', () => {
  it('should be a function', () => {
    expect(typeof findPath).toBe('function');
  });
  it('should resolve path relative to absolute', () => {
    expect(findPath(relativePath)).toEqual('C:\\Users\\ASUS\\Desktop\\Laboratoria\\bog001-md-links');
  });
  it('if path absolute then leave it', () => {
    expect(findPath(pathPrueba)).toEqual(pathPrueba);
  });
});

describe('dirOrFile', () => {
  it('should be a function', () => {
    expect(typeof dirOrFile).toBe('function');
  });
  it('extract .md paths, even in multiple directories', () => {
    expect(dirOrFile(pathPrueba)).toEqual(mocks.dirOrFileArr);
  });
});

describe('readingAsync', () => {
  it('should be a function', () => {
    expect(typeof readingAsync).toBe('function');
  });
  it('extract links from .md files', () => {
    return readingAsync(mocks.dirOrFileArr).then(data => {
      expect(data).toHaveLength(18)
    });
  });
});

describe('validate', () => {
  it('should be a function', () => {
    expect(typeof validate).toBe('function');
  });
  it('define 404 if the path is not found https', () => {
    return validate(mocks.arrObjmd).then(data => {
      expect(data).toEqual(mocks.obj404)
    });
  });
  it('define 200 if path already exist https', () => {
    return validate(mocks.arrObjmd2).then(data => {
      expect(data).toEqual(mocks.obj200)
    });
  });
  it('define 301 if path already exist http', () => {
    return validate(mocks.arrObjmd3).then(data => {
      expect(data).toEqual(mocks.obj301)
    });
  });
});

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('if validate: false and path then array objects', () => {
    return mdLinks(pathPrueba, { validate: false }).then(data => {
      expect(data).toEqual(mocks.mdSinValidate)
    });
  });
  it('if validate: true and path then array objects', () => {
    return mdLinks(pathPrueba, { validate: true }).then(data => {
      expect(data).toEqual(mocks.mdvalidate)
    });
  });
});

