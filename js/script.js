
function calcularIMC() {

    //let -> Variável que não pode ser redeclarada e 
    //em case de ser criada dentro de um escopo {} só pode ser usada ali
    //const -> Constante que não pode ter seu valor alterado

    //Selecionando os inputs
    let peso = document.querySelector('#peso');
    let altura = document.querySelector('#altura');

    if (peso.value != '' && altura.value != '') {

        let resultado = document.querySelector('#resultado');
        
        //Guardando o valor digitado no input já convertendo para número com casas decimais
        let valorPeso = parseFloat(peso.value);
        let valorAltura = parseFloat(altura.value);

        //console.log(valorPeso);
        //console.log(valorAltura);

        let imc = valorPeso / (valorAltura*valorAltura);
        let classificao = '';

        if(imc < 18.5){
            classificao = 'Magreza';
        }

        else if(imc < 24.9){
            classificao = 'Normal';
        }

        else if(imc < 29.9){
            classificao = 'Sobrepeso';
        }

        else if(imc < 35){
            classificao = 'Obesidade';
        }

        else{
            classificao = 'Obesidade Grave';
        }

        resultado.innerHTML = `<h2>Seu IMC é: ${imc.toFixed(2)}</h2> <p>Sua classificação é: ${classificao}</p>`;

    }

    else{
        alert('Preencha todos os campos!');
    }


}

