let clientes = []

function cadastrarCliente(){
    clientes = JSON.parse(localStorage.getItem("clientes")) || []    
    
    let cliente = {
    nome: document.getElementById('inp-nome').value,
    data:document.getElementById('inp-dataDeNascimento').value,
    cpf: document.getElementById('inp-cpf').value,
    nomedeusuario: document.getElementById('inp-nomeDeusuario').value,
    senha: document.getElementById('inp-senha').value,
    
}

clientes.push(cliente)
localStorage.setItem('clientes', JSON.stringify(clientes))
console.log(cliente)
    console.log(clientes);
    limparformclientes();


}
function limparformclientes(){
    document.getElementById('inp-nome').value = ''
document.getElementById('inp-dataDeNascimento').value = ''
document.getElementById('inp-cpf').value = ''
document.getElementById('inp-nomeDeusuario').value = ''
    document.getElementById('inp-senha').value = ''
}