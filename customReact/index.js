function customRender(reactElement, mainElement){
const domElement = document.createElement(reactElement.type)
domElement.innerHTML(reactElement.children)
for (const prop in reactElement.props) {
    if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
container.appendchild(domElement)
}

const reactElement = {
    type:'a',
    props : {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children : 'Click here for Surprise'
}

const mainElement = document.querySelector('#root')
customRender(reactElement, mainElement)
