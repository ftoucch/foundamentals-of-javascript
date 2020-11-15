       console.log('hello');
        // alert ('Hello this is faith');

        // How to write a comment


    //variables

    var b = 'smoothie';
    console.log(b);


    var somenumber = 45;
    /* .... It's just a fancy way of saying change HTML with Javascript */
    //console.log(somenumber);

    //var age = prompt('what is your age ?');

    // document.getElementById('sometext').innerHTML = age;


    //Numbers in Javascript

    var num1 = 10;
    //increment num1 by 1
    num1++;

    //decrement num1 by 1
    num1--;

    console.log(num1);

    // Divide, multipky *, reminder %

    console.log(num1/6);

    //increment/decrement by any number you want i.e 20

    num1+=20;
    console.log(num1);

    /*Functions
       there are two major steps in creating a function
       1. create a function
       2. call the function
    
       */

       //create a function
    function fun()
    {
        console.log('this is a function');
    }

    //call a function

    fun();

    /* Lets create a function that takes in a name  and
    says hello followed by you name

    name: faith
    return: "Hello Qazi"
    */
    function greetings(name)
    {
     
        var result = 'Hello' +' ' + name;  // String Concatenation
        console.log(result);
    }
   // var name = prompt("what is your namr");
   // greetings(name);


    //function can also take arguments
    // How do we add Two numbers together in a function


    function sumNumbers(num1,num2)
    {
        var result = num1 + num2;
        console.log(num1 + num2);
    }

   // sumNumbers(10,10);


   //MY ASSIGNMENT

   // a function takes in names of members in the family and output the result

   function familytree(father,mother,sister,others)
   {
        var familytree = father + '\n' + mother + '\n' + sister + '\n' + others;
        console.log(familytree);
   }

   var father = prompt('what is your fathers name');
   var mother = prompt('what is your mothers name');
   var sister = prompt('what is your sisters name');
   var others = prompt('One more family Member pleease');

   familytree(father,mother,sister,others);
   