/* scroll-Header */
function scrollHeader(){
    const header = document.getElementById("header")
    if(this.scrollY >= 50) {
         header.classList.add("scroll-header");
    }
    else{
        header.classList.remove("scroll-header"); 
    }
}
window.addEventListener("scroll", scrollHeader);


/* swiper */
var swiperPopular = new Swiper(".popular-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: 'auto',
    loop:true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

/*value accordion */
const accordionItems = document.querySelectorAll('.value-accordion-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value-accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

     toggleItem(item)

     if(openItem && openItem!== item){
         toggleItem(openItem)
     }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value-accordion-content')
  
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
else{
    accordionContent.style.height = accordionContent.scrollHeight + "px"
    item.classList.add('accordion-open')
}
}

/*scroll sections active link */

const sections = document.querySelectorAll('section[id]');
  
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
    
}
window.addEventListener("scroll", scrollActive)


/*scroll-up*/
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');

    if(this.scrollY >= 350) {
        scrollup.classList.add('show-scroll');
   }
   else{
    scrollup.classList.remove('show-scroll');
   }
}
window.addEventListener("scroll", scrollUp);



/*--------Dark/ Light Theme-------*/
const dayNight = document.querySelector(".change-theme");
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark-theme');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark-theme')){
        dayNight.querySelector('i').classList.toggle('fa-sun')
    }
    else{
        dayNight.querySelector('i').classList.toggle('fa-moon')
    }
})

/*--------scroll- Reveal-------*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    //reset:true
})

sr.reveal('.home-title , .popular-container, .subscribe-container, .footer-container')
sr.reveal('.home-description, .footer-content', {delay:500})
sr.reveal('.home-search', {delay:600})
sr.reveal('.home-value', {delay:700})
sr.reveal('.home-images', {delay:500, origin: 'bottom'})
sr.reveal('.logos-img', {interval:100})
sr.reveal('.value-images', {origin: 'right'})
sr.reveal('.value-content', {origin: 'left'})
sr.reveal('.contact-images', {origin: 'left'})
sr.reveal('.contact-content', {origin: 'right'})

