function cafe(item,callCustomer){
    console.log("Finding...1")
    console.log("FInding..2")
    console.log("FInding..3")
    console.log("Found: " +item)
    callCustomer()
}

function callCustomerAsItemFound(){
    console.log("1.calling on 987654321")
}

cafe("donut",callCustomerAsItemFound)

cafe("momo",function (){
    console.log("2.Anonymous Func- calling on 23434111111")
})

cafe("coffee",()=>{
    console.log("3.Arrow Func- calling on 343411111444")
})