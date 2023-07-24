function search() {
    document.getElementById('search').style.display='none';
    var form = document.getElementById('form');

    form.classList.remove('d-none');
    form.classList.add('d-block');
 
}


 // Evento 'click' en el documento para ocultar el formulario al hacer clic fuera de él
 document.addEventListener('click', function(event) {
  var form = document.getElementById('form');
  var search = document.getElementById('search');

  // Si el clic no se originó desde el formulario ni desde el elemento search, oculta el formulario.
  if (event.target !== form && event.target !== search) {
      form.classList.remove('d-block');
      form.classList.add('d-none');
      // También puedes usar: form.style.display = 'none';
  }
});



