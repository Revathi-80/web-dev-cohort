const fs = require("fs");
const fsV2 = require("fs/promises");

// console.log("starting Program");

// fs.readFile("./hello.txt", "utf-8", (err, content) => {
//   if (err) {
//     console.log("Error reading file", err);
//   } else {
//     console.log("File contents:", content);
//   }
// });

// console.log("ending Program");

// sum(5, 2, (result) => {
//   console.log("sum is", result);
// });
// function sum(a, b, cb) {
//   setTimeout(() => {
//     cb(a + b);
//   }, 5 * 1000);
// }

// fs.readFile("./hello.txt", "utf-8", (err, content) => {
//   if (err) {
//     console.log("Error reading file", err);
//   } else {
//     fs.writeFile("backup.txt", content, (err) => {
//       if (err) {
//         console.log("Error writing file", err);
//       } else {
//         fs.unlink("./hello.txt", (err) => {
//           if (err) {
//             console.log("Error deleting file", err);
//           } else {
//             console.log("File deleted successfully");
//           }
//         });
//       }
//     });
//   }
// });

// fsV2.readFile('./backup.txt', 'utf-8')
//     .then( (content) => fs.writeFile("hello.txt", content))
//     .then( () => fs.unlink('./backup.txt'))
//     .catch( (err) => console.log(err))

function readFileWithPromise(filePath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, content) => {
      if (err) reject(err);
      resolve(content);
    });
  });
}

function writeFileWithPrommise(filePath, content) {
    return new Promise((resolve, reject)=>{
       fs.writeFile(filePath, content, (err)=>{
        if(err) reject(err)
        resolve()
       })
    })
}

function deleteFileWithPromise(filePath) {
    return new Promise((resolve, reject)=>{
         fs.unlink("./hello.txt", (err)=>{
            if(err) reject(err)
            resolve('Successfully deleted file')
         })
    })
}

readFileWithPromise("./backup.txt", "utf-8")
.then((content)=> writeFileWithPrommise('./hello.txt',content))
.then(() => deleteFileWithPromise("./backup.txt"))
.catch((err) => console.log(err))

async function wait(seconds) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        }, seconds*1000)
    })
}
