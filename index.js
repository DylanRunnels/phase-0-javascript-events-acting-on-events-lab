function moveDodgerRight() {
    let left = dodger.style.replace('px', '');
   let left = parseInt(leftNumbers, 10);
  
    if (left < gameWidth - dodgerWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });