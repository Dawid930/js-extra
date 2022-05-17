//minden objektumnak amit letrehounk van egy tervrajza
//minden prototipus objektum

const obj1 = {} //object literrallal hozzuk lete

//console.dir(obj1)

const obj2 = new Object() //ez ugyanaz mint felette
//console.dir(obj2)

const arr1 = [] //array literal
//console.dir(arr1)

const arr2 = new Array()
//console.dir(arr2)



function User(name) {
    this.name = name
    this.iam = function() {
        console.log(`"I am ${this.name}"`);
    }
}

const user1 = new User("Bela")

console.dir(user1.iam())

const user2 = new User("Julia")
console.dir(user2)


User.prototype.iam2 = function() {  //igy adunk a prototipushoy egy uj methodust es igy akkor eltudjuk erni peldany szinten 
    console.log(`"I am ${this.name}2"`);
}

const user3 = new User("Csaba")
console.dir(user3.iam2())

//const user3Proto = Object.getPrototypeOf(user3)  //ez a standard 
//console.log(user3Proto);
const user3Proto = user3.__proto__  //ez a nem standard 
console.log(user3Proto);



function CustomUser(name, role){
    User.call(this, name)
    this.role = role
}

const user4 = new CustomUser("David", "Frontenddev")
console.dir(user4)



