function validateStatusCode(status){
    if(status >=200 && status<300){
        console.log("Request is fine!")
    }
}

const validateStatusCode_Exp=function (status){
    if(status >=200 && status<300){
        console.log("Request is fine!")
    }
}

//validateStatusCode_Arrow(204) - gives ReferenceError -TDZ
//Arrow Function
const validateStatusCode_Arrow=(status)=>{
    if(status >=200 && status<300){
        console.log("Request is fine!")
    }
}

validateStatusCode_Arrow(204)
