const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    if (left < 360 && left + 40 < 400) {
      dodger.style.left = `${left + 1}px`;
        }
    }