<script>
  // Your code here
  //completed code within events.html
  let b_size = 10;
  window.addEventListener("keydown", event => {
	  if (event.key == "ArrowUp") {
		  b_size = b_size + 5;
		  document.getElementById("balloon").style.fontSize = 
	  }
	  if (event.key == "ArrowDown") {
		  document.getElementById("balloon").style.fontSize = 
	  }
</script>