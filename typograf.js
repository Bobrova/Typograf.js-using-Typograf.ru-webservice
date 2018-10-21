(function(){

    "use strict";

  function textTypography(text,Handler){

    if (validateText(text)){
      getText(text,Handler);
    }
    else{
      alert('ошибка');
    }
  }

function getText(text,r_handler){
    var request = new XMLHttpRequest();
    var body = 'text=' + encodeURIComponent(text);
    request.open("POST", 'http://www.typograf.ru/webservice/', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    request.onreadystatechange = function() {
      if (request.readyState === request.DONE) {
        if (request.status === 200) {
          clearTimeout(xhrTimeout);
          r_handler(request.responseText);
        }
        else {
          r_handler('error');
        }
      }
    }
    request.send(body);

    var xhrTimeout = setTimeout( function(){ request.abort(); handleError("Timeout") }, 10000);

    function handleError(message) {
      // обработчик ошибки
      alert("Ошибка: "+message);
    }
  }

  function validateText(text){
    if (typeof text == 'string' && isEmpty(text)) {
    return true; 
  }
  return false
  }

  function isEmpty(str) {
  if (str.trim() == '') 
    return false;
    
  return true;
}
 // commonjs
    if (typeof exports === 'object') {
        module.exports = textTypography;
    }

    // AMD module
    else if (typeof define === 'function' && define.amd) {
        define(function() {
            return textTypography;
        });
    }

    // Browser global
    else {
        window.textTypography = textTypography;
    }

})();


