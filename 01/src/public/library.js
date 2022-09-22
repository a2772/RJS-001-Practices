export function createElement(element, attributes = {}, children = []){
    const elementor = document.createElement(element)
    let keys = Object.keys(attributes)
    keys.map(elem => elementor.setAttribute(elem,attributes[elem]))
    children.map(child => {
        if(typeof child === "string"){
            elementor.innerHtml += child
            return
        }else{
            elementor.appendChild(child)
        }
    })
    return elementor
}
export function render(content, rootElement){
    let rootElementor = document.getElementById(rootElement)
    rootElementor.appendChild(content)
}