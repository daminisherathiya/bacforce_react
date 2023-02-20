const fs = require("fs");
const glob = require("glob");

const imagesPathCheck = () => {
  glob("./.next/**/*.html", {}, (glob_err, files) => {
    if (glob_err) {
      throw glob_err;
    }

    // console.log(files);
    for (const file of files) {
      fs.readFile(file, (file_err, data) => {
        console.log(file);

        if (file_err) {
          throw file_err;
        }

        const file_data = data.toString();
        // console.log(file_data);
        // console.log(file_data.indexOf("'/images/"));
        if (file_data.indexOf('"/images/') != -1) {
          throw (
            `Path starting with "/images/ found in ${file}, ` +
            `which will work in development but won't work in production. ` +
            `Please use /landing/images/ instead.`
          );
        }
      });
    }
  });
};

imagesPathCheck();
