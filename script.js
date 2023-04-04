function compute()
{
    let principle = document.getElementById('principal').value;
    let rate = document.getElementById('rate').value;
    let years = document.getElementById('years').value;
    let interest = principle * years * rate / 100;
    let amount = parseInt(principle) + parseFloat(interest);
    let result = document.getElementById('result');
    let year = new Date().getFullYear() + parseInt(years);

    if(principle.vlaue <= 0){
        alert("enter a valid value")
        document.getElementById('principle').value;
    }else {
        result.innerHTML = "If you deposit $" + principle + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of $" + amount + ",\<br\>in the year " + year + "\<br\>";
    }
    

    
}

const updateRate = () => {
    const rateScale = document.getElementById("rate").value;
    const rateVAlue = document.getElementById("rate_val");
    rateVAlue.innerText = rateScale;

    
}
        