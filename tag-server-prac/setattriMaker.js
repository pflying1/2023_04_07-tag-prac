function setattributeMaker(tagName, setattriName, setattriValue, content) {
  return `<${tagName} ${setattriName}="${setattriValue}">${content}</${tagName}>`;
}
module.exports = setattributeMaker;
