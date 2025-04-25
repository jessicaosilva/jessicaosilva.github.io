function calcularExperiencia(anoInicio, mesInicio = 1, diaInicio = 1) {
    const inicio = new Date(anoInicio, mesInicio - 1, diaInicio);
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    let resultado = '';
    if (anos > 0) resultado += anos + (anos === 1 ? ' ano' : ' anos');
    if (meses > 0) resultado += (anos > 0 ? ' e ' : '') + meses + (meses === 1 ? ' mês' : ' meses');
    if (!resultado) resultado = 'menos de um mês';

    return resultado;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tempo-experiencia').textContent = calcularExperiencia(2018, 1, 1);
});
