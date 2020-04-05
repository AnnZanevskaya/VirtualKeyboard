export function createDomNode(element, ...classes) {
  let node = document.createElement(element);
  node.classList.add(...classes);

  return node;
}