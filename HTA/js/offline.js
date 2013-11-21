var db = SQLite({ shortName: 'HTA' });

function resetDB () {
	drop_tables();	 
	build_tables();
	hh_apartados();
	hh_casos();
	hh_caso_organos();	 
	hh_galerias();
	hh_grado_retinopatia();
	hh_hta();
	hh_imagenes();
	hh_modulos();
	hh_organos();
	hh_preguntas();	 
	hh_pregunta_opciones();
	hh_respuestas_usuarios();
	hh_tablas();
	hh_usuarios();
}

function build_tables () {
	db.createTable('hh_apartados', 'IDAPARTADO INTEGER PRIMARY KEY, TITULO_APARTADO TEXT, CONTENIDO_APARTADO TEXT, FECHA TEXT');
	db.createTable('hh_casos', 'ID INTEGER PRIMARY KEY, NOMBRE TEXT, CONTENIDO TEXT, HTA INTEGER, GRADO INTEGER, GALERIA TEXT, FECHA TEXT');
	db.createTable('hh_caso_organos', 'ID INTEGER PRIMARY KEY, IDCASO INTEGER, ORGANO TEXT');
	db.createTable('hh_galerias', 'ID_GALERIA INTEGER PRIMARY KEY, NOMBRE_GALERIA TEXT, FECHA_GALERIA TEXT');
	db.createTable('hh_grado_retinopatia', 'ID_GRADO_RETINOPATIA INTEGER PRIMARY KEY, NOMBRE TEXT, DESCRIPCION TEXT');
	db.createTable('hh_hta', 'ID_HTA INTEGER PRIMARY KEY, NOMBRE TEXT, DESCRIPCION TEXT');
	db.createTable('hh_imagenes', 'ID_IMAGEN INTEGER PRIMARY KEY, ID_GALERIA TEXT, URL TEXT, URL_THUMB TEXT, TITULO_IMAGEN TEXT, DESCRIPCION TEXT, DIR_URL TEXT, DIR_URLTHUMB TEXT');
	db.createTable('hh_modulos', 'IDMODULO INTEGER PRIMARY KEY, MODULO TEXT, FECHA TEXT');
	db.createTable('hh_organos', 'ID_ORGANO INTEGER PRIMARY KEY, NOMBRE_ORGANO TEXT, CONTENIDO_ORGANO TEXT, IMAGEN_ORGANO TEXT, FECHA_ORGANO TEXT');
	db.createTable('hh_preguntas', 'IDPREGUNTA INTEGER PRIMARY KEY, PREGUNTA TEXT, IDMODULO INTEGER, DESCRIPCION TEXT, GALERIA INTEGER, FECHA TEXT');
	db.createTable('hh_pregunta_opciones', 'ID_PREGUNTA INTEGER, ID_OPCION INTEGER PRIMARY KEY, TEXTO_OPCION TEXT, CORRECTA INTEGER, FECHA TEXT');
	db.createTable('hh_respuestas_usuarios', 'ID_RESPUESTA INTEGER PRIMARY KEY, ID_USUARIO INTEGER, MODULO INTEGER, RESPUESTA TEXT');
	db.createTable('hh_tablas', 'ID_TABLA INTEGER PRIMARY KEY, NOMBRE_TABLA TEXT, CONTENIDO_TABLA TEXT, ID_GALERIA TEXT, FECHA_TABLA TEXT');
	db.createTable('hh_usuarios', 'ID_USUARIO INTEGER PRIMARY KEY, NOMBRE TEXT, APELLIDO TEXT, EMAIL TEXT, N_COLEGIADO INTEGER, CENTRO_TRABAJO TEXT, ESPECIALIDAD TEXT, ID_PROVINCIA INTEGER, CLAVE TEXT, FECHA_REGISTRO DATE, ULT_LOGIN DATE');
}

