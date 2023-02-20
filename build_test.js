const glob = require("glob");

glob("./.next/**/*.html", {}, (err, files) => {
  console.log(files);
  // var fr = new FileReader();
  // console.log(fr.readAsText(files[0]));
});
