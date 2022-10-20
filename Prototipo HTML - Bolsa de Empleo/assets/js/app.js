/* Cuando el usuario hace clic en el botón 
alternar entre ocultar y mostrar el contenido del desplegable  */
$("*[data-dropdown]").on('click', function(e) {
    e.preventDefault();
    $("#" + $(this).data("dropdown")).toggleClass("visible");
});
//Cerrar el desplegable si el usuario hace clic fuera de él
window.addEventListener('click', function(e){
    $("*[data-dropdown]").map(function(){
        let id = this.id;
        let container = $(this).data("dropdown");
        if(!document.getElementById(id).contains(e.target)){
            $("#"+container).removeClass("visible");
        }
    });
});
