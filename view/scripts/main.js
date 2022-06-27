//Refresh AC
$("#btn_ac").on("click", function(){
window.location=("../NodeJs-Calculator/")
})

//Calc
$("#btn_calc").on("click", function(){
    //alert("Hello")
    //console.log("OLA")
    let numbera = $("#numbera").val()
    let oper = $("#oper").val()
    let numberb = $("#numberb").val()
    //alert(numbera + oper + numberb)

    if (oper == '+') {
        result = eval(numbera) + eval(numberb);
    }
    else if (oper == '-'){
        result = numbera - numberb;
    }
    else if (oper == 'x') {
        result = numbera * numberb;
    }
    else {
        result = numbera / numberb;
    }

//alert(result);
$("#result").html(result)

})

