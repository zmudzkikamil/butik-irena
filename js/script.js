const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav__item')
const headerHeading = document.querySelector('.header__heading')
const navBtnBars=document.querySelector('.burger-btn__bars')
const allSections=document.querySelectorAll('.section')
const footerYear=document.querySelector('.footer__year')
const handleNav = () => {
	nav.classList.toggle('nav--active')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
	handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
	let delayTime=0;
	navItems.forEach(item =>{
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay='.'+delayTime+'s';
		delayTime++;
	})
}
function addFixed() {
	if (window.scrollY >= 300) {
	headerHeading.classList.add('header-to-nav')
	} else {
		headerHeading.classList.remove('header-to-nav')
	}
}
const handleCurrentYear=()=>{
	const year=(new Date).getFullYear();
	footerYear.innerText= year ;
}


navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', addFixed)
handleCurrentYear();