function drop_tables(){
	db.dropTable('hh_apartados');
	db.dropTable('hh_casos');
	db.dropTable('hh_caso_organos');
	db.dropTable('hh_galerias');
	db.dropTable('hh_grado_retinopatia');
	db.dropTable('hh_hta');
	db.dropTable('hh_imagenes');
	db.dropTable('hh_modulos');
	db.dropTable('hh_organos');
	db.dropTable('hh_preguntas');
	db.dropTable('hh_pregunta_opciones');
	db.dropTable('hh_respuestas_usuarios');
	db.dropTable('hh_tablas');
	db.dropTable('hh_usuarios');
}

function hh_apartados () {
	var parametros = {
        "accion" : "hh_apartados"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_apartados', { IDAPARTADO: $(this)[0].IDAPARTADO, TITULO_APARTADO: $(this)[0].TITULO_APARTADO, CONTENIDO_APARTADO: $(this)[0].CONTENIDO_APARTADO, FECHA: $(this)[0].FECHA });
                });
            }
    });
}

function hh_casos () {
	var parametros = {
        "accion" : "hh_casos"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_casos', { ID: $(this)[0].ID, NOMBRE: $(this)[0].NOMBRE, CONTENIDO: $(this)[0].CONTENIDO, HTA: $(this)[0].HTA, GRADO: $(this)[0].GRADO, GALERIA: $(this)[0].GALERIA, FECHA: $(this)[0].FECHA});
                });
            }
    });
}

function hh_caso_organos () {
	var parametros = {
        "accion" : "hh_caso_organos"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_caso_organos', { ID: $(this)[0].ID, IDCASO: $(this)[0].IDCASO, ORGANO: $(this)[0].ORGANO});
                });
            }
    });
}

function hh_galerias () {
	var parametros = {
        "accion" : "hh_galerias"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_galerias', { ID_GALERIA: $(this)[0].ID_GALERIA, NOMBRE_GALERIA: $(this)[0].NOMBRE_GALERIA, FECHA_GALERIA: $(this)[0].FECHA_GALERIA});
                });
            }
    });
}

function hh_grado_retinopatia () {
	var parametros = {
        "accion" : "hh_grado_retinopatia"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_grado_retinopatia', { ID_GRADO_RETINOPATIA: $(this)[0].ID_GRADO_RETINOPATIA, NOMBRE: $(this)[0].NOMBRE, DESCRIPCION: $(this)[0].DESCRIPCION});
                });
            }
    });
}

function hh_hta () {
	var parametros = {
        "accion" : "hh_hta"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_hta', { ID_HTA: $(this)[0].ID_HTA, NOMBRE: $(this)[0].NOMBRE, DESCRIPCION: $(this)[0].DESCRIPCION});
                });
            }
    });
}

function hh_imagenes () {
	var parametros = {
        "accion" : "hh_imagenes"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_imagenes', { ID_IMAGEN: $(this)[0].ID_IMAGEN, ID_GALERIA: $(this)[0].ID_GALERIA, URL: $(this)[0].URL, URL_THUMB: $(this)[0].URL_THUMB, TITULO_IMAGEN: $(this)[0].TITULO_IMAGEN, DESCRIPCION: $(this)[0].DESCRIPCION, DIR_URL: $(this)[0].DIR_URL, DIR_URLTHUMB: $(this)[0].DIR_URLTHUMB});
                });
            }
    });
}

function hh_modulos () {
	var parametros = {
        "accion" : "hh_modulos"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_modulos', { IDMODULO: $(this)[0].IDMODULO, MODULO: $(this)[0].MODULO, FECHA: $(this)[0].FECHA});
                });
            }
    });
}

function hh_organos () {
	var parametros = {
        "accion" : "hh_organos"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_organos', { ID_ORGANO: $(this)[0].ID_ORGANO, NOMBRE_ORGANO: $(this)[0].NOMBRE_ORGANO, CONTENIDO_ORGANO: $(this)[0].CONTENIDO_ORGANO, IMAGEN_ORGANO: $(this)[0].IMAGEN_ORGANO, FECHA_ORGANO: $(this)[0].FECHA_ORGANO});
                });
            }
    });
}

