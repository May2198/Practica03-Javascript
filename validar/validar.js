function validarCamposObligatorios() {
    var bandera = true
  
    for (var i = 0; i < document.forms[0].elements.length; i++) {
      var elemento = document.forms[0].elements[i]
      if (elemento.value == '' && elemento.type == 'text') {
        if (elemento.id == 'cedula') {
          document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia'
        }
  
        elemento.style.border = '1px red solid'
         elemento.className = 'error'
        bandera = false
      }
    }
  
  
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
  
    if (cad !== "" && longitud === 10) {
      for (i = 0; i < longcheck; i++) {
        if (i % 2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); 
        }
      }
  
      total = total % 10 ? 10 - total % 10 : 0;
  
      if (cad.charAt(longitud - 1) != total) {
        alert('Error: cedula invalida');
      }
    }
    if (!bandera) {
      alert('Error: revisar los comentarios')
    }
  
  
    return bandera
  
  }
  
  function validarLetras(elemento) {
    if (elemento.value.length > 0) {
      var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
      console.log(miAscii)
  
      if (miAscii >= 97 && miAscii <= 122) {
        return true
      } else {
        elemento.value = elemento.value.substring(0, elemento.value.length - 1)
        return false
      }
    } else {
      return true
    }
  
  }
  
  function validarNumero(elemento) {
    if (elemento.value.length > 0) {
      var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
      console.log(miAscii)
  
      if (miAscii >= 48 && miAscii <= 57) {
        return true
      } else {
        elemento.value = elemento.value.substring(0, elemento.value.length - 1)
        return false
      }
    } else {
      return true
    }
  
  
  }
  
  function validarCorreo(elemento) {
    var contenido = document.getElementById('correo').value;
    var conte = contenido.split("@");
    var v1 = conte[1];
    var est = 'est.ups.edu.ec';
    var est1 = 'ups.edu.ec';
  
    if (contenido == "") {
      alert('no es correo valido');
    } else {
      if (contenido.length < 4) {
        alert('no es correo valido(1)');
      } else {
        if (v1 == est || v1 == est1) {
          alert(' correo valido');
        } else {
          alert("correo invalido");
        }
      }
    }
  }
  
  function ValidarFecha(){
    var Fecha = document.getElementById('fechaNacimiento').value;
    
    if(Fecha.length == 10){
     var Anio = Fecha.substr(6, 4); 
     var Mes = parseFloat(Fecha.substr(3, 2)) - 1;
     var Dia = Fecha.substr(0, 2); 
     
     var VFecha = new Date(Anio, Mes, Dia);
     
     if((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)){
      alert('Fecha valida');
     }
     else{
      alert('Fecha Invalida');
     }
    }
    
   }

  
  