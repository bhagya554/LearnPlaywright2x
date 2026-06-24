class ICICI{
    #balance // # means private in JS, In Typescript - private

    constructor(name,balance)
    {
        this.name=name;
        this.#balance=balance;
    }

    getBalance(){
        return this.#balance
    }

    setBalance(newBalance,isCashier){
        if(isCashier){
            this.#balance=newBalance;
        }
        else{
            console.log("not allowed")
        }
    }
}


const bhagya=new ICICI("bhagya",1000);
console.log(bhagya.getBalance())//1000
bhagya.setBalance(1000000,false);
console.log(bhagya.getBalance())


const bhagya_father=new ICICI("murali",2000);
console.log(bhagya_father.getBalance())//2000
bhagya_father.setBalance(3000000,true);
console.log(bhagya_father.getBalance())