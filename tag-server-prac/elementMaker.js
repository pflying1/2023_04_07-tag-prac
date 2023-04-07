function elementMaker(tagName, content) {
  return `<${tagName}>${content}</${tagName}>`;
}
module.exports = elementMaker;
