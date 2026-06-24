class Student{
    static batchName="Playwright 2x"

    constructor(name){
        this.name=name;
    }

    display(){
        console.log("Student Name:" ,this.name ,"and belongs to",Student.batchName)
    }
}

const s1=new Student("Raj")
s1.display()

const s2=new Student("Sekhar")
s2.display()

const s3=new Student("Jain")
s3.display()

const s4=new Student("Azai")
s4.display()

const s5=new Student("Uma")
s5.display()





