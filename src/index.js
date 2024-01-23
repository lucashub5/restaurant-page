import { createLogo, createMenuHeader, createSocialIcons } from './header';
import { createContent, createMenuType, createSubMenuType } from './content';
import createFooter from './footer';
import initializeData from './products';
import createMenuTypeOptions from './menu';

const mainContainer = document.createElement('main');

const headerHTML = `
    ${createLogo()}
    ${createMenuHeader()}
    ${createSocialIcons()}
`;

const header = document.createElement('header');
header.innerHTML = headerHTML;

mainContainer.appendChild(header);

const menuTypeOptions = createMenuTypeOptions();
mainContainer.insertAdjacentHTML('beforeend', menuTypeOptions);

const contentHTML =`
    ${createContent()}
`;

const content = document.createElement('content');
content.innerHTML = contentHTML;

mainContainer.appendChild(content);

const footerHTML =`
    ${createFooter()}
`;

mainContainer.innerHTML += footerHTML;

document.body.appendChild(mainContainer);

const listMenus = mainContainer.querySelectorAll('ul.navigation li a');

listMenus.forEach(li => {
    li.addEventListener('click', (event) => {

        const contentUl = document.querySelector('content ul');
        contentUl.innerHTML = '';


        const insertElement = document.querySelector('content ul');
        const contentTypeProductHTML = createMenuType(event.target.textContent);

        insertElement.insertAdjacentHTML('beforeend', contentTypeProductHTML);
        const submenuElement = document.querySelector(`.submenu.${event.target.textContent}`);
        console.log(submenuElement)
        const { productsArray } = initializeData();


        const contentProductHTML = createSubMenuType(productsArray, event.target.textContent);
        submenuElement.insertAdjacentHTML('beforeend', contentProductHTML);

    });
});

