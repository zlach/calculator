function receive(e, f){
    let class_name = e.className;
    console.dir(class_name);
    console.dir(f);
    if (class_name === "number"){
        buildNumber(f);
    } else if (class_name === "operator"){
        console.log(f);
        operation_selector(f);
    }


    // if (e.className == "number"){
    //     console.log('success')
    // }
    // // console.dir(e.id.replace('btn-', ''));
    // console.dir(e);
}
let stored_number = "";
let built_number = "";
function buildNumber(f){
    built_number += f;
    document.querySelector("#screen").innerHTML += f;
}

function operation_selector(f){
    if (f == 'ac'){
        document.querySelector("#screen").innerHTML = "";
        built_number = "";
        stored_number = ""; 
    } else if (f == '+'){
        document.querySelector("#screen").innerHTML = "+";
        addMe(f);
    }else if (f == '-'){
        document.querySelector("#screen").innerHTML = "-";
        subtractMe(f);
    }else if (f == 'x'){
        document.querySelector("#screen").innerHTML = "x";
        multiplyMe(f);
    }else if (f == '/'){
        document.querySelector("#screen").innerHTML = "/";
        divideMe(f);
    }else if (f == '='){
        document.querySelector("#screen").innerHTML = "=";
        equalMe(f);
    }
}

let last_operator = "";
function addMe(f){
    if (last_operator = ""){
        stored_number = built_number;
        built_number = "";
        last_operator = "+";
    } else if (last_operator = "+"){
        stored_number = parseInt(stored_number) + parseInt(built_number);
        stored_number = toString(stored_number);
        built_number = "";
        last_operator = "+";
    } else if (last_operator = "-"){
        stored_number = parseInt(stored_number) - parseInt(built_number);
        stored_number = toString(stored_number);
        built_number = "";
        last_operator = "+";
    } else if (last_operator = "/"){
        stored_number = parseInt(stored_number) / parseInt(built_number);
        stored_number = toString(stored_number);
        built_number = "";
        last_operator = "+";
    } else if (last_operator = "x"){
        stored_number = parseInt(stored_number) * parseInt(built_number);
        stored_number = toString(stored_number);
        built_number = "";
        last_operator = "+";
    }
}

