// problem 1

var a ="i am going to be";
var b ="an awesome web developer";
addTwoNumbers= (a +" "+ b);
console.log(addTwoNumbers);

// problem 02

var a=119;
remainder=119%4;
console.log(remainder);

// problem 03

var fruits= ['Apple', 'Banana', 'Orange'];
var indexOfBanana= fruits.indexOf('Banana');
console.log(indexOfBanana);
fruits[1]='Mango'
console.log(fruits);
// remove Oramge

fruits.pop();
console.log(fruits);
// add Watermelon

fruits.push('Watermelon');
console.log(fruits);
// practice problem 2

var my_score=85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;
// using if-else
if(my_score>=80 && my_score<=100){
    console.log('You got A');
}
else if(my_score>=60 && my_score<80){
    console.log('You got B');
}
else if(my_score>=50 && my_score<60){
    console.log('You got C');
}
else if(my_score>=40 && my_score<50){
    console.log('You got D');
}
else{
    console.log('Fail');
}

// using function

//  function result(score){
//     if(score>=80 && score<=100){
//         document.write('You got A');
//     }
//     else if(score>=60 && score<80){
//         document.write('You got B');
//     }
//     else if(score>=50 && score<60){
//         document.write('You got C');
//     }
//     else if(score>=40 && score<50){
//         document.write('You got D');
//     }
//     else{
//         document.write('Fail');
//     }
// }
// result(score = parseInt(prompt('Enter your score:')));

// practice-3 || Problem-1
var a=13, b=79, c=45;
if(a>b){
    if(a>c){
        console.log('a is larger number');
    }
    else{
        console.log('c is larger number');
    }

}
else if(b>a){
    if(b>c){
        console.log('b is larger number')
    }
    else{
        console.log('c is larger number');
    }

}
else{
    console.log('c is larger number');
}

//  problem-02

var a=9, b=8, c=7;
if(a==b){
    console.log('triangle is Isosceles');
}
else if(a==c){
    console.log('triangle is Isosceles');
}
else if(b==c){
    console.log('triangle is Isosceles');
}
else{
    console.log('triangle is not Isosceles');
}


