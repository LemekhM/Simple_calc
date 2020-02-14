let openCalc = document.querySelector('.button')
let wraperCalc = document.querySelector('#wraper_calc')

function onClicCalc(event) {
    event.preventDefault();
    wraperCalc.classList.toggle("wraper_calc_open");
}


function getSum(a,b,c) {
    if (isNaN(a) && isNaN(b) && isNaN(c)) {
        result = 'Number'
    } else {
        if (isNaN(a)) {
            a = 0
        }
        if (isNaN(b)) {
            b = 0
        }
        if (isNaN(c)) {
            c = 0
        }
        result = a+b+c
    }
    
    return result
}

function getMyltiply(a,b,c) {
    let result
    if (isNaN(a)&& isNaN(b) && isNaN(c)) {
        result = 'Number'
    } else {
        if ( isNaN(a)) {
            a = 1
        }
        if ( isNaN(b)) {
            b = 1
        } 
        if ( isNaN(c)) {
            c = 1
        }
        result = a*b*c
    }
    return result
}


let resultOperator = 0
function onclickOperator() {
    let operator = document.getElementsByName("calc")
    for (let i = 0; i < operator.length; i++) {
        if (operator[i].type === 'radio' && operator[i].checked) {
            resultOperator = operator[i].value;       
        }
  }
return inputNum()
}


function inputNum() {
    let result1, result2, result3
    let n1 = document.getElementById("n1").value
    n1 = parseInt(n1)
    let n2 = document.getElementById("n2").value
    n2 = parseInt(n2)
    let n3 = document.getElementById("n3").value
    n3 = parseInt(n3)
    let n4 = document.getElementById("n4").value
    n4 = parseInt(n4)
    let n5 = document.getElementById("n5").value
    n5 = parseInt(n5)
    let n6 = document.getElementById("n6").value
    n6 = parseInt(n6)
    let n7 = document.getElementById("n7").value
    n7 = parseInt(n7)
    let n8 = document.getElementById("n8").value
    n8 = parseInt(n8)
    let n9 = document.getElementById("n9").value
    n9 = parseInt(n9)
    if (resultOperator === 'sum') {
        result1 = getSum(n1, n2, n3)
        result2 = getSum(n4, n5, n6)
        result3 = getSum(n7, n8, n9)
    } else if (resultOperator === 'multiply') {
        result1 = getMyltiply(n1, n2, n3)
        result2 = getMyltiply(n4, n5, n6)
        result3 = getMyltiply(n7, n8, n9)
    } else {
        result1 = 'Number'
        result2 = 'Number'
        result3 = 'Number'
    }
    document.getElementById("result_1").innerText = result1
    document.getElementById("result_2").innerText = result2
    document.getElementById("result_3").innerText = result3
}

function mark() {
    let checkBox1 = document.getElementById("checkbox1");
    let checkBox2 = document.getElementById("checkbox2");
    let checkBox3 = document.getElementById("checkbox3")
    if (checkBox1.checked) {
        document.getElementById('form1').classList.add("backgroundInput");
    } else {
        document.getElementById('form1').classList.remove("backgroundInput");
    }
    if (checkBox2.checked) {
        document.getElementById('form2').classList.add("backgroundInput");
    } else {
        document.getElementById('form2').classList.remove("backgroundInput");
    }
    if (checkBox3.checked) {
        document.getElementById('form3').classList.add("backgroundInput");
    } else {
        document.getElementById('form3').classList.remove("backgroundInput");
    }
}






  