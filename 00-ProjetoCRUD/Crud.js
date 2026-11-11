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




document.getElementById('inp-nome').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        document.getElementById('inp-dataDeNascimento').focus()
    }
})


document.getElementById('inp-dataDeNascimento').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        document.getElementById('inp-cpf').focus()
    }
})


document.getElementById('inp-cpf').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        document.getElementById('inp-nomeDeusuario').focus()
    }
})


document.getElementById('inp-nomeDeusuario').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        document.getElementById('inp-senha').focus()
    }
})


document.getElementById('inp-senha').addEventListener("keyup",(evento) =>{
    if(evento.key == "Enter"){
        cadastrarCliente()
    }
})
