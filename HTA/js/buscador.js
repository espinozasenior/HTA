$('.boton_buscar').on('click', function(){
    localStorage.setItem('buscar', $('#search-10').val());
          if (/busqueda/.test(window.location.href) == false ){
                localStorage.setItem('atras', window.location.href);
         }
    window.location.replace('busqueda.html');
});