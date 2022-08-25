//Net Present Value function

function netPresentValue () {
    const anyArray = [];
    const investment = document.getElementById("inputInvestment");
    console.log(investment);
    const periods = document.getElementById("inputPeriod");
    const rate = document.getElementById("inputRate");
    const resultnpv = document.getElementById("resultnpv");

    for (var i = 0; i < periods.value; i++) {
        const newValues = anyArray.push(Number(prompt("new value")));
        console.log(anyArray);
    }

    const newValues = [];

    for (let j = 1; j < anyArray.length + 1; j++) {
        newValues.push(parseInt(anyArray[j-1] / Math.pow(1 + (rate.value / 100), j)));
        console.log(newValues);
    }

    const total = newValues.reduce( function (initialValue, finalValue) {
        return initialValue + finalValue;
    }, 0)

    const npv = parseInt(total - investment.value);

    if (npv > 0) {
        resultnpv.innerText = "The npv value is " + npv + ", with an investment of " + investment.value + ", an interest rate of " + rate.value + " and " + periods.value + " periods, is feasible";
    }
    else {
        resultnpv.innerText = "The npv value is " + npv + ", the investment wasn't feasible.";
    }
}

const calculationbutton = document.getElementById("NPVbutton");
calculationbutton.addEventListener('click',netPresentValue);


//Internal Rate of Return function:


function IRRCalc () {
    let guest = 0.001;
    const IRRvalues = [];
    const financed = document.getElementById("InputFinanced");
    const period = document.getElementById("inputCashFlows");

    const numericalFinanced = financed.value;
    const numericalPeriod = period.value;

    
    IRRvalues.push(-numericalFinanced);

    for (var i = 0; i < numericalPeriod; i++) {
      var rental = parseInt(prompt("Insert rental"));
      IRRvalues.push(rental);
      console.log(IRRvalues);
    }

    let inc = 0.00001;
    do {
        guest += inc;
        var NPV = 0;
        for (var j = 0; j < IRRvalues.length; j++) {
            NPV += IRRvalues[j] / Math.pow(1 + guest, j);
        }
    } while (NPV > 0)
    const newGuest = parseInt(guest * 100);
    console.log(newGuest);
    const resultIRR = document.getElementById("resultIRR");
    resultIRR.innerText = newGuest + "% is your IRR."
}

const buttonIRR = document.getElementById("IRRbutton");
buttonIRR.addEventListener('click', IRRCalc);



// Interes rate calculator

function InRaCalc() {
    const capitalInicial = document.getElementById("inputInitialCapital");
    const tasaInteres = document.getElementById("inputInteresRate");
    const añosInteres = document.getElementById("inputTime");
    const capitalResultado = document.getElementById("resultInRa");

    const capitalInicialNumerico = parseInt(capitalInicial.value);
    const tasaInteresNumerica = parseInt(tasaInteres.value);
    const añosInteresNumerico = parseInt(añosInteres.value);

    const capitalTotal = capitalInicialNumerico * Math.pow(1 + (tasaInteresNumerica/100), añosInteresNumerico);

    //here I add the function Math.round and Number.EPSILON operator to round the decimal digits of the capitalTotal number to 2 digits
    const capitalFinal = Math.round((capitalTotal + Number.EPSILON) * 100) / 100;

    capitalResultado.innerText = "You'll earn " + capitalFinal + "$ in " + añosInteresNumerico + " years, with an interest rate of " + tasaInteresNumerica + "% and " + capitalInicialNumerico + " $ of initial capital."   
}

const InRaButton = document.getElementById("InRabutton");
InRaButton.addEventListener('click', InRaCalc);

// Debt amortization by annualities

function AmorDebt() {
    const capitalPrestado = document.getElementById("inputLoanCapital");
    const tasaInteresAmr = document.getElementById("inputLoanRate");
    const anniosPagoAmr = document.getElementById("inputYearsLoan");
    const resultadoAmrDebt = document.getElementById("resultAmorDebt");

    const capitalPrestadoNmr = parseInt(capitalPrestado.value);
    const tasaInteresNmr = parseInt(tasaInteresAmr.value);
    const anniosPagoNmr = parseInt(anniosPagoAmr.value);

    const annualityNum = (capitalPrestadoNmr * (tasaInteresNmr/100) * Math.pow(1 + (tasaInteresNmr/100), anniosPagoNmr));


    const annualityDen =  Math.pow(1 + (tasaInteresNmr/100), anniosPagoNmr) - 1;

    const annuality = annualityNum / annualityDen;
    
    const annualityParsed = Math.round((annuality + Number.EPSILON) * 100) / 100;

    resultadoAmrDebt.innerText = "Your periodic pay must be " + annualityParsed + "$ to amortize your debt"
}

const amorDebtButton = document.getElementById("AmorDebtbutton");
amorDebtButton.addEventListener('click', AmorDebt);
