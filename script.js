var storeClass;
var selected = false;
var storedPieces = [];

// Right side div click
function pick(element) {
    let pieceClass = element.className;
    if (!selected && storedPieces.indexOf(pieceClass) === -1) {
        storeClass = element.className;
        element.style.opacity = 0.3;
        selected = true;
    }
}

// Left side div click
function place(element) {
    if (element.classList.length) {
        let removeClass = element.className;
        element.classList.remove(removeClass);
        storedPieces.indexOf(removeClass) !== -1 && storedPieces.splice(storedPieces.indexOf(removeClass), 1);
        document.querySelector("." + removeClass).style.opacity = 1;
    }
    if (storeClass) {
        element.classList.add(storeClass);
        selected = false;
        storedPieces.push(storeClass);
        storeClass = '';
    }
}