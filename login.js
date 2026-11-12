function efetuarlogin(){
    clientes = JSON.parse(localStorage.getItem("clientes")) || []    
       let nomedeusuario = document.getElementById('inp-nomeDeusuario').value
   let senha =  document.getElementById('inp-senha').value

   for(let i = 0; i < clientes.length; i++){ 
 
 if(clientes[i].nomedeusuario === nomedeusuario && clientes[i].senha === senha){
alert("Login efetuado👍") 
}
 }
    
}