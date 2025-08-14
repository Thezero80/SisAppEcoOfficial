const ConDocument = document.getElementById('conDocu');
const SinDocument = document.getElementById('sinDocu');

ConDocument.addEventListener('click', () => {
    SinDocument.style.display = 'block';
    ConDocument.style.display = 'block';
    setTimeout(() => {
        alert('AQUI TE REDIRECCIONO A LA PAGINA DE REPORTE "CON" IDENTIFICACIÓN');
        //window.location.href = 'aviso.html';
    }, 2000);
});
SinDocument.addEventListener('click', () => {
    SinDocument.style.display = 'block';
    ConDocument.style.display = 'block';
    setTimeout(() => {
        alert('AQUI TE REDIRECCIONO A LA PAGINA DE REPORTE "SIN" IDENTIFICACIÓN');
        //window.location.href = 'aviso.html';
    }, 2000);
});