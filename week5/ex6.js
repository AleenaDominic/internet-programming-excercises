function myInterval() {
    var element = document.getElementById('circle');
    var circleOpacity = element.style.opacity;
    element.style.opacity = circleOpacity - 0.01;
   }
   function myClickEvent() {
    setInterval(myInterval, 10);
   }
   function myLoadEvent() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity = 1;
   }
   document.addEventListener('DOMContentLoaded', myLoadEvent)
   