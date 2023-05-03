// Your code here

const getDodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = getDodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        getDodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = getDodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0 && left < 360) {
        getDodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});



