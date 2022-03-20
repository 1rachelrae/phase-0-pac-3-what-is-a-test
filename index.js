/*function add(x,y){
    return x + y;
}
console.log (add(1, 2));//dont forget to call your function and have the console print out what it's meant to say
console.log(add(80,9000));
function sub(x,y){
    return x - y;
}
console.log(sub(100, 10));
function say(greeting, firstName){
    return `${greeting}, ${firstName}!`;
}
console.log(say("greeting","firstName"))
console.log(say("Hello", "Liz"));

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  function div(x,y){
  return  x / y;
}
console.log(div(1,2));*/
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");//notice how the console is grayed out, that is VS codes way of saying it is unreaachable!
  }
  console.log(say("howdy", "partner"));

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  function sayHelloTo(firstName){
      console.log(firstName);
  }
  sayHelloTo("Bo");
  function div(x, y){
      console.log(x / y);
  }
  div("35", "7");
  function add(x, y){
      return(x + y);
  }
  console.log(add(5, 5));

  function sayHelloAgainTo(greeting, firstName){
      console.log(`${greeting}, ${firstName}!`);
  }
  sayHelloAgainTo("Good Afternoon", "Jessica");

  function repeatHello(greeting, firstName){
      console.log ("Howdy, Partner");
      return`${greeting}, ${firstName}!`;
  }
  console.log(repeatHello("Good afternoon", "Nina"));
  
  function repeatHelloAgain(greeting,lastName){
      console.log("Go Braves!")
    return `${greeting}, ${lastName}`
  }
  console.log(repeatHelloAgain("Whats up!?", "That's my Team"));

 /* function sayHi(){
      console.log('Hi')
  }
  sayHi();
  function sayHelloToLisa(){
    console.log("Hello, Lisa")
  }
  function sayHelloToBob() {
    console.log("Hello Bob")
  }
  //everything from function keyword to the ending curly braces is functionn declaration
  function sayHellotoSarah(){
    console.log("Hello Sarah")
  }//end function declaration

  //calling the function below
  sayHelloToLisa();
  sayHelloToBob();
  sayHellotoSarah();

  function sayHi(firstName){
      console.log(`Hello,${firstName}`);
  }
  //calling the function and passing the argument begins below the names replace the parameters(the placeholders)
  sayHi('Robin');
  sayHi('Raven');
  sayHi('Latanya');
  sayHi(5);
  sayHi(5 + 5);

  function sup(greeting,firstName){
      console.log(`${greeting} ${firstName}`);
      console.log("firstName:", firstName);
      console.log("greeting:", greeting);
      console.log(`${greeting}, ${firstName}`);
      console.log(firstName);
  }
  sup("Whats Up", "Karen");
  sup ("Whats up!?", "That's my Team");
  sup("Julio", "hello");*/

  function div(x, y){
     return x / y;
  }
 console.log(div(3,5));

 function divide(x, y){
     return x / y;
 }
console.log(divide(35, 7));

function loud(greeting,firstName){
    console.log(firstName);
    console.log(`${greeting}, ${firstName}`); 
    console.log (greeting, firstName);
}
loud("howdy", "wiggle"); /* ask about the difference between JS reading a string and an interpolation. both give a response. */

function blue(greeting, firstName){
    return `${greeting}, ${firstName}!`;
}
console.log(blue("Hello", "Liz"));

function blue (greeting, firstName){
    console.log(`${greeting},${firstName}`);
}
