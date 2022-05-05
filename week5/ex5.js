function myClickEvent() {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.1;
   }
   function myLoadEvent() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity = '0.5';
   }
   document.addEventListener('DOMContentLoaded', myLoadEvent)