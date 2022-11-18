

const filename = "README.md";
filename.toLowerCase().split(' ').join('')

// "hello world this is a file"
// ["hello", "world", "this", "is", "a", "file"]
// helloworldthisisafile

fs.writeFile(`./${filename.toLowerCase().split(' ').join('')}.md`,data,(err)=>{});