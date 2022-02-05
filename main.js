
// Funciones

function botonEncriptar(){
    const encriptar = document.getElementById('entrada_texto').value;
    const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("salida_texto").value = encriptado
    document.getElementById("entrada_texto").value="";
}


function botonDesencriptar(){
    const desencriptar = document.getElementById('entrada_texto').value;
    const desencriptado = desencriptar.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("salida_texto").value = desencriptado
    document.getElementById("entrada_texto").value="";
}

 

function copiarTexto(){
    var copyText = document.getElementById("salida_texto");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

}