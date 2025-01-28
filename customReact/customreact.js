// this is how I make a tree designing own custom render tree
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);
}

// this is how react see after compiling the component
const reactElement = {
  type: "a", // first hamesha tag likhte hai
  props: {
    href: "https://google.com", // phir attributes likhte hai
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

// render which take element and insert in the container
customRender(reactElement, mainContainer);
