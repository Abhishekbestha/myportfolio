// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


src="https://smtpjs.com/v3/smtp.js">
function sendEmail(){
Email.send({
      Host : "smtp.gmail.com",
      Username : "abhishekbs@protonmail.com",
      Password : "BS@bhishek#261110765",
      To : 'bsabhishek2611@gmail.com',
      From : document.getElementById("email").value,
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(sent)
  );}
