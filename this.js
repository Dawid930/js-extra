//"use strict"

//console.log(this);

//"use strict"; //; kell
/* 
(function () {
    console.dir(this)
})() //immediately invoked function
 */
const user = {
    name: 'Rita',
    getName: function(){
        console.log('1' + this);
        (function () {
            console.log('2' + this)

        })()

        const af = () => {
            console.log('3' + this)
        }
        af()
    }
}


const ugn = user.getName
ugn()

/* ezekkel lehet tovabb menni  
call
apply
bind */


window.addEventListener('load', function() {
    console.log("this");
})