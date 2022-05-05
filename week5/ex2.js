function myClickEvent() {
    var element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
   }
   function myLoadEvent() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
   }
   document.addEventListener('DOMContentLoaded', myLoadEvent);
   