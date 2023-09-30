const hamburger = document.querySelector('.hamburger'),
      link = document.querySelector('.link')

      hamburger.addEventListener('click',()=>{
         link.classList.toggle('open')
      })