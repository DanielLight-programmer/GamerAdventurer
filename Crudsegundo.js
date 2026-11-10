let clientes = []

function cadastrarDispositivo(){
    let dispositivos = JSON.parse(localStorage.getItem("dispositivos")) || []    
    
    let dispositivo = {
    ssdhd: document.getElementById('inp-ssdhd').value,
    monitor: document.getElementById('inp-modelomonitor').value,
    memoriaram: document.getElementById('inp-modelomemoriaram').value,
    processador: document.getElementById('inp-modeloprocessador').value,
    mouse: document.getElementById('inp-modelomouse').value,
    teclado: document.getElementById('inp-modeloteclado').value,
    placamae: document.getElementById('inp-modeloplacamae').value,   
}

dispositivos.push(dispositivo)

localStorage.setItem('dispositivos', JSON.stringify(dispositivos))
console.log(dispositivo)
    limparDispositivo();


}
function limparDispositivo(){
    document.getElementById('inp-ssdhd').value = ''
document.getElementById('inp-modelomonitor').value = ''
document.getElementById('inp-modelomemoriaram').value = ''
document.getElementById('inp-modeloprocessador').value = ''
    document.getElementById('inp-modelomouse').value = ''
    document.getElementById('inp-modeloteclado').value = ''
    document.getElementById('inp-modeloplacamae').value = ''
}