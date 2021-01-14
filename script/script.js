const templateElement = document.querySelector('.template');
const containerElements = document.querySelector('.menu');

// Функция рендринга карточек
function composeItem({link, linkname, name, artikul, artikulznach, sostav, sostavznach, upakovka, upakovkaznach, ves, vesznac, parametru, parametruznac, strana, stranaznach}) {

    const newElement = templateElement.content.cloneNode(true);

    const imgElement = newElement.querySelector('.element__img');
    imgElement.src = link;
    imgElement.alt = linkname;

    const nameElement = newElement.querySelector('.element__name');
    nameElement.textContent = name;

    const artikulElement = newElement.querySelector('.element__item_artikul-znachenie');
    artikulElement.textContent = artikul;

    const artikulznachElement = newElement.querySelector('.element__item_artikul-znachenie');
    artikulznachElement.textContent = artikulznach;

    const sostavElement = newElement.querySelector('.element__item_sostav');
    sostavElement.textContent = sostav;

    const sostavznachElement = newElement.querySelector('.element__item_sostav-znachenie');
    sostavznachElement.textContent = sostavznach;

    const upakovkaElement = newElement.querySelector('.element__item_upakovka');
    upakovkaElement.textContent = upakovka;

    const upakovkaznachElement = newElement.querySelector('.element__item_upakovka-znachenie');
    upakovkaznachElement.textContent = upakovkaznach;

    const vesElement = newElement.querySelector('.element__item_ves');
    vesElement.textContent = ves;

    const vesznacElement = newElement.querySelector('.element__item_ves-znachenie');
    vesznacElement.textContent = vesznac;
    
    const parametruElement = newElement.querySelector('.element__item_parametru');
    parametruElement.textContent = parametru;

    const parametruznacElement = newElement.querySelector('.element__item_parametru-znachenie');
    parametruznacElement.textContent = parametruznac;
    
    const stranaElement = newElement.querySelector('.element__item_strana');
    stranaElement.textContent = strana;

    const stranaznachElement = newElement.querySelector('.element__item_strana-znachenie');
    stranaznachElement.textContent = stranaznach;

    return newElement;
}

//Рендер элементов галереи 
function renderElements() {
    const elementsArray = initialCards.map(composeItem);
    containerElements.append(...elementsArray);
}

renderElements();