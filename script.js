const secondButton = document.querySelector('#finalizar')
const firstAnswer = document.querySelector('#resposta')
const button = document.querySelector('#adicionar')
const text = document.querySelector('#valor')
const lastAnswer = document.querySelector('#resfinal')
const cleanIt = document.querySelector('#limpar')

let numberList = []


function addNewNumber() {

    const inputValue = parseFloat(text.value);

    if (isNaN(inputValue)) {
        alert("Por favor, insira um número.");
    } else if (inputValue <= 0) {
        alert("O número deve ser maior que zero.");
    } else if (inputValue > 100) {
        alert("O número deve ser menor ou igual a 100.");
    } else if (numberList.includes(inputValue)) {
        alert("O número " + inputValue + " já foi adicionado.")
    } else {
        numberList.push(inputValue);
        text.value = '';
        showNumber();
    }
}

function showNumber() {
     let firstResult = ''
    
        numberList.forEach( numero => {
        firstResult = firstResult + `O número ${numero} foi adicionado! <br>`
    })
    
    firstAnswer.innerHTML = firstResult
        
}

    function findMinMaxValues() {
        if (numberList.length === 0) {
            return { maxNumber: null, minNumber: null };
        }
  
    let maxNumber = numberList[0]
    let minNumber = numberList[0]
  
    for (let i = 0; i < numberList.length; i++) {
      if (numberList[i] > maxNumber) {
        maxNumber = numberList[i]
      }
      if (numberList[i] < minNumber) {
        minNumber = numberList[i]
      }
    }
    return { maxNumber, minNumber };
  }

  function findMedia() {

  }

    function giveFinalAnswer() {
        const comprimento = numberList.length;
    let somaValores = 0;

    for (let i = 0; i < numberList.length; i++) {
        somaValores += numberList[i];
    }

    const mediaValores = somaValores / comprimento;

    const { maxNumber, minNumber } = findMinMaxValues();

    let firstLastResult = `
        <p id="paragrafo1">
        Ao todo temos ${comprimento} números adicionados.
        </p>
        <p id="paragrafo1">
        O valor ${maxNumber} é o maior número da lista.
        </p>
        <p id="paragrafo1">
        O valor ${minNumber} é o menor número da lista.
        </p>
        <p id="paragrafo1">
        Média dos valores todos é de: ${mediaValores.toFixed(1)} 
        </p>
    `
   

    lastAnswer.innerHTML = firstLastResult;
}

    function cleanItUp() {
        lastAnswer.innerHTML = ''
        numberList = []
        firstAnswer.innerHTML = ''
    }




button.addEventListener('click', addNewNumber)
secondButton.addEventListener('click', giveFinalAnswer)
cleanIt.addEventListener('click', cleanItUp)
