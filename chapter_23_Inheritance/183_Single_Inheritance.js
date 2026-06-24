class BasePage{
    constructor(pageName){
        this.pageName=pageName;
    }

    open() {
        console.log("Opening the page:",this.pageName);
    }
    close() {
        console.log("Closing the page:",this.pageName);
    }
}
    
    
class LoginPage extends BasePage{

}

const page1=new LoginPage("Login Page");
page1.open();
page1.close();

const page2=new LoginPage("Registration Page");
page2.open();
page2.close();

