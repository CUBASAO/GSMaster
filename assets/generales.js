'use strict';
//*******************DECLARACION DE VARIABLES*************************/
var numTelefonoPropietario = 34658015672;
var textoEnviar = 'hola bv soy victor trasteando';
//*******************DECLARACION DE FUNCIONES*************************/
function prepareMesages(REEMPLAZO, textoEnviar) {
    let mesageChecked = textoEnviar.replace(regExSpace, REEMPLAZO);
    return mesageChecked;
}

function avoidHacking() {

}

function sendMesages(WHATSAPP_API, PHONE, TEXT, numTelefonoPropietario, mesageChecked) {
    let url_whatsapp = WHATSAPP_API + PHONE + numTelefonoPropietario + TEXT + mesageChecked;
    location.href = url_whatsapp;

}
//*******************EJECUCION PRINCIPAL*************************/
window.addEventListener('load', function() {
    console.log(prepareMesages(REEMPLAZO, textoEnviar));
    var btnWhatsapp = document.getElementsByTagName('input')[0];
    btnWhatsapp.addEventListener('click', function() {
        let msgChecked = prepareMesages(REEMPLAZO, textoEnviar);
        sendMesages(WHATSAPP_API, PHONE, TEXT, numTelefonoPropietario, msgChecked);
    });
});