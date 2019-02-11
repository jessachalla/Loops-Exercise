

// This is a for loop
for (let i=1; i <= 10; i++) 
    {console.log(i); 
}

for (let i=10; i >= 1; i--) 
    {console.log(i); 
}



//This is a while loop
let i = 1;
while (i<=10) {
console.log(i);
i++;
}

i = 10;
while (i>=1) {
console.log(i);
i--;}




//This is a do while
i = 1; //I didn't have to put "let" here because I declared "let" in the while loop
do {
    console.log(i);
    i++;
}
while (i<=10);

i = 10;
do {
    console.log(i);
    i--;
}
while (i>=1);

//This is an array with const number
//This is a for...of loop
const iterable =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const i of iterable) {
    i;
    console.log(i);
}


//use a loop to add padding to the front to make the string 10 characters long
let word = "four";

do {
    word= " " + word; //adds a space to the length each loop
}
while (word.length < 10);
console.log(word);