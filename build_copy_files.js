var fs_extra = require("fs-extra");

var source = "./landing";
var destination = "/Applications/XAMPP/xamppfiles/htdocs/mindforce/landing";

fs_extra.remove(destination, function (err) {
  if (err) {
    console.log("An error occured while deleting the folder.");
    return console.error(err);
  }
  console.log("Deletion completed!");

  fs_extra.copy(source, destination, function (err) {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
    console.log("Copy completed!");
  });
});
