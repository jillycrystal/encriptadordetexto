// Selecciona los elementos del DOM
const inputTextElement = document.getElementById('ingreso-de-texto');
const outputTextElement = document.getElementById('salida-de-texto');

// Función para validar la entrada
inputTextElement.addEventListener('input', function() {
    let text = inputTextElement.value;

    // Verificar si hay letras mayúsculas o caracteres especiales
    if (/[^a-z\s]/.test(text)) {
        // Mostrar mensaje de advertencia
        alert('Por favor, ingresa solo letras minúsculas y sin acentos.');
        // Eliminar caracteres no permitidos
        inputTextElement.value = text.replace(/[^a-z\s]/g, '');
    } 
});

// Función para encriptar el texto
document.getElementById('boton-encriptar').addEventListener('click', function() {
    let text = inputTextElement.value;
    let textoEncriptado = text.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
    outputTextElement.value = textoEncriptado;
});

// Función para desencriptar el texto
document.getElementById('boton-desencriptar').addEventListener('click', function() {
    let text = inputTextElement.value;
    let textoDesencriptado = text.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
    outputTextElement.value = textoDesencriptado;
});

// Función para copiar el texto encriptado/desencriptado
document.getElementById('boton-copiar').addEventListener('click', function() {
    outputTextElement.select();
    document.execCommand('copy');
    alert('Texto copiado!');
});


//Mostrar u ocultar imagen a la derecha 

const textarea = document.querySelector('.panel-izquierdo textarea');
const container = document.querySelector('.container-2.panel-derecho');

textarea.addEventListener('input', () => {
    if (textarea.value.trim() === '') {
        container.classList.remove('hide-image-text');
        container.classList.remove('show-textarea-button');
    } else {
        container.classList.add('hide-image-text');
        container.classList.add('show-textarea-button');
    }
});