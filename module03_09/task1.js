const files = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
const newArr = [];
const paternFile = /.html|.css/;
const filterFiles = (arrFile) => {
  for (let i = 0; i < arrFile.length; i++) {
    if (!paternFile.test(arrFile[i])) {
      newArr.push(arrFile[i]);
    }
  }
}
filterFiles(files);
console.log(newArr);