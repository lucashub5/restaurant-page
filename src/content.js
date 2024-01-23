import './components/style.css';

export function createContent() {
    return `
        <nav>
            <ul>
            </ul>
        </nav>`;
}

export function createMenuType(productType) {
    return `
    <li>
        <h2 class="menu">${productType}</h2>
        <ul class="submenu ${productType}">
        </ul>
    </li>`;
}

export function createSubMenuType(products, type) {
    const filteredProducts = products.filter(product => product.type === type);

    const htmlElements = filteredProducts.map(product => `
        <li class="item">
            <a class="title-item">${product.name}</a>
            <div class="desc-item">
                <a>${product.desc}</a>
            </div>
            <div>
                <a class="cc-item">${product.nameprice1}</a>
                <a class="price-item">${product.price1}</a>
            </div>
            <div>
                <a class="cc-item">${product.nameprice2}</a>
                <a class="price-item">${product.price2}</a>
            </div>
        </li>
    `);

    return htmlElements.join('');
}
