//MAIN FUNCTION THAT WILL COMPUTE EVERY DATA
function compute() {
    
    //import elements
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let result = document.querySelector("#result");
    let year = new Date().getFullYear()+parseInt(years);

    //input validation
    if(principal <= 0){
        alert("Please enter a valid number!");
        principal.focus();
        principal = "";
    }
        result.innerHTML = `If you deposit <span class="highlighted">${principal}€</span>, at an interest rate of <span class="highlighted">${rate}%</span>. You will receive an amount of <span class="highlighted">${interest}€</span>, in the year <span class="highlighted">${year}</span>.`;
}

//update the value of the selected range
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        