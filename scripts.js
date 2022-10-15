const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const convertValues = async () => { //código api integrado

    const inputReais = document.getElementById('input-real').value //onde digita valor
    const realValueText = document.getElementById('real-value-text') // onde aparece o valor em real
    const currencyValueText = document.getElementById('currency-value-text') // onde aparece valor convertido

    const data = await fetch (' https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json()) //código api

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high    
   
    
    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', 
        currency: 'BRL' 
        }).format(inputReais)    
    
    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', 
            currency: 'USD' 
        }).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', 
            currency: 'EUR' 
        }).format(inputReais / euro)  
    }

    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', 
            currency: 'BTC' ,
            maximumSignificantDigits: 2           
        }).format(inputReais / bitcoin)
    }               
        
    }

    
    changeCurrency = () => {
    const value = document.getElementById('value')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === '€ Euro'){
        value.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.png"
    }

    if(select.value === 'US$ Dólar americano'){
        value.innerHTML = 'Dólar americano'
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if(select.value === 'Bitcoin'){
        value.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/Bitcoin.png"
        
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)