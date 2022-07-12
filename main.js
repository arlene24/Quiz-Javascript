function storeAnswer(queNumb){
    switch(queNumb){
        case 1: 
            ans = document.quiz.question1.value;
            if(ans == 'Hyper Text Markup Language'){
                x = window.localStorage.getItem('score');
                if(x == null){
                    window.localStorage.setItem('score', 1);
                    window.location.replace("./que2.html");
                }
                else{
                    score = parseInt(x) + 1;
                    window.localStorage.setItem('score', score);
                    window.location.replace("./que2.html");
                }
            }
            else{
                window.location.replace("./que2.html");
            }
            console.log('Hyper Text Markup Language');
            break;
        case 2:
            ans = document.quiz.question2.value;
            if(ans == 'Cascading Style Sheet'){
                x = window.localStorage.getItem('score');
                if(x == null){
                    window.localStorage.setItem('score', 1);
                    window.location.replace("./que3.html");
                }
                else{
                    score = parseInt(x) + 1;
                    window.localStorage.setItem('score', score);
                    window.location.replace("./que3.html");
                }
            }
            else{
                window.location.replace("./que3.html");
            }
            console.log('Cascading Style Sheet');
            break;
        case 3:
            ans = document.quiz.question3.value;
            if(ans == 'Hypertext Preprocessor'){
                x = window.localStorage.getItem('score');
                if(x == null){
                    window.localStorage.setItem('score', 1);
                    window.location.replace("./que4.html");
                }
                else{
                    score = parseInt(x) + 1;
                    window.localStorage.setItem('score', score);
                    window.location.replace("./que4.html");
                }
            }
            else{
                window.location.replace("./que4.html");
            }
            console.log('Hypertext Preprocessor');
            break;
        case 4:
            ans = document.quiz.question4.value;
            if(ans == 'Structured Query Language'){
                x = window.localStorage.getItem('score');
                if(x == null){
                    window.localStorage.setItem('score', 1);
                    window.location.replace("./que5.html");
                }
                else{
                    score = parseInt(x) + 1;
                    window.localStorage.setItem('score', score);
                    window.location.replace("./que5.html");
                }
            }
            else{
                window.location.replace("./que5.html");
            }
            console.log('Structured Query Language');
            break;
        case 5:
            ans = document.quiz.question5.value;
            if(ans == 'eXtensible Markup Language'){
                x = window.localStorage.getItem('score');
                if(x == null){
                    window.localStorage.setItem('score', 1);
                    window.location.replace("./results.html");
                }
                else{
                    score = parseInt(x) + 1;
                    window.localStorage.setItem('score', score);
                    window.location.replace("./results.html");
                }
            }
            else{
                window.location.replace("./results.html");
            }
            console.log('eXtensible Markup Language');
            break;
    }
}
function results(){
    res = document.getElementById('display-score');
    congo = document.getElementById('congo'); 
    x = (window.localStorage.getItem('score') != null) ? parseInt(window.localStorage.getItem('score')) : 0;
    if(x < 4){
        ele = 'Your total score is <strong class="scoreNum">'+ x + '</strong> out of 5';
        res.innerHTML = ele;
    }
    else{
        cong = '🥳🎊Congratulations🎉🥳'
        ele = 'Your total score is <strong class="scoreNum">'+ x + '</strong> out of 5';
        congo.innerHTML = cong
        res.innerHTML = ele;
    }
    window.localStorage.removeItem('score');
}