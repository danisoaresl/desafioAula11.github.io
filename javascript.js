
function OpenCalculator() {
    var numero = parseInt(prompt('Digite um número inteiro: '));

    if(numero > 0 && numero < 100 && numero % 2 === 0){
    
        alert('O número atendeu aos critérios.');
    }else{
        alert('O número não atendeu aos critérios.');
    }
   
}
