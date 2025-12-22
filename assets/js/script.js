const desktopMenu = document.querySelector('#desktop-menu');

const mobileMenuClosed = document.querySelector('#mobile-menu-closed');
const mobileMenuClosedBtn = document.querySelector('#mobile-menu-closed button');

const mobileMenuOpen = document.querySelector('#mobile-menu-open');
const mobileMenuOpenBtn = document.querySelector('#mobile-menu-open button');

// Listen to the screen size
const mediaQuery = window.matchMedia('(max-width: 800px)');

function handleScreenChange(e) {
    if (e.matches) {
        // Screen ≤ 800px (mobile)
        // Hamburger displayed through CSS
        desktopMenu.setAttribute('aria-hidden', 'true');
        mobileMenuClosedBtn.setAttribute('aria-hidden', 'false');
        mobileMenuOpenBtn.setAttribute('aria-hidden', 'true');
    } else {
        // Screen > 800px (desktop)
        // Desktop menu displayed through CSS
        // Re-initalised inline css style to let the css sheet take controle
        mobileMenuClosed.style.display = "";
        mobileMenuOpen.style.display = "";

        desktopMenu.setAttribute('aria-hidden', 'false');
        mobileMenuClosedBtn.setAttribute('aria-hidden', 'true');
        mobileMenuOpenBtn.setAttribute('aria-hidden', 'true');

    }
}

//Launch when loading
handleScreenChange(mediaQuery);
//Track changes
mediaQuery.addEventListener('change', handleScreenChange);


mobileMenuClosedBtn.addEventListener('click', (e) => {
    mobileMenuClosed.style.display = "none";
    mobileMenuOpen.style.display = "initial";
    
    mobileMenuClosedBtn.setAttribute('aria-hidden', 'true');
    mobileMenuOpenBtn.setAttribute('aria-hidden', 'false');
});

mobileMenuOpenBtn.addEventListener('click', (e) => {
    mobileMenuClosed.style.display = "initial";
    mobileMenuOpen.style.display = "none";
    
    mobileMenuClosedBtn.setAttribute('aria-hidden', 'false');
    mobileMenuOpenBtn.setAttribute('aria-hidden', 'true');
});
