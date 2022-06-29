function calculadora (){
    const operacao = Number(prompt('escolha a operação:\n 1 - soma [+]\n 2 - subtração [-]\n 3 - multiplicação[*]\n 4 - divisã real[/]\n 5 - divisão inteira[%]\n 6 - potenciação[**] '));

    if (!operacao || operacao >= 7){
        alert('Erro - Operação invalida!');
        calculadora();
    }else{

    

    let n1 = Number(prompt('insira o primeiro valor:'));
    let n2 = Number(prompt('insira o segundo valor; '));
    let resultado; // console.log(operacao);

        if(!n1 || !n2){
            alert('Erro - parâmetros inválidos! ')
            calculadora();
        }else{

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaoperacao();
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaoperacao();
    }
    function multiplicacao(){
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`)
        novaoperacao();
    }
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaoperacao();
    }
    function divisaointeira(){
        resultado = n1 % n2;
        alert(`o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaoperacao();
    }
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
        novaoperacao();
    }
    function novaoperacao(){
        let opcao = prompt('deseja fazer outra operação?\n 1 - sim\n 2 - não');
        if (opcao == 1){
            calculadora();
        }else if (opcao == 2){
            alert('Até Mais');
        } else {
            alert('Digite uma opção valida');
            novaoperacao();
        }
    }
}

    if (operacao == 1) {
    soma();
    }else if (operacao == 2){
    subtracao();
    }else if (operacao == 3){
    multiplicacao();
    }else if (operacao == 4){
    divisaoReal();
    }else if (operacao == 5){
    divisaointeira();
    }else if (operacao == 6){
    potenciacao();
    
    }
}
}
calculadora();