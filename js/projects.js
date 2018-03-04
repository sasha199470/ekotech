const displayBlock = 'block';
const activeClass = 'active';
const pointClass = 'scale-point';
const lineClass = 'scale-line';

let children = document.getElementById('scale').children;
let selected = document.querySelectorAll(`[data-content-index='0']`).item(0);
selected.classList.add(displayBlock);

let selectedPoint = document.querySelectorAll(`[data-index='0']`).item(0);
selectedPoint.classList.add(activeClass);

const contents = [];

for(let i = 0; i < children.length; i++) {
    if (children[i].classList.contains(pointClass)) {
        const index = children[i].dataset.index;
        children[i].addEventListener("click", () => {
            selected.classList.remove(displayBlock);
            selected = document.querySelectorAll(`[data-content-index='${index}']`).item(0);
            selected.classList.add(displayBlock);

            selectedPoint.classList.remove(activeClass);
            selectedPoint = document.querySelectorAll(`[data-index='${index}']`).item(0);
            selectedPoint.classList.add(activeClass);
        });
    }
    else if (i !== 0 && children[i].classList.contains(lineClass)) {
        const index = children[i].dataset.lineIndex;
        const content = document.querySelectorAll(`[data-content-index='${index}']`).item(0);
        contents.push(content);
    }
}

function refreshLines() {
    if (window.innerWidth < 576) {
        contents.forEach(content => {
            const index = content.dataset.contentIndex;
            const line = document.querySelectorAll(`[data-line-index='${index}']`).item(0);
            const contentStyle = getComputedStyle(content);
            line.style.height = contentStyle.height;
        })
    }
    else {
        contents.forEach(content => {
            const index = content.dataset.contentIndex;
            const line = document.querySelectorAll(`[data-line-index='${index}']`).item(0);
            line.style.height = "";
        })
    }
}

window.onload = refreshLines;
window.onresize = () => {
    refreshLines()
};
