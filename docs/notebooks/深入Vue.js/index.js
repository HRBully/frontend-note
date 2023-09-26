function Render(obj, root) {
  let node = document.createElement(obj.tag);
  if (typeof obj.children === 'string') {
    node.innerHTML = obj.children;
  }else if(obj.children) {
    obj.children.forEach(child => {
      Render(child, node);
    })
  }
  root.appendChild(node);
}