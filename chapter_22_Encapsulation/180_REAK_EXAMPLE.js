class Person{
    //hide your child
    #child1;
    #child2;

    constructor(name,ch1,ch2){
        this.name=name;
        this.#child1=ch1;
        this.#child2=ch2;
    }

    getChild1(){
        return this.#child1
    }

    getChild2(){
        return this.#child2
    }

    setChild1(changed_name){
        this.#child1=changed_name
    }

    setChild2(changed_name){
        this.#child2=changed_name
    }

}

let p=new Person("Bhagya","Jaasritha","Chaitanya")
console.log(p.name)
//console.log(p.#child1)
console.log(p.getChild1())

p.setChild1("Hasini")
console.log(p.getChild1())