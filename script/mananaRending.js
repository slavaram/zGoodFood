const templateElement = document.querySelector('.template');
const containerElements = document.querySelector('.menu');

// Функция рендринга карточек
function composeItem({link, linkname, link1, linkname1, name, artikul, artikulznach, sostav, sostavznach, upakovka, upakovkaznach, ves, vesznac, parametru, parametruznac, strana, stranaznach, url, urlname, url1, urlname1, url2, urlname2, url3, urlname3}) {

    const newElement = templateElement.content.cloneNode(true);

    const imgElement = newElement.querySelector('.element__img');
    imgElement.src = link;
    imgElement.alt = linkname;

    const img1Element = newElement.querySelector('.element__img1');
    img1Element.src = link1;
    img1Element.alt = linkname1;

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

    const urlElement = newElement.querySelector('.element__img-logo');
    urlElement.src = url;
    urlElement.alt = urlname;

    const url1Element = newElement.querySelector('.element__img-logo-1');
    url1Element.src = url1;
    url1Element.alt = urlname1;

    const url2Element = newElement.querySelector('.element__img-logo-2');
    url2Element.src = url2;
    url2Element.alt = urlname2;

    const url3Element = newElement.querySelector('.element__img-logo-3');
    url3Element.src = url3;
    url3Element.alt = urlname3;

    return newElement;
}

//Рендер элементов галереи 
function renderElements() {
    const elementsArray = initialCardsManana.map(composeItem);
    containerElements.append(...elementsArray);
}

renderElements();