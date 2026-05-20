let isLoggedIn = true;
let userRole = "XYZ";

if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("admin can do all the things");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor — Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea you may be a guest! role");
    }
} 

else {
    console.log("You are not logged in!!");
}