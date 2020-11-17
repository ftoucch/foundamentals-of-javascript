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

    //step 1 create the functions with an argument
   function familytree(father,mother,sister,others)
   {
        //add the arguments together
        var familytree = father + '\n' + mother + '\n' + sister + '\n' + others;
       //print the argument
        console.log(familytree);
   }

   /* ask user for the inputs
   var father = prompt('what is your fathers name');
   var mother = prompt('what is your mothers name');
   var sister = prompt('what is your sisters name');
   var others = prompt('One more family Member pleease');

   //returns this values to the functions argument

   familytree(father,mother,sister,others);
   */

   /*while Loops

   var num = 0;

   while (num < 100)
   {
       num += 1;
       console.log(num);
   }

    */

   // for loops

 //  for (let num=0; num<=100; num++)
   // {
     //  console.log(num);
   // }

    // Data types
    let your_age = 18;
    let yourName = 'Bob';
    let name = {first: 'jane', last:'Doe'}; //object
    let truth = false; //boolean
    let groceries = ['Apple', 'Banana', 'Oranges']; //array
    let random; //undefined
    let nothinig = null; //value null


    //Strings in JavaScript (Common method)

    let fruit = 'banana';
    let moreFruit = 'banana\napple' // new line
    console.log(fruit.length);  //check the length
    console.log(fruit.indexOf('an')); //check if a character is present in string
    console.log(fruit.slice(2,6)); // slice from an end to another end
    console.log(fruit.replace('ban','123')); //replace a string with another
    console.log(fruit.toLowerCase()); // convert string to Lowercase
    console.log(fruit.toUpperCase()); //Convert string to Uppercase
    console.log(fruit.charAt(2)); //get a character at a specific number location
    console.log(fruit.split('')); //split a Character with ''


    // Array
    let fruits = ['banana', 'apple', 'orange', 'pineapples'];
     fruits = new Array ('banana', 'apple', 'orange', 'pineapples');

    console.log(fruits[2]); //access value at index 2nd

    fruits[0] = 'pear';
    console.log(fruits);

    for (let i = 0; i< fruits.length; i++)
    {
        console.log(fruits[i]);
    }


    // Array Common Method

    console.log('to string', fruits.toString());  // converts array to string

    console.log('Join', fruits.join(' - ')); // Joins character in array with a specifed character

    console.log(fruits, fruits.pop(), fruits); // removes the last time and returns it 

    console.log(fruits.push('blackberries'), fruits); //appends an item

    console.log (fruits[4]) ;

    fruits[fruits.length] = 'new fruit' ; //same as push

    console.log(fruits);


    fruits.shift(); //removes the first element from array

    console.log(fruits);

    fruits.unshift('kiwi');  // adds a first elelment to an array

    console.log(fruits);

    let vegetables = ['asparagus', 'tomato', 'broccoli'];
    let allGroceries = fruits.concat(vegetables); // combines all arrays

    console.log(allGroceries);


    console.log(allGroceries.slice(1,4));  //slice an array

    console.log(allGroceries.reverse());   // reverse the array

    console.log(allGroceries.sort());  // sorts object alphabetically


    let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
    console.log(someNumbers.sort(function(a,b) {return a-b})); // sorted in ascending number
    console.log(someNumbers.sort(function(a,b) {return a-b})); // sorted in decending number


    //function to loop through and add element to an array
    let emptyArray = new Array()  

    for(let num = 0; num <= 10; num++)
    {
        // let addN = prompt('add any Number'); an additional function to allow user create their own array
        emptyArray.push(num);
    }

    console.log(emptyArray);

    // Objects in Javascript

    let student = {
        first: 'Alimi',
        last: 'Fatai', 
        age:25, 
        height:170,
        studentInfo: function()
        {
            return this.first + '\n' + this.last + '\n' + this.age;
        }
    };
   // console.log(student.first);
   // console.log(student.last);

    //student.first = 'not rafeal'; //changes values
    //console.log(student.first);

    student.age++;

    console.log(student.age);

    console.log(student.studentInfo())


    // Conditionals, Control Flows (if else)

    //18-35 is my target dermographic

    //&& AND
    // || OR

        var age = 45;
    if( (age>=18) && (age<35) )
    {
        status ='target demo'
        console.log(status);
    }
    else
    {
        status = 'not my audience'
        console.log(status);
    }


    //Switch Statement
    //differentiate Between weekdays vs. Weekend
    //day 0----->Sunday ----> weekend
    //day 1----->Monday ----> weekday
    //day 2----->Tuesday ----> weekday
    //day 3----->Wednesday ----> weekday
    //day 4----->thursday ----> weekday
    //day 5----->Friday ----> weekday
    //day 6---> saturday ----> weekend

    // var day = prompt('pick a number of the day');
    

    switch(0)
    {
        case 0 :
            text = 'Weekend ';
            break;
        case 5:
             text = 'Weekend';
             break;
        case 6:
            text = 'weekday';
            break;
        default:
            text ='weekday';
    }

    console.log(text);