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
        
    }
}
