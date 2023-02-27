var con = document.getElementById("continue");
console.log(con);
var selected;
var text1;
var result = Number(localStorage.getItem("result"));
var counterLevel2 = 0;
console.log(result);
con.onclick = function () {

    document.getElementById("guide").style.display = "none";
    document.querySelector(".panel").style.display = "block";
}
// localStorage.clear();

// var i = Number(localStorage.getItem("id"));
var id = 0;

const questions = [

    {
        id: 0,
        question: "I was driving ______ the road when my car started making a funny sound.",
        option: [{ text: "in", iscorrect: false },
        { text: "at", iscorrect: false },
        { text: "down", iscorrect: true },
        { text: "through", iscorrect: false }
        ]

    },


    {
        id: 1,
        question: "She ______ blue velvet to the party last night",
        option: [{ text: "worn", iscorrect: false },
        { text: "war", iscorrect: false },
        { text: "weared", iscorrect: false },
        { text: "wore", iscorrect: true}
        ]

    },

    {
        id: 2,
        question: "What are you wearing to the party?.",
        option: [{ text: "Wear wearing shirts.", iscorrect: false },
        { text: "Formal dress wearing we're.", iscorrect: false },
        { text: "We're wearing suits.", iscorrect: true },
        { text: "I wear a black suit.", iscorrect: false }
        ]

    },

    {
        id: 3,
        question: "The Olympic champion dove ______ the swimming pool from ten meters high.",
        option: [{ text: "to", iscorrect: false },
        { text: "into", iscorrect: true },
        { text: "onto", iscorrect: false },
        { text: "inside", iscorrect: false }
        ]

    },

    {
        id: 4,
        question: "You two are always fighting. Why can't you ______?",
        option: [{ text: "get along", iscorrect: true },
        { text: "get over", iscorrect: false },
        { text: "get off", iscorrect: false },
        { text: "get through", iscorrect: false}
        ]

    }


]

var option1 = document.getElementById("op1");
var option2 = document.getElementById("op2");
var option3 = document.getElementById("op3");
var option4 = document.getElementById("op4");
function iterate(id) {
    var question = document.getElementById("question");
    question.innerHTML = questions[id].question;


    option1.innerHTML = questions[id].option[0].text;

    option2.innerHTML = questions[id].option[1].text;

    option3.innerHTML = questions[id].option[2].text;

    option4.innerHTML = questions[id].option[3].text;

    option1.onclick = function () {
        option1.style.backgroundColor = "#BBD8DE";
        option2.style.backgroundColor = "#F0F0F0";
        option3.style.backgroundColor = "#F0F0F0";
        option4.style.backgroundColor = "#F0F0F0";
        text1 = questions[id].option[0].text;
        selected = questions[id].option[0].iscorrect;

    }
    option2.onclick = function () {
        option1.style.backgroundColor = "#F0F0F0";
        option2.style.backgroundColor = "#BBD8DE";
        option3.style.backgroundColor = "#F0F0F0";
        option4.style.backgroundColor = "#F0F0F0";
        text1 = questions[id].option[1].text;
        selected = questions[id].option[1].iscorrect;

    }

    option3.onclick = function () {
        option1.style.backgroundColor = "#F0F0F0";
        option2.style.backgroundColor = "#F0F0F0";
        option3.style.backgroundColor = "#BBD8DE";
        option4.style.backgroundColor = "#F0F0F0";
        text1 = questions[id].option[2].text;
        selected = questions[id].option[2].iscorrect;

    }

    option4.onclick = function () {
        option1.style.backgroundColor = "#F0F0F0";
        option2.style.backgroundColor = "#F0F0F0";
        option3.style.backgroundColor = "#F0F0F0";
        option4.style.backgroundColor = "#BBD8DE";
        text1 = questions[id].option[3].text;
        selected = questions[id].option[3].iscorrect;

    }


}
iterate(id);

var next = document.getElementById("next");
var finish = document.getElementById("finish");
next.onclick = function () {

    if (id == 4) {
        next.style.display = "none";
        finish.style.display = "block";
    }

    localStorage.setItem("your choice" + (id + 5), text1);
    option1.style.backgroundColor = "#F0F0F0";
    option2.style.backgroundColor = "#F0F0F0";
    option3.style.backgroundColor = "#F0F0F0";
    option4.style.backgroundColor = "#F0F0F0";
    if (selected) {

        result += 6;
        localStorage.setItem("result", result);
        counterLevel2++;
        localStorage.setItem("counterLevel2", counterLevel2);
    }
    id++;
    iterate(id);

}

var finish = document.getElementById("finish");
console.log(finish);
finish.onclick=function()
{
    location.href="../Ashraf/html quistion.html";
}