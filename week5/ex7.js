function myKeyDown() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    
    element.style.left = positionLeft - 10 + 'px';
   }
   function myLoadEvent() {
    document.addEventListener('keydown', myKeyDown);
   }
   document.addEventListener('DOMContentLoaded', myLoadEvent);
   