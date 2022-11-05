const fs = require("fs");
const fileName = "./package.json";
const file = require(fileName);

//file.key = "new value";
console.log(file.homepage);
file.homepage = "https://humberto-site.netlify.app/";
console.log(file.homepage);
console.log(file.name);
if (file.hasOwnProperty("homepage")) {
  file.homepage = "humberto-site.netlify.app";
}

fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
  if (err) return console.log(err);
  //console.log(JSON.stringify(file));
  //console.log("writing to " + fileName);
});
