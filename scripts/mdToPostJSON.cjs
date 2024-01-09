// Import
const fs = require("fs");
const { marked } = require("marked");

// Helper functions
const getFileName = (path) => {
  path = path.replace("\\", "/");
  return path.split("/").pop();
};
const getBaseName = (path) => {
  path = path.replace("\\", "/");
  return path.split("/").pop().split(".").shift();
};
const getExtention = (path) => {
  path = path.replace("\\", "/");
  return path.split("/").pop().split(".").pop();
};

// Define paths
const pathRoot = __dirname + "/.."; // Root dir of the project
const pathIn = pathRoot + "/src/posts";
const pathOut = pathRoot + "/public/posts";

// Filter .md files from target directory
const files = fs.readdirSync(pathIn);
const mdFiles = files.filter((filename) => getExtention(filename) === "md");

// Convert .md files to .json
for (let i = 0; i < mdFiles.length; i++) {
  const mdFile = mdFiles[i];
  const text = fs.readFileSync(`${pathIn}/${mdFile}`, "utf-8");
  const html = marked.parse(text);
  const jsonStr = JSON.stringify({ html: html });
  const filenameOut = getBaseName(mdFile).toLowerCase() + ".json";
  fs.writeFileSync(`${pathOut}/${filenameOut}`, jsonStr);
}
