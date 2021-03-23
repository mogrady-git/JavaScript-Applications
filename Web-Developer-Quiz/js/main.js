//  Get all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
// 
const option_list = document.querySelector(".option_list");
// 
const timeCount = quiz_box.querySelector(".timer .timer_sec");
//
const timeLine = quiz_box.querySelector("header .time_line");




// When start_btn button is clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show the info box
    // console.log("start_btn clicked!");
}

// When exit_btn is clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide the info box
    // console.log("exit_btn clicked!");
}

// When continue_btn is clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide the info box
    // console.log("continue_btn clicked!");
    quiz_box.classList.add("activeQuiz"); //show the quiz box

    // 
    showQuestions(0);
    // 
    queCounter(1);
    // 
    startTimer(15);
    //
    startTimerLine(0);
}

// Functionality of the quiz
let que_count = 0;
// 
let que_numb = 1;
// 
let counter;
// 
let timeValue = 15;
// 
let widthValue = 0;


const next_btn = quiz_box.querySelector(".next_btn");

//if next button is clicked.. move array to next question and answers
next_btn.onclick = () => {
    // que_count++;
    // showQuestions(que_count);
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        // 
        clearInterval(counterLine);
        startTimerLine(widthValue);
        // 
        next_btn.style.display = "none";
    } else {
        console.log("Questions completed...");
    }
}



// Get questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    // const option_list = document.querySelector(".option_list");
    // 
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>' //Prints from the array 1) number of the question. 2) Question
    let option_tag =
        '<div class="option">' + questions[index].options[0] + '<span></span></div>' + // Prints option 1
        '<div class="option">' + questions[index].options[1] + '<span></span></div>' + // Prints option 2
        '<div class="option">' + questions[index].options[2] + '<span></span></div>' + // Prints option 3
        '<div class="option">' + questions[index].options[3] + '<span></span></div>'; // Prints option 4
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    // 
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer; //answer is defined in the array
    // 
    let allOptions = option_list.children.length;
    // 
    if (userAns == correctAns) {
        console.log("Answer is Correct!");
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);

    } else {
        console.log("Answer is Wrong!");
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);


        // if answer is incorrect then select the correct answer
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); //adding tick icon to matched option
            }
        }
    }

    // once user selected disables all other options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");

    }
    next_btn.style.display = "block";

}

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00"
        }
    }
};

//  Counter

function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let total_QuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = total_QuesCountTag;

};

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);

    function timer() {
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
};