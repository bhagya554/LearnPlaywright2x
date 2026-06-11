const user = {
    firstName: "Bhagya",
    lastName: "Kudupudi",
    get fullName() {
        return this.firstName + "-" + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }


}


console.log(user.fullName)
user.fullName = "Jaasritha Guthula"
console.log(user.fullName)

// class User{
    // firstName,
    // lastName,
    // fullName(){
        // 
    // }
// }