function efetuarlogin(){
clientes = JSON.parse(localStorage.getItem("clientes")) || []    
   let nomedeusuario = document.getElementById('inp-nomeDeusuario').value
   let senha =  document.getElementById('inp-senha').value
   let cpf = document.getElementById('inp-cpf').value

   for(let i = 0; i < clientes.length; i++){ 
 
      if(clientes[i].nomedeusuario === nomedeusuario && clientes[i].senha === senha && clientes[i].cpf === cpf  ){
        alert("Login efetuado👍") 
        window.location.href = "produto.html";

      }
    }
// }else{
// alert("login não efetuado, digite novamente...")
}


