<script type="text/javascript">
$(function(){
  $("#nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});
</script>

<script type="text/javascript">
 $(document).scroll(function() {
    $('#menu').toggle($(this).scrollTop()>500)
 });​
 </script>
  <script>
  function openForm() {
    document.getElementById("contact_form").style.display = "block";
    document.getElementById("close_btn").focus();
    document.getElementById("email_field").focus();
    document.getElementById("open btn").style.display = "none"
  }
  
  function closeForm() {
    document.getElementById("contact_form").style.display = "none";
    document.getElementById("open btn").style.display = "inline"
  }
  </script>
  <script>
    var slideIndex = 0;
    carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 1500); // Change image every 2 seconds
}
  </script>

<script>
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>