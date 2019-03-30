function receive(e, f){
    let class_name = e.className;
    if (class_name === "number"){
        buildNumber(f);
    } else if (class_name === "operator"){
        operation_selector(f);
    }


    // if (e.className == "number"){
    //     console.log('success')
    // }
    // // console.dir(e.id.replace('btn-', ''));
    // console.dir(e);
}
let last_operator = "";
let stored_number = "";
let built_number = "";
function buildNumber(f){
    if (built_number == ""){
        document.querySelector("#screen").innerHTML = "";
        built_number += f;
        document.querySelector("#screen").innerHTML += f;
    } else{
        built_number += f;
        document.querySelector("#screen").innerHTML += f;
    }
}

function operation_selector(f){
    if (f == 'ac'){
        document.querySelector("#screen").innerHTML = "";
        built_number = "";
        stored_number = "";
        last_operator = ""; 
    } else if (f == '+'){
        document.querySelector("#screen").innerHTML = "+";
        addMe();
    }else if (f == '-'){
        document.querySelector("#screen").innerHTML = "-";
        subtractMe();
    }else if (f == 'x'){
        document.querySelector("#screen").innerHTML = "x";
        multiplyMe();
    }else if (f == '/'){
        document.querySelector("#screen").innerHTML = "/";
        divideMe();
    }else if (f == '='){
        equalMe();
    }
}

function addMe(){
    if (last_operator == ""){
        stored_number = built_number;
        built_number = "";
        last_operator = "+";
    } else if (last_operator == "+"){
        stored_number = parseInt(stored_number) + parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "+";
    } else if (last_operator == "-"){
        stored_number = parseInt(stored_number) - parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "+";
    } else if (last_operator == "/"){
        stored_number = parseInt(stored_number) / parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "+";
    } else if (last_operator == "x"){
        stored_number = parseInt(stored_number) * parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "+";
    } else if (last_operator == "="){
        built_number = "";
        last_operator = "+";
    }
}

function subtractMe(){
    if (last_operator == ""){
        stored_number = built_number;
        built_number = "";
        last_operator = "-";
    } else if (last_operator == "+"){
        stored_number = parseInt(stored_number) + parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "-";
    } else if (last_operator == "-"){
        stored_number = parseInt(stored_number) - parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "-";
    } else if (last_operator == "/"){
        stored_number = parseInt(stored_number) / parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "-";
    } else if (last_operator == "x"){
        stored_number = parseInt(stored_number) * parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "-";
    } else if (last_operator == "="){
        built_number = "";
        last_operator = "-";
    }
}

function multiplyMe(){
    if (last_operator == ""){
        stored_number = built_number;
        built_number = "";
        last_operator = "x";
    } else if (last_operator == "+"){
        stored_number = parseInt(stored_number) + parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "x";
    } else if (last_operator == "-"){
        stored_number = parseInt(stored_number) - parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "x";
    } else if (last_operator == "/"){
        stored_number = parseInt(stored_number) / parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "x";
    } else if (last_operator == "x"){
        stored_number = parseInt(stored_number) * parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "x";
    } else if (last_operator == "="){
        built_number = "";
        last_operator = "x";
    }
}

function divideMe(){
    if (last_operator == ""){
        stored_number = built_number;
        built_number = "";
        last_operator = "/";
    } else if (last_operator == "+"){
        stored_number = parseInt(stored_number) + parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "/";
    } else if (last_operator == "-"){
        stored_number = parseInt(stored_number) - parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "/";
    } else if (last_operator == "/"){
        stored_number = parseInt(stored_number) / parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "/";
    } else if (last_operator == "x"){
        stored_number = parseInt(stored_number) * parseInt(built_number);
        stored_number = stored_number.toString();
        built_number = "";
        last_operator = "/";
    } else if (last_operator == "="){
        built_number = "";
        last_operator = "/";
    }
}

function equalMe(){
    if (last_operator == ""){
        stored_number = built_number;
        document.querySelector("#screen").innerHTML = stored_number;
        built_number = "";
        last_operator = "=";
    } else if (last_operator == "+"){
        console.log('b');
        stored_number = parseInt(stored_number) + parseInt(built_number);
        console.log(stored_number);
        stored_number = stored_number.toString();
        console.log(stored_number);
        document.querySelector("#screen").innerHTML = stored_number;
        built_number = "";
        last_operator = "=";
    } else if (last_operator == "-"){
        stored_number = parseInt(stored_number) - parseInt(built_number);
        stored_number = stored_number.toString();
        document.querySelector("#screen").innerHTML = stored_number;
        built_number = "";
        last_operator = "=";
    } else if (last_operator == "/"){
        stored_number = parseInt(stored_number) / parseInt(built_number);
        stored_number = stored_number.toString();
        document.querySelector("#screen").innerHTML = stored_number;
        built_number = "";
        last_operator = "=";
    } else if (last_operator == "x"){
        stored_number = parseInt(stored_number) * parseInt(built_number);
        stored_number = stored_number.toString();
        document.querySelector("#screen").innerHTML = stored_number;
        built_number = "";
        last_operator = "=";
    }
}
