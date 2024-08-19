function encriptar() {
    let texto = document.getElementById("entrada-texto").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("salida-texto").value = textoEncriptado;
    if (textoEncriptado !== "") {
        document.querySelector(".texto1").style.display = "none";
        document.querySelector(".texto2").style.display = "none";
        document.querySelector(".salida-texto").style.backgroundImage = "none";
        document.querySelector(".copiar").style.display = "block";
    }
}

function desencriptar() {
    let texto = document.getElementById("entrada-texto").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("salida-texto").value = textoDesencriptado;
    if (textoDesencriptado !== "") {
        document.querySelector(".texto1").style.display = "none";
        document.querySelector(".texto2").style.display = "none";
        document.querySelector(".salida-texto").style.backgroundImage = "none";
        document.querySelector(".copiar").style.display = "block";
    }
}

function copiar() {
    let texto = document.getElementById("salida-texto");
    texto.select();
    document.execCommand("copy");

    let anuncio = document.querySelector(".anuncio");
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
    }, 2000);
}