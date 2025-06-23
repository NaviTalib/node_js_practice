// creata a file

import fs from 'fs';

// const createFile = (fileName, data) => {
//     fs.writeFile(fileName, data, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('File created successfully');
//         }
//     });
// }

// createFile('test.txt', 'Hello World!');


// const addData = (fileName, data) => {
//     fs.appendFile(fileName, data, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('Data added successfully');
//         }
//     });
// };

// addData('test.txt', '\nHello World! 2');
// addData('test.txt', '\nHello World! 3');

// read file

// const readData = (fileName) => {
//     fs.readFile(fileName, 'utf8', (err, data) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     });
// };

// readData('test.txt');

// create a directory

// const createDir = (dirName) => {    
//     fs.mkdir(dirName, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('Directory created successfully');
//         }
//     });
// };

// createDir('testDir');

//rename a file

// const renameFile = (oldFileName, newFileName) => { 
//     fs.rename(oldFileName, newFileName, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('File renamed successfully');
//         }
//     });
// };

// renameFile('test.txt', 'renameTest.txt');

// delete a file

// const deleteFile = (fileName) => {
//     fs.unlink(fileName, (err) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('File deleted successfully');
//         }
//     });
// }

// deleteFile('renameTest.txt');