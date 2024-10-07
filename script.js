let gridCount;
let divs;
const container = document.querySelector("#container");


function changeGridSize() {
    gridCount = prompt("What should be the grid resolution? Must be below 100");
    if (gridCount<=100) {
        gridCount = parseInt(gridCount, 10);

        createGrid(gridCount);  
    } else {
        alert("Invalid Value, Enter a value less than 100");
    }
}
const gridSize = document.querySelector("#gridSize");
gridSize.addEventListener("click", changeGridSize);

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(gridCount){
    container.innerHTML = "";
    
    let n = gridCount*gridCount;
    for (let i=0; i<n; i++) {
        divs = document.createElement("div");
        divs.classList.add("divs");

        divs.addEventListener('mouseover', function() {
            this.style.backgroundColor = getRandomRGB();
        });

        // divs.addEventListener('mouseout', function() {
        //     this.style.backgroundColor = "white";
        // });
        container.appendChild(divs);
    }

    const divChange = document.querySelectorAll(".divs");
    divChange.forEach(div => {
        div.style.flexBasis = `calc(100% / ${gridCount})`; // Adjust size per grid count
    });
}


