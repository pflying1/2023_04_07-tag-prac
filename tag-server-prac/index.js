const elementMaker = require("./elementMaker");
const setattributeMaker = require("./setattriMaker");
const render = require("./render");

let elementsData = [];
for (let i = 1; i < 6; i++) {
  elementsData.push(elementMaker("div", `${i}번 안녕하세요.`));
}
elementsData.push(setattributeMaker("div", "id", "header", "하이"));
console.log(elementsData);

const app = document.getElementById("app");
const htmldata = render(elementsData.join(""));
