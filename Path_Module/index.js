import path from 'path';

const filePath = "Home/Downloads/abc.txt";

// getting file directory name

const dirName = path.dirname(filePath);
console.log(dirName); 

// getting file extension
const extName = path.extname(filePath);
console.log(extName);

// getting file name
const fileName = path.basename(filePath);
console.log(fileName);

//joining path
const joinedPath = path.join(dirName, fileName);
console.log(joinedPath);

//getting absolute path
const absolutePath = path.resolve(filePath);
console.log(absolutePath);

//parsing path
const parsedPath = path.parse(filePath);
console.log(parsedPath);