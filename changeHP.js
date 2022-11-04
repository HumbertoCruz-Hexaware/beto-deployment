/*const saveFile = require("fs").writeFileSync;
const pkgJsonPath =
  require.main.paths[1].split("node_modules")[0] + "./package.json";
const json = require(pkgJsonPath);
if (json.hasOwnProperty("homepage")) {
  json.homepage = "humberto-site.netlify.app";
}
saveFile(pkgJsonPath, JSON.stringify(json, null, 2));
*/
const fs = require("fs");
const fileName = "./package.json";
const file = require(fileName);

//file.key = "new value";
console.log(file.homepage);
file.homepage = "humberto-site.netlify.app";
if (file.hasOwnProperty("homepage")) {
  file.homepage = "humberto-site.netlify.app";
}

fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
  if (err) return console.log(err);
  //console.log(JSON.stringify(file));
  //console.log("writing to " + fileName);
});
