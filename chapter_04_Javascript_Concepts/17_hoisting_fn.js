function getStatus(){
  console.log(status_code)
  var status_code="complete"
  console.log(status_code)
  if(true){
    console.log("block scope: " + status_code)
    var status_code="Incomplete"
    console.log("Inside block: ",status_code)
  }
}

getStatus()