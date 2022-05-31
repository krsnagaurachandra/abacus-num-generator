function main() {
    let btn = document.getElementById("new_number_button");
    var solutionBtn = document.getElementById('solution_btn');
    let clearbtn = document.getElementById("clearbtn");
    let number = document.getElementById("number");
    var solution = 0;
    var randInts = [];

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateNumber() {
    let signs = ["+", "-"]
    const rndInt = randomIntFromInterval(1, 9)
    const sign = signs[Math.floor(Math.random() * signs.length)];

    
    
    if (sign === "+"){
        solution += rndInt
    }
    else{
        solution -= rndInt
    }
    
    number.innerHTML = `${sign} ${rndInt}`;
    randInts.push(`${sign} ${rndInt}`)

    solutionBtn.addEventListener('click', () => {
        document.getElementById("solution_text").innerHTML = solution;
        console.log(randInts)
    })

    
}

document.addEventListener('keydown', e => {
    if (e.key === " ") {
        generateNumber();
    }
    else if (e.key === "Enter") {
        // console.log("S Pressed")
        document.getElementById("solution_text").innerHTML = solution;
        let numbersList = document.getElementById("numbers-list"); 

        console.log(randInts);

        randInts.forEach(item => {
            numbersList = document.getElementById("numbers-list");
            numbersList.innerHTML += `${item} <br>`
        });
        
    }
    console.log (e)
})
btn.addEventListener("click", generateNumber);
clearbtn.addEventListener("click",  () => {
    number.innerHTML = "0";
    document.getElementById("solution_text").innerHTML = "0";
})

}

main()