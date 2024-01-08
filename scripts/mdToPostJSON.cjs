const fs = require("fs");
const projectRoot = __dirname + "/..";
const targetDir = projectRoot + "/src/posts";
console.log(targetDir);
const files = fs.readdirSync(targetDir);
console.log(files);
// .mdファイルの抽出
const mdFiles = files.filter((filename) => filename.split(".").pop() === "md");
console.log(mdFiles);
const { marked } = require("marked");

// １ファイルまるごと読み込む
const text = fs.readFileSync(`${targetDir}/${mdFiles[0]}`, "utf-8");
const html = marked.parse(text);
// オブジェクトを作ってからJSON.stringify
const obj = { html: html };
const jsonStr = JSON.stringify(obj);
fs.writeFileSync("output.json", jsonStr);