function hh_preguntas () {
	var parametros = {
        "accion" : "hh_preguntas"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){ 
                	db.insert('hh_preguntas', { IDPREGUNTA: $(this)[0].IDPREGUNTA, PREGUNTA: $(this)[0].PREGUNTA, IDMODULO: $(this)[0].IDMODULO, DESCRIPCION: $(this)[0].DESCRIPCION, GALERIA: $(this)[0].GALERIA, FECHA: $(this)[0].FECHA});
                });
            }
    });
}

function hh_pregunta_opciones () {
	var parametros = {
        "accion" : "hh_pregunta_opciones"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_pregunta_opciones', { ID_PREGUNTA: $(this)[0].ID_PREGUNTA, ID_OPCION: $(this)[0].ID_OPCION, TEXTO_OPCION: $(this)[0].TEXTO_OPCION, CORRECTA: $(this)[0].CORRECTA, FECHA: $(this)[0].FECHA});
                });
            }
    });
}

function hh_respuestas_usuarios () {
	var parametros = {
        "accion" : "hh_respuestas_usuarios"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){
                	db.insert('hh_respuestas_usuarios', { ID_RESPUESTA: $(this)[0].ID_RESPUESTA, ID_USUARIO: $(this)[0].ID_USUARIO, MODULO: $(this)[0].MODULO, RESPUESTA: $(this)[0].RESPUESTA});
                });
            }
    });
}

function hh_tablas () {
	var parametros = {
        "accion" : "hh_tablas"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){ 
                	db.insert('hh_tablas', { ID_TABLA: $(this)[0].ID_TABLA, NOMBRE_TABLA: $(this)[0].NOMBRE_TABLA, CONTENIDO_TABLA: $(this)[0].CONTENIDO_TABLA, ID_GALERIA: $(this)[0].ID_GALERIA, FECHA: $(this)[0].FECHA});
                });
            }
    });
}

function hh_usuarios () {
	var parametros = {
        "accion" : "hh_usuarios"
    }
    $.ajaxq("db",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
                $(response).each(function (){ 
                	db.insert('hh_usuarios', { ID_USUARIO: $(this)[0].ID_USUARIO, NOMBRE: $(this)[0].NOMBRE, APELLIDO: $(this)[0].APELLIDO, EMAIL: $(this)[0].EMAIL, N_COLEGIADO: $(this)[0].N_COLEGIADO, CENTRO_TRABAJO: $(this)[0].CENTRO_TRABAJO, ESPECIALIDAD: $(this)[0].ESPECIALIDAD, ID_PROVINCIA: $(this)[0].ID_PROVINCIA, CLAVE: $(this)[0].CLAVE, FECHA_REGISTRO: $(this)[0].FECHA_REGISTRO, ULT_LOGIN: $(this)[0].ULT_LOGIN});
                });
            }
    });
}

function toBase64(id, url){
	var parametros = {
        "accion" : "base64",
        "imagen" : url
    }
    $.ajaxq("fotos",{
        data:  parametros,
        url:   'http://fbsecurized.com/hipermedia_hipertension/php/web_service.php',
        dataType: 'jsonp',
            beforeSend: function () {
                        
            },
            success:  function (response) {
            	console.log(id);
                db.update('hh_imagenes', { URL: response }, { ID_IMAGEN: id });  
                
                setTimeout (function (){
                	if($.ajaxq.isRunning() == false){
                		//Descarga completada...
                	}
                }, 2000);
            }
    });
}


function get_imagenes () {
	db.select('hh_imagenes', 'ID_IMAGEN, URL', null, null, function (r, q) { 
		var x; 
		for(x=0; x<r.rows.length; x++) { 
			toBase64(r.rows.item(x).ID_IMAGEN, r.rows.item(x).URL); 
		} 
	});	
}