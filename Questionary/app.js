//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(quest){
    //console.log(quest);
    const btn =quest.querySelector('.question-btn');
    //console.log(btn)
    btn.addEventListener('click', function(){

        questions.forEach(function(item){
            

        })

        quest.classList.toggle('show-text');
    });
});









// Traversin the Dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     });
// });







