//Private Fields - # - hidden data
//Public Fields - can be accessed anywhere within file(module)

class Credentials{
    #apiKey//Private variables are not allowed to be used outside
    user

    constructor(user,key){
        this.user=user//public
        this.#apiKey=key
    }

    getAuthHeader(){
        return "Bearer" + this.#apiKey
    }
}

let cred = new Credentials("admin","secret_key_123");
console.log(cred.user)
const token=cred.getAuthHeader()
console.log(token)

//console.log(cred.apiKey)#undefined
//console.log(cred.#apiKey)#error-Private field '#apiKey' must be declared in an enclosing class
