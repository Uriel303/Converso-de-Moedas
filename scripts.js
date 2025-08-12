const convertButton = document.querySelector(".Convert-button")
const currencySelect = document.querySelector(".currency-select")
const convertReal = document.querySelector(".content-real")

function convertValue() {
    const inputCurrencyValue = document.querySelector(".input").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 5.50
    const euroToday = 6.30
    const libraToday = 1.5
    const btcToday = 118.300
    const realToday = 1.00



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "BTC") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / btcToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (convertReal.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (convertReal.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (convertReal.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (convertReal.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (convertReal.value == "BTC") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    const currencyNamereaL = document.getElementById("currency-real")
    const currencyImgcoVert = document.querySelector(".currency-img-convert")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/Dólar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "BTC") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/Real.png"
    }

    if (convertReal.value == "dolar") {
        currencyNamereaL.innerHTML = "Dólar americano"
        currencyImgcoVert.src = "./assets/Dólar.png"
    }

    if (convertReal.value == "euro") {
        currencyNamereaL.innerHTML = "Euro"
        currencyImgcoVert.src = "./assets/euro.png"
    }

    if (convertReal.value == "libra") {
        currencyNamereaL.innerHTML = "Libra"
        currencyImgcoVert.src = "./assets/libra.png"
    }

    if (convertReal.value == "BTC") {
        currencyNamereaL.innerHTML = "Bitcoin"
        currencyImgcoVert.src = "./assets/bitcoin.png"
    }

    if (convertReal.value == "real") {
        currencyNamereaL.innerHTML = "Real"
        currencyImgcoVert.src = "./assets/Real.png"
    }



    convertValue()
}

convertReal.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)

