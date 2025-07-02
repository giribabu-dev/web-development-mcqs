
function checkAnswer(event, id){

    let resultEle = document.getElementById(id);

    if(event.target.value == 'correct'){
        resultEle.textContent = "Correct answer";
        resultEle.style.color = "green";
    }
    else{
        resultEle.textContent = "Wrong answer";
        resultEle.style.color = "red";;
    }
};