class BasePage1 {
    setup() {
        console.log("Base: open browser");
    }
    teardown() {
        console.log("Base: close browser");
    }
}
class UITest extends BasePage1 {
    setup() {
        super.setup(); // UITest will help you to call your parent function. super() - Constrcutor, super.fname() - functions name
        console.log("UI: maximize window");
    }
    teardown() {
        console.log("UI: take screenshot");
        super.teardown();

    }
}
let test = new UITest();
test.setup();
test.teardown()