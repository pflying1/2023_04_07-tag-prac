const http = require("http");
const elementMaker = require("./elementMaker");
const setattributeMaker = require("./setattriMaker");
const render = require("./render");

const elementsData = [];
for (let i = 1; i < 6; i++) {
  elementsData.push(elementMaker("div", ` ${i}번 안녕하세요. `));
}
elementsData.push(setattributeMaker("div", "id", "header", "하이"));

const htmlData = render(elementsData.join(""));

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(htmlData);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Not found");
    res.end();
  }
});
server.listen(2080);
