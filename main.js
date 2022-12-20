const ask = document.querySelectorAll('.ask-title'),
      answers = document.querySelectorAll('.answer');

ask.forEach(title => {
  title.addEventListener('click', ()=> {
    answers.forEach(answer => {
      if(title.dataset.ty == answer.dataset.ty) {
        answer.classList.toggle('show')
        title.classList.toggle('show')
      }
      
    })
  })
})