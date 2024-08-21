// 1. Declare an empty array using JS literal notation to store
// student names in future:

var empty_array=[];

// 2. Declare an empty array using JS object notation to store
// student names in future:

var emptyAarry=[];

// 3.Declare and initialize a strings array:

var fruits = ["Apple", "Banana", "Cherry"];

// 4. Declare and initialize a numbers array:

var numbers = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array:

var code = [true, false, true, false, true];

// 6. Declare and initialize a mixed array:

var mixedArray = [1, "Jonny", true, 3.14,false];

// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser:

document.write(`<h1>Qualifications:</h1><br>`);

var qualification=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];

    
document.write(`1) ${qualification[0]}<br>`);
document.write(`2) ${qualification[1]}<br>`);
document.write(`3) ${qualification[2]}<br>`);
document.write(`4) ${qualification[3]}<br>`);
document.write(`5) ${qualification[4]}<br>`);
document.write(`6) ${qualification[5]}<br>`);
document.write(`7) ${qualification[6]}<br>`);
document.write(`8) ${qualification[7]}<br><hr><br>`);


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students:

var std_name=["Micheal","John","Tony"];
var score=["320","230","480"];
var total_marks=[500];

document.write(`<h1>Scores & Percentages of Students:</h1><br>`);


document.write(`1) Score of ${std_name[0]} is ${score[0]}.Percentage:${score[0]/total_marks*100}%<br>`);
document.write(`2) Score of ${std_name[1]} is ${score[1]}.Percentage:${score[1]/total_marks*100}%<br>`);
document.write(`3) Score of ${std_name[2]} is ${score[2]}.Percentage:${score[2]/total_marks*100}% <br><hr><br>`);

// 9. Initialize an array with color names. Display the array
// elements in your browser:

var Colors=["Blue","Green","Purple","Orange","Red"];
document.write(`<b>Color list</b>: ${Colors} <br>`);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser:

var User_one=prompt("Enter the color you want to add at the start of the color list:");
Colors.unshift(User_one);
document.write(`a) ${Colors} <br>`);

// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser:

var User_two=prompt("Enter the color you want to add at the end of the color list:");
Colors.push(User_two);
document.write(`b) ${Colors} <br>`);

// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.

Colors.unshift("Voilet","Black");
document.write(`c) ${Colors} <br>`);

// d. Delete the first color in the array. Display the updated
// array in your browser:

Colors.shift();
document.write(`d) ${Colors} <br>`);

// e. Delete the last color in the array. Display the updated
// array in your browser:

Colors.pop();
document.write(`e) ${Colors} <br>`);

// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser:

var user_color1=prompt("Enter the color name you want to add ");
var user_index=prompt("Enter the index number at which you want to add color");
Colors.splice(user_index,0,user_color1);
document.write(`f) ${Colors} <br>`);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var user_color2=prompt("Enter how many color you want to delete ");
var user_index1=prompt("Enter the index number at which you want to delete color");
Colors.splice(user_index1,user_color2);
document.write(`g) ${Colors} <br><hr><br>`);


// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

document.write(`<h1>Score of Students:</h1><br>`);
var std_score=["320","230","480","120"];
document.write(`Score of Students : ${std_score}<br>`);

std_score.sort();
document.write(`Ordered Score of Students : ${std_score}<br><hr><br>`);

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

document.write(`<h1>Selected Cities:</h1><br>`);

var cities_name=["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
document.write(`<b>Cities List</b>:<br>${cities_name}<br>`);

var slt_cities=["Karachi","Islamabad","Quetta"];
document.write(`<b>Selected Cities Lists</b>:<br>${slt_cities}<br><hr><br>`);


// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method

document.write(`<h1>Array join method:</h1><br>`);
var word =["This","is","my","cat"];
document.write(`<b>Arrays</b>:<br>${word}<br>`);

var sentence=word.join(" ");
document.write(`<b>String</b>:<br>${sentence}<br><hr><br>`);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

var device=["Mobile","Tablet","Laptop","Computer"];
document.write(`<b>Devices:</b>${device}<br><br>`);

document.write(`out:<br>${device[0]}<br>`);
document.write(`out:<br>${device[1]}<br>`);
document.write(`out:<br>${device[2]}<br>`);
document.write(`out:<br>${device[3]}<br><hr><br>`);



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In First Out):

var device=["Mobile","Tablet","Laptop","Computer"];
document.write(`<b>Devices:</b>${device}<br><br>`);

document.write(`out:<br>${device[3]}<br>`);
document.write(`out:<br>${device[2]}<br>`);
document.write(`out:<br>${device[1]}<br>`);
document.write(`out:<br>${device[0]}<br><hr><br>`);

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method:

document.write(`<h1>DropDown/Select Menu:</h1><br>`);


var pho_manufacture=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

document.write(`<b>Phone Menufacturer</b>:${pho_manufacture}<br><br>`);

document.write(
    
    `Dropdown list of Phone Menufacturer Companies:<br><br>
    <form action="">
    <select name="phone_Manufacture">
    <option value= "Companies">Companies</option>
    <option value="${pho_manufacture[0]}">${pho_manufacture[0]}</option>
    <option value="${pho_manufacture[1]}">${pho_manufacture[1]}</option>
    <option value="${pho_manufacture[2]}">${pho_manufacture[2]}</option>
    <option value="${pho_manufacture[3]}">${pho_manufacture[3]}</option>
    <option value="${pho_manufacture[4]}">${pho_manufacture[4]}</option>
    <option value="${pho_manufacture[5]}">${pho_manufacture[5]}</option>
    </select>
    </form>`
);



































