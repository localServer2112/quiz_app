// global variables
let selected_opt = '';
let _score = 0; // initial score
let _qid = 0; // question index == 0
let _current_data = {};
let data_obj = [
    {
    question : 'What does HTML stand for?',
    optA : 'Hyperlinks and Text Markup Language',
    optB : ' Home Tool Markup Language',
    optC : ' Hyper Text Markup Language',
    optD : 'None of the above',
    ans : 'C',
    },
    {
        question : 'Who is making the Web standards?',
        optA : ' The World Wide Web Consortium',
        optB : 'Microsoft',
        optC : 'Google',
        optD : 'Yahoo',
        ans : 'A',
        },
    {
    question : 'Choose the correct HTML element for the largest heading:',
    optA : '<h1>',
    optB : '<heading>',
    optC : '<head>',
    optD : '<h6>',
    ans : 'A',
    },
    {
    question : 'What is the correct HTML element for inserting a line break?',
    optA : '<lb>',
    optB : '<break>',
    optC : '<br>',
    optD : '<b>',
    ans : 'C',
    },
    {
    question : 'What is the correct HTML for adding a background color?',
    optA : ' <background>yellow</background>',
    optB : '<body bg=color>',
    optC : '<body style="background-color:yellow">',
    optD : 'None',
    ans : 'C',
    },
];
// selectors
const question = document.querySelector('#question');
const optionA = document.querySelector('#optionA');
const optionB = document.querySelector('#optionB');
const optionC = document.querySelector('#optionC');
const optionD = document.querySelector('#optionD');
const score = document.querySelector('.score');
const restartBtn = document.querySelector('.btn');
const finalScore = document.querySelector('#s_score');
const next = document.querySelector('#next');
const divQuestion = document.querySelector('.question-area');
const divSuccess = document.querySelector('.successdiv');
// event-listeners
optionA.addEventListener('click',function () {
    selected_opt = 'A';
    markQuestion(_current_data,optionA);
});
optionB.addEventListener('click',function () {
    selected_opt = 'B';
    markQuestion(_current_data,optionB);
});
optionC.addEventListener('click',function () {
    selected_opt = 'C';
    markQuestion(_current_data,optionC);
});
optionD.addEventListener('click',function () {
    selected_opt = 'D';
    markQuestion(_current_data,optionD);
});
next.addEventListener('click',getNext);
restartBtn.addEventListener('click',function () {
    window.location.reload();
})
// functions
function setQuestion(_data) {
    question.textContent = _data.question;
    optionA.textContent = _data.optA;
    optionB.textContent = _data.optB;
    optionC.textContent = _data.optC;
    optionD.textContent = _data.optD;
}
function markQuestion(_data,_opt){
    try{
        
        if(_data.ans === selected_opt){
            setSuccess(_opt);
            _score++;
            setScore();
            getNext();
        }
        else{
            setFailed(_opt);
            switch (_data.ans) {
                case 'A':
                    setSuccess(optionA);
                    getNext();
                    break;
                case 'B':
                    setSuccess(optionB);
                    getNext();
                    break;
                case 'C':
                    setSuccess(optionC);
                    getNext();
                    break;
                case 'D':
                    setSuccess(optionD);
                    getNext();
                    break;
            
                default:
                    break;
            }
            
        }
    }
    catch {
        showResult()
    }
}
function setFailed(_option){
    _option.classList.add('failed');

}
function setSuccess(_option) {
    _option.classList.add('success');    
}
function reset(){
    let options = [optionA,optionB,optionC,optionD];
    options.forEach((opt) => {
        if (opt.classList.contains('failed')) {
            opt.classList.remove('failed');
        }
        if (opt.classList.contains('success')) {
            opt.classList.remove('success');
        }        
    });
}
function setScore() {
    score.textContent = _score;
}
function showResult(){
    divSuccess.classList.add("show");
    divQuestion.classList.add("hide");
    finalScore.textContent = _score;
}
function getNext(){
   
       if(_qid < data_obj.length){
           console.log(_qid);
            _qid++;
           setTimeout(() => {
            _current_data = data_obj[_qid];
            reset();
            console.log(_qid);
            setQuestion(_current_data);
        }, 2000);
   } 
   else{
       alert(`Quiz has ended, your score is ready`);
       showResult();
   }
   
}
_current_data = data_obj[_qid];
setQuestion(data_obj[_qid]); //set initial question
// getNext();
// 
