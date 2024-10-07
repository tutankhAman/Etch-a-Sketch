let gridCount;
let divs;
const container = document.querySelector("#container");


function changeGridSize() {
    gridCount = prompt("What should be the grid resolution?");
    gridCount = parseInt(gridCount, 10);

    createGrid(gridCount);
}
const gridSize = document.querySelector("#gridSize");
gridSize.addEventListener("click", changeGridSize);


function createGrid(gridCount){
    container.innerHTML = "";
    
    let n = gridCount*gridCount;
    for (let i=0; i<n; i++) {
        divs = document.createElement("div");
        divs.classList.add("divs")
        container.appendChild(divs);
    }

    const divChange = document.querySelectorAll(".divs");
    divChange.forEach(div => {
        div.style.flex = `0 0 calc(100% / ${gridCount})`; // Adjust size per grid count
    });
}


