 $('.dropdown-toggle').dropdown();
document.addEventListener("DOMContentLoaded", function(event) {
     document.querySelector('#search').addEventListener("submit", function(event){
        event.preventDefault();
        $('.dropdown-toggle').dropdown();
     });
});