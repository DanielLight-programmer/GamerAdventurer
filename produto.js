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









document.getElementById('inp-ssdhd').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        document.getElementById('inp-modelomonitor').focus()
    }
})


document.getElementById('inp-modelomonitor').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        document.getElementById('inp-modelomemoriaram').focus()
    }
})


document.getElementById('inp-modelomemoriaram').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        document.getElementById('inp-modeloprocessador').focus()
    }
})


document.getElementById('inp-modeloprocessador').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        document.getElementById('inp-modelomouse').focus()
    }
})


document.getElementById('inp-modelomouse').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        document.getElementById('inp-modeloteclado').focus()
    }
})


document.getElementById('inp-modeloteclado').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
       document.getElementById('inp-modeloplacamae').focus()
    }

})

document.getElementById('inp-modeloplacamae').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        cadastrarDispositivo()
    }
})


