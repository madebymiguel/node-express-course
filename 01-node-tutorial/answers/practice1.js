const os = require("os");
const { writeFile } = require("fs");
const { sentence } = require("./practice2");

writeFile(
  "./content/practice.txt",
  `Sentence: ${sentence} \nUser: ${os.userInfo().username},`,
  (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("done");
  }
);
