
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});


/* scroll */
$(window).scroll(function(){

  if ($(this).scrollTop() > 400) {
      $("#menuNav").removeClass("navbar");
     $('#menuNav').addClass("bg-interno");
    } else {
  
     $("#menuNav").removeClass("bg-interno");
     $('#menuNav').addClass("navbar");
    }
 });

/* formulario */
$("#buttonContacto").click(function (){
alert("El mensaje fue enviado");
})

// test saltos de texto
$(document).ready(function() {
  // puntero cambia cuando nos acercamos a texto
$("#inicio, #QuienesSomos, #Destacados, #Contacto").mouseenter(function() {
    // Aplica la animación de salto
$(this).css("transform", "translateY(-10px)");
});
$("#inicio, #QuienesSomos, #Destacados, #Contacto").mouseleave(function() {
    // Reinicia la posición original
 $(this).css("transform", "translateY(0)");
});
});