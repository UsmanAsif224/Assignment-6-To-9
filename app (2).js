                 ///////////MATH EXPRESSIONS////////
///question no. 01/////
// a = 10

// document.write("Result" +"<br>"+"the value of a is = "+ a)
// document.write("<br>"+"the value of ++a ="+ ++a)
// document.write("<br>"+"the value of a becomes =11")
// a = 11
// document.write("<br>"+ "the value of a++ ="+ a++)
// document.write("<br>"+" the value of a is ="+ a++)
//  a = 12
// document.write("<br>"+"the value of --a ="+ --a)
// document.write("<br>"+"the value of a ="+ a)
// a = 11
// document.write("<br>"+ " the value of a-- ="+ a--)
// document.write("<br>"+"the value of a ="+ a)


// ///question no.02///


// var a = 2;
// var b = 1;


// document.write("<br>"+"Step 1: --a");
// a = --a;
// document.write("<br>"+`a = ${a}, b = ${b}`);


// document.write("<br>"+"Step 2: --a - --b");
// a = --a;
// b = --b;
// document.write("<br>"+`a = ${a}, b = ${b}`);
// var result = a - b;
// documet.write(`result = ${result}`);


// document.write("<br>"+"Step 3: --a - --b + ++b");
// b = ++b;
// result += b;
// document.write("<br>"+`a = ${a}, b = ${b}`);
// document.write("<br>"+`result = ${result}`);

// document.write("<br>"+"Step 4: --a - --b + ++b + b--");
// b = b--;
// result += b;
// document.write("<br>"+"a =" ,+ a +" b =" + b);
// document.write("<br>"+"result = "+result);


// document.write("<br>"+`Final output: a = ${a}, b = ${b}, result = ${result}`);

// /////question no.03//////



// let name = prompt("Please enter your name:");

// document.write(`Hello, ${name}! Welcome!`);


///question no.04//


let num = prompt("Please enter a number:");


if (num === null || num === "") {
  num = 5;
}


num = parseInt(num);
document.write(`<h1>Multiplication Table of ${num}</h1>`);

document.write("<table border='1'>");

for (let i = 1; i <= 10; i++) {
  
  document.write("<tr>");
  
  document.write(`<td>${i}</td>`);
  

  document.write(`<td>${num} x ${i} = ${num * i}</td>`);
  
  document.write("</tr>");
}
document.write("</table>");

//////question no.05///
    //a)
// let subject1 = prompt("Enter subject 1 name:");
// let subject2 = prompt("Enter subject 2 name:");
// let subject3 = prompt("Enter subject 3 name:");


// //b) 
// let totalMarks = 100;

// //c)
// let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));
// let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
// let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));

// //d)
// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// //e)
// document.write("<h1>Result</h1>");
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Obtained Marks</th></tr>");
// document.write(`<tr><td>${subject1}</td><td>${obtainedMarks1}</td></tr>`);
// document.write(`<tr><td>${subject2}</td><td>${obtainedMarks2}</td></tr>`);
// document.write(`<tr><td>${subject3}</td><td>${obtainedMarks3}</td></tr>`);
// document.write("<tr><td>Total</td><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><td>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");
   



