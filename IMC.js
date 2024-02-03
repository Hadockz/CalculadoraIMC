const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura*altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC <= 18.5){
            classificacao = 'abaixo no peso';
        }else if (valorIMC >= 18.6 && valorIMC <= 24.9) {
            classificacao = 'peso ideal. Muito bem.';
        }else if (valorIMC >= 25.0 && valorIMC <=29.9){
            classificacao = 'levemente acima do peso';
        }else if (valorIMC >= 30.0 && valorIMC <= 34.9 ) {
            classificacao = 'Obesidade grau I. Cuidado';
        }else if (valorIMC >= 35,0 && valorIMC <=39.9) {
            classificacao = 'Obesidade grau II. Procure um médico';
        }else {
            classificacao = 'Obesidade grau III. Procure um médico urgente!!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    
    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);
