function init(){
    let queries = window.matchMedia('(max-width:810px)')

    let dropdown = document.querySelector('div.dropdown');
    let li = dropdown.parentElement;
    let ul = li.parentElement;

    if (queries.matches){
        ul.appendChild(dropdown);
        ul.style.position = 'relative';
        dropdown.classList.remove('dropdown')
        dropdown.classList.add('dropdown-position-small');

        li.addEventListener('focusin', heightDrpdown);
        li.addEventListener('focusout', zeroHeightDropdown);
    }
}

function heightDrpdown(ev){
    let ul = ev.currentTarget.parentElement;
    let root = document.querySelector(':root');
    let dropdown = document.querySelector('.dropdown-position-small');
    dropdown.style.setProperty('height', getComputedStyle(root).getPropertyValue('--height-of-banner'));
    dropdown.style.setProperty('padding', '1.6rem')
}

function zeroHeightDropdown(ev){
    let dropdown = document.querySelector('.dropdown-position-small');
    dropdown.style.setProperty('height', 0);
    dropdown.style.setProperty('padding', 0)
}

document.addEventListener('DOMContentLoaded', init);


