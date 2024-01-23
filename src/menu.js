import initializeData from './products';

const { typeProducts } = initializeData();

export default function createMenuTypeOptions() {
    const menuOptions = typeProducts.map((product) => `
    <li>
        <a>${product.type}</a>
    </li>`).join('');

    const menuSetup = `<ul class="navigation">
    ${menuOptions}
    </ul>`;

    return menuSetup;
}

