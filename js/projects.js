const displayBlock = 'block';
const activeClass = 'active';
const pointClass = 'scale-point';

let children = document.getElementById('scale').children;
let selected = document.querySelectorAll(`[data-content-index='0']`).item(0);
selected.classList.add(displayBlock);

let selectedPoint = document.querySelectorAll(`[data-index='0']`).item(0);
selectedPoint.classList.add(activeClass);

for(let i = 0; i < children.length; i++) {
    if (children[i].classList.contains(pointClass)) {
        children[i].addEventListener("click", () => {
            const index = children[i].dataset.index;

            selected.classList.remove(displayBlock);
            selected = document.querySelectorAll(`[data-content-index='${index}']`).item(0);
            selected.classList.add(displayBlock);

            selectedPoint.classList.remove(activeClass);
            selectedPoint = document.querySelectorAll(`[data-index='${index}']`).item(0);
            selectedPoint.classList.add(activeClass);
        });
    }
}
