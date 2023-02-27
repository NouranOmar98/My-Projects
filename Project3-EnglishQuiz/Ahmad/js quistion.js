var con = document.getElementById("continue");
var option1 = document.getElementById("op1");
var option2 = document.getElementById("op2");
var option3 = document.getElementById("op3");
var option4 = document.getElementById("op4");
var selected;
var text1;
var counterlevel1 = 0;
var result = 0;
// localStorage.clear();
console.log(option1);
console.log(con);
con.onclick = function () {

    document.getElementById("guide").style.display = "none";
    document.querySelector(".panel").style.display = "block";

}

var id = 0;

const questions = [{
    id: 0,
    question: "We studied the question ______.",
    option: [{ text: "scientific", iscorrect: false },
    { text: "science", iscorrect: false },
    { text: "scientist", iscorrect: false },
    { text: "scientifically", iscorrect: true }
    ]

},
{
    id: 1,
    question: "______ the war, most Italians were farmers.",
    option: [{ text: "From", iscorrect: false },
    { text: "While", iscorrect: false },
    { text: "Before", iscorrect: true },
    { text: "When", iscorrect: false }
    ]

},
{
    id: 2,
    question: "Where were you last night?",
    option: [{ text: "I were at home.", iscorrect: false },
    { text: "I am been to the movies.", iscorrect: false },
    { text: "I was to an Indian restaurant.", iscorrect: false },
    { text: "I was at the museum with Nouran.", iscorrect: true }
    ]

},
{
    id: 3,
    question: "Amer has always ______ things very quickly and efficiently.",
    option: [{ text: "does", iscorrect: false },
    { text: "done", iscorrect: true },
    { text: "did", iscorrect: false },
    { text: "do", iscorrect: false }
    ]

},

{
    id: 4,
    question: "Where are you going?",
    option: [{ text: "I am going to my mother's house.", iscorrect: true },
    { text: "I going at work.", iscorrect: false },
    { text: "I go to the store.", iscorrect: false },
    { text: "I am going to Ahmads house.", iscorrect: false }
    ]

}


];



function iterate(id) {
    document.getElementById("question").innerHTML = questions[id].question;
    document.getElementById("op1").innerHTML = questions[id].option[0].text;
    document.getElementById("op2").innerHTML = questions[id].option[1].text;
    document.getElementById("op3").innerHTML = questions[id].option[2].text;
    document.getElementById("op4").innerHTML = questions[id].option[3].text;

    option1.onclick = function () {
        op1.style.backgroundColor = "#BBD8DE";
        op2.style.backgroundColor = "#F0F0F0";
        op3.style.backgroundColor = "#F0F0F0";
        op4.style.backgroundColor = "#F0F0F0";
        selected = questions[id].option[0].iscorrect;
        text1 = questions[id].option[0].text;
        //console.log(selected);
    }


    option2.onclick = function () {
        op1.style.backgroundColor = "#F0F0F0";
        op2.style.backgroundColor = "#BBD8DE";
        op3.style.backgroundColor = "#F0F0F0";
        op4.style.backgroundColor = "#F0F0F0";
        selected = questions[id].option[1].iscorrect;
        text1 = questions[id].option[1].text;
        // console.log(selected);
    }


    option3.onclick = function () {
        op1.style.backgroundColor = "#F0F0F0";
        op2.style.backgroundColor = "#F0F0F0";
        op3.style.backgroundColor = "#BBD8DE";
        op4.style.backgroundColor = "#F0F0F0"
        selected = questions[id].option[2].iscorrect;
        text1 = questions[id].option[2].text;
        //console.log(selected);
    }


    option4.onclick = function () {
        op1.style.backgroundColor = "#F0F0F0";
        op2.style.backgroundColor = "#F0F0F0";
        op3.style.backgroundColor = "#F0F0F0";
        op4.style.backgroundColor = "#BBD8DE";
        selected = questions[id].option[3].iscorrect;
        text1 = questions[id].option[3].text;
        //console.log(selected);
    }


}
iterate(0);
var next = document.getElementById("next");
var finish = document.getElementById("finish");
console.log(next);
next.onclick = function () {

    if (id == 4) {
        localStorage.setItem("your choice" + id, text1);
        if (selected) {
            counterlevel1++;
            result += 4;
            localStorage.setItem("counterlevel1", counterlevel1);
            localStorage.setItem("result", result);


        }
        next.style.display = "none";
        finish.style.display = "block";
    }
    else {
        localStorage.setItem("your choice" + id, text1);
        if (selected) {
            counterlevel1++;
            result += 4;
            localStorage.setItem("counterlevel1", counterlevel1);
            localStorage.setItem("result", result);


        }
        id++;
        localStorage.setItem("id", id);
    }


    op1.style.backgroundColor = "#F0F0F0";
    op2.style.backgroundColor = "#F0F0F0";
    op3.style.backgroundColor = "#F0F0F0";
    op4.style.backgroundColor = "#F0F0F0";
    iterate(id);


    finish.onclick = function () {
        location.href = "level-2 question.html"
    }


}