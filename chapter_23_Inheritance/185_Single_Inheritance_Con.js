class BaseTest{
    setup(){
        console.log("Base: open browser")
    }
}

class APITest extends BaseTest{
    setup(){
        console.log("API Test: open browser")
    }
}

let test1=new APITest();
test1.setup();


let test2=new BaseTest();
test2.setup();