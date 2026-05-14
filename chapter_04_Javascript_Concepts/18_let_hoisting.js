console.log(score)
let score=100;
console.log(score)

{
    //TDZ - Temporary Dead Zone for score starts here
    //console.log(score)//Reference Error
    //score=50          //Reference Error
    //typeOf score      //Reference Error
    //TDZ for score ends here
let score=100;//Declaration reached, TDZ ends
console.log(score)//100(safe to access now)
}