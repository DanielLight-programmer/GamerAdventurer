let clientes = []

function cadastrar(){
    clientes = JSON.parse(localStorage.getItem("clientes")) || []    
    
    let cliente = {
    nome: document.getElementById('inp-ssd-hd').value,
    data:document.getElementById('inp-modelomonitor').value,
    cpf: document.getElementById('inp-modelomemoriaram').value,
    nomedeusuario: document.getElementById('inp-modeloprocessador').value,
    senha: document.getElementById('inp-modelomouse').value,
    senha: document.getElementById('inp-modeloteclado').value,
    senha: document.getElementById('inp-modeloplacamae').value,
   
    
    
}

clientes.push(cliente)
localStorage.setItem('clientes', JSON.stringify(clientes))
console.log(cliente)
    console.log(clientes);
    limparformclientes();


}
function limparformclientes(){
    document.getElementById('inp-ssd-hd').value = ''
document.getElementById('inp-modelomonitor').value = ''
document.getElementById('inp-modelomemoriaram').value = ''
document.getElementById('inp-modeloprocessador').value = ''
    document.getElementById('inp-modelomouse').value = ''
    document.getElementById('inp-modeloteclado').value = ''
    document.getElementById('inp-modeloplacamae').value = ''
}