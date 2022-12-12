/* =================== SHOW MENU =================== */
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* =================== REMOVE MENU MOBILE =================== */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* =================== CHANGE BACKGROUND HEADER =================== */
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/* =================== SCROLL SECTIONS ACTIVE LNK =================== */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/* =================== SHOW SCROLL UP =================== */
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* =================== SCROLL REVEAL ANIMATION =================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})


/* =================== CALCULATE JS =================== */
const calculateForm = document.getElementById('calculate-form'),
        calculateCm = document.getElementById('calculate-cm'),
        calculateKg = document.getElementById('calculate-kg'),
        calculateMessage = document.getElementById('calculate-message')

const calculateImc = (e) =>{
    e.preventDefault()
    //Check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === ''){
        //Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        //Show message
        calculateMessage.textContent = 'Complete la altura y el peso.'
        //Remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else{
        //IMC Formula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            imc = Math.round(kg / (cm * cm))
        //Show your health status
        if(imc < 18.5){
            //Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu IMC es ${imc}, estas delgado 😔`
        } else if(imc < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu IMC es ${imc}, estas saludable 😀`
        } else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu IMC es ${imc}, estas con sobrepeso 😔`
        }
        // To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''
        // Remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000);
    }
}
calculateForm.addEventListener('submit', calculateImc)

/* =================== EMAIL JS =================== */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()
    // Check if the field has a value
    if(contactUser.value === ''){
        //Add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        //Show messge
        contactMessage.textContent = 'Debes introducir tu correo electrónico ☝'
        //Remove message three seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else{
        //serviceID - templateID - #form - publickey
        emailjs.sendForm('service_9ysie1o','template_bb08onj','#contact-form','Igp09GLGTLejLdZcr')
            .then(() =>{
                //show message and add color
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'Te has registrado correctamente 💪'
                //Remove message after three seconds
                setTimeout(() => {
                    contactMessage.textContent = '' 
                }, 3000)
            }, (error) =>{
                //Email sending error
                alert('¡OOPS! ALGO HA FALLADO...', error)
            })
        //To clear the input field
        contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)


/* □□□□□□□□□□□□□□□□□□□□□□□□□□□□ PRICING MODAL □□□□□□□□□□□□□□□□□□□□□□□□□□□□ */
// const modalViews = document.querySelectorAll('.pricing__modal'),
//       modalBtns = document.querySelectorAll('.pricing__button'),
//       modalClose = document.querySelectorAll('.pricing__modal-close')

// let modal = function(modalClick){
//     modalViews[modalClick].classList.add('active-modal')
// }

// modalBtns.forEach((modalBtns, i) => {
//     modalBtns.addEventListener('click', () =>{
//         modal(i)
//     })
// })

// modalClose.forEach((modalClose) => {
//     modalClose.addEventListener('click', () =>{
//         modalViews.forEach((modalViews) =>{
//             modalViews.classList.remove('active-modal')
//         })
//     })
// })