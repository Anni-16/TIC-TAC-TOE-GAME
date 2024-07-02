// Function Called Whenever user tab on any box
function myfun(){

    // setting DOM to all boxes or input field
    let a1, a2, a3, a4, a5, a6, a7, a8, a9;
    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    a3 = document.getElementById("a3").value;
    a4 = document.getElementById("a4").value;
    a5 = document.getElementById("a5").value;
    a6 = document.getElementById("a6").value;
    a7 = document.getElementById("a7").value;
    a8 = document.getElementById("a8").value;
    a9 = document.getElementById("a9").value;

    let a1btn, a2btn, a3btn, a4btn, a5btn, a6btn, a7btn, a8btn, a9btn;

    a1btn = document.getElementById("a1");
    a2btn = document.getElementById("a2");
    a3btn = document.getElementById("a3");
    a4btn = document.getElementById("a4");
    a5btn = document.getElementById("a5");
    a6btn = document.getElementById("a6");
    a7btn = document.getElementById("a7");
    a8btn = document.getElementById("a8");
    a9btn = document.getElementById("a9");

    // checking if Player X woN or Not and After
    // that Disabled all the other fields

    if((a1 == 'x' || a1 =='x') && (a2 == 'x' || a2 == 'x') && (a3 == 'x' || a3 == 'x')){
        document.getElementById('print').innerHTML = "Player X Win";
        a4btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a1btn.style.color = "red";
        a2btn.style.color = "red";
        a3btn.style.color = "red";
    }
    else if((a1 == 'x' || a1 == 'x') && (a4 == 'x' || a4 == 'x') && (a7 == 'x' || a7 == 'x')){
        document.getElementById('print').innerHTML = "Player X win";

        a2btn.disabled = true;
        a3btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a1btn.style.color = "red";
        a4btn.style.color = "red";
        a7btn.style.color = "red";  
    }
    else if ((a7 == 'x' || a7 == 'x') && (a8 == 'x' || a8 == 'x') && (a9 == 'x' || a9 == 'x')){
        document.getElementById('print').innerHTML = "Player X win";

        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;

        a7btn.style.color = "red";
        a8btn.style.color = "red";
        a9btn.style.color = "red";
    }
    else if ((a3 == 'x' || a3 == 'x') && (a6 == 'x' || a6 == 'x') && (a9 == 'x' || a9 == 'x')){
        document.getElementById('print').innerHTML = "Player X win";

        a1btn.disabled = true;
        a2btn.disabled = true;
        a4btn.disabled = true;
        a5btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;

        a3btn.style.color = "red";
        a6btn.style.color = "red";
        a9btn.style.color = "red";
    }
    else if ((a1 == 'x' || a1 == 'x') && (a5 == 'x' || a5 == 'x') && (a9 == 'x' || a9 == 'x')){
        document.getElementById('print').innerHTML = "Player X win";

        a2btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;

        a1btn.style.color = "red";
        a5btn.style.color = "red";
        a9btn.style.color = "red";
    }
    else if((a3 == 'x' || a3 == 'x') && (a5 == 'x' || a5 == 'x') && (a7 == 'x' || a7 == 'x')){
        document.getElementById('print').innerHTML = "Player X win";

        a1btn.disabled = true;
        a2btn.disabled = true;
        a6btn.disabled = true;
        a4btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a3btn.style.color = "red";
        a5btn.style.color = "red";
        a7btn.style.color = "red";
    }
    else if ((a2 == 'x' || a2 == 'x') && (a5 == 'x' || a5 == 'x') && (a8 == 'x' || a8 == 'x')){
        document.getElementById('print').innerHTML = "Player X win";

        a1btn.disabled = true;
        a4btn.disabled = true;
        a7btn.disabled = true;
        a9btn.disabled = true;
        a6btn.disabled = true;
        a3btn.disabled = true;

        a2btn.style.color = "red";
        a5btn.style.color = "red";
        a8btn.style.color = "red";
    }
    else if ((a4 == 'x' || a4 == 'x') && (a5 == 'x' || a5 == 'x') && (a6 == 'x' || a6 == 'x')){
        document.getElementById('print').innerHTML = "Player X win";

        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a4btn.style.color = "red";
        a5btn.style.color = "red";
        a6btn.style.color = "red";
    }

    // checking of Player x finish
    // checking for Player 0 starts, is Player 0 won or 
    // not and after that disabled the other fields
     else if((a1 == '0' || a1 =='0') && (a2 == '0' || a2 == '0') && (a3 == '0' || a3 == '0')){
        document.getElementById('print').innerHTML = "Player 0 Win";
        a4btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a1btn.style.color = "red";
        a2btn.style.color = "red";
        a3btn.style.color = "red";
    }
    else if((a1 == '0' || a1 == '0') && (a4 == '0' || a4 == '0') && (a7 == '0' || a7 == '0')){
        document.getElementById('print').innerHTML = "Player 0 win";

        a2btn.disabled = true;
        a3btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a1btn.style.color = "red";
        a4btn.style.color = "red";
        a7btn.style.color = "red";  
    }
    else if ((a7 == '0' || a7 == '0') && (a8 == '0' || a8 == '0') && (a9 == '0' || a9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 win";

        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;

        a7btn.style.color = "red";
        a8btn.style.color = "red";
        a9btn.style.color = "red";
    }
    else if ((a3 == '0' || a3 == '0') && (a6 == '0' || a6 == '0') && (a9 == '0' || a9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 win";

        a1btn.disabled = true;
        a2btn.disabled = true;
        a4btn.disabled = true;
        a5btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;

        a3btn.style.color = "red";
        a6btn.style.color = "red";
        a9btn.style.color = "red";
    }
    else if ((a1 == '0' || a1 == '0') && (a5 == '0' || a5 == '0') && (a9 == '0' || a9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 win";

        a2btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;

        a1btn.style.color = "red";
        a5btn.style.color = "red";
        a9btn.style.color = "red";
    }
    else if((a3 == '0' || a3 == '0') && (a5 == '0' || a5 == '0') && (a7 == '0' || a7 == '0')){
        document.getElementById('print').innerHTML = "Player 0 win";

        a1btn.disabled = true;
        a2btn.disabled = true;
        a6btn.disabled = true;
        a4btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a3btn.style.color = "red";
        a5btn.style.color = "red";
        a7btn.style.color = "red";
    }
    else if ((a2 == '0' || a2 == '0') && (a5 == '0' || a5 == '0') && (a8 == '0' || a8 == '0')){
        document.getElementById('print').innerHTML = "Player 0 win";

        a1btn.disabled = true;
        a4btn.disabled = true;
        a7btn.disabled = true;
        a9btn.disabled = true;
        a6btn.disabled = true;
        a3btn.disabled = true;

        a2btn.style.color = "red";
        a5btn.style.color = "red";
        a8btn.style.color = "red";
    }
    else if ((a4 == '0' || a4 == '0') && (a5 == '0' || a5 == '0') && (a6 == '0' || a6 == '0')){
        document.getElementById('print').innerHTML = "Player 0 win";

        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a4btn.style.color = "red";
        a5btn.style.color = "red";
        a6btn.style.color = "red";
    }
    // checking pf Player 0 Finish
    // Here, checking about tie

    else if ((a1 == 'x' || a1 == '0') && (a2 == 'x' || a2 == '0') && (a3 == 'x' || a3 == '0') && (a4 == 'x' || a4 == '0') && (a5 == 'x' || a5 == '0') && (a6 == 'x' || a6 == '0') && (a7 == 'x' || a7 == '0') && (a8 == 'x' || a8 == '0') && (a9 == 'x' || a9 == '0')){
        document.getElementById('print').innerHTML = "Match Tie";
    }
    else {
        // Here , Printing Result
        if (flag == 1){
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player 0 Turn";
        }
    }
}

// Function to Reset Game
 function myfun_2(){
    location.reload();
    a1=a2=a3=a4=a5=a6=a7=a8=a9='';
 }

//  Here onward, functions check turn of player
//  and put accordingly value X & 0

flag = 1;
function myfun_3(){
    if ( flag == 1){
        document.getElementById("a1").value = "x";
        document.getElementById("a1").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a1").value = "0";
        document.getElementById("a1").disabled = true;
        flag = 1;
    }
}

function myfun_4(){
    if ( flag == 1){
        document.getElementById("a2").value = "x";
        document.getElementById("a2").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a2").value = "0";
        document.getElementById("a2").disabled = true;
        flag = 1;
    }
}

function myfun_5(){
    if ( flag == 1){
        document.getElementById("a3").value = "x";
        document.getElementById("a3").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a3").value = "0";
        document.getElementById("a3").disabled = true;
        flag = 1;
    }
}

function myfun_6(){
    if ( flag == 1){
        document.getElementById("a4").value = "x";
        document.getElementById("a4").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a4").value = "0";
        document.getElementById("a4").disabled = true;
        flag = 1;
    }
}

function myfun_7(){
    if ( flag == 1){
        document.getElementById("a5").value = "x";
        document.getElementById("a5").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a5").value = "0";
        document.getElementById("a5").disabled = true;
        flag = 1;
    }
}

function myfun_8(){
    if ( flag == 1){
        document.getElementById("a6").value = "x";
        document.getElementById("a6").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a6").value = "0";
        document.getElementById("a6").disabled = true;
        flag = 1;
    }
}

function myfun_9(){
    if ( flag == 1){
        document.getElementById("a7").value = "x";
        document.getElementById("a7").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a7").value = "0";
        document.getElementById("a7").disabled = true;
        flag = 1;
    }
}

function myfun_10(){
    if ( flag == 1){
        document.getElementById("a8").value = "x";
        document.getElementById("a8").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a8").value = "0";
        document.getElementById("a8").disabled = true;
        flag = 1;
    }
}

function myfun_11(){
    if ( flag == 1){
        document.getElementById("a9").value = "x";
        document.getElementById("a9").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("a9").value = "0";
        document.getElementById("a9").disabled = true;
        flag = 1;
    }
}

