//Elaborado por Daniel Fernández (www.danielfernandez.co)
  //<![CDATA[
  function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
  }

  function getCookie(nombre){
    var nombreCookie, valorCookie, cookie = null, cookies = document.cookie.split(';');
    for (i=0; i<cookies.length; i++){
      valorCookie = cookies[i].substr(cookies[i].indexOf('=') + 1);
      nombreCookie = cookies[i].substr(0,cookies[i].indexOf('=')).replace(/^\s+|\s+$/g, '');
      if (nombreCookie == nombre)
        cookie = unescape(valorCookie);
    }
    return cookie;
  }
  //]]>