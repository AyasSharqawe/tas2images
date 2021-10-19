var name = window.prompt("Whats your name ? ");
document.write("<H3 align=center> Hello " +name + ".</H3>")
function randphoto() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-photo');
    image.src = "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" ;
    div.appendChild(image);
}
