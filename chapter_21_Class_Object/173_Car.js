class Car{
    //CAB
    //Constructor
    constructor(name_given_during_obj_creation){
        this.name=name_given_during_obj_creation;
    }
    //Attribute

    //Behaviour
    drive(){
        console.log("i am driving", this.name);
    }
}

const car1=new Car("tesla")
car1.drive()

const car2=new Car("BMW");
car2.drive()