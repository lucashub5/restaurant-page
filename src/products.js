import { typeProduct, product } from './tempDB';

export default function initializeData() {

    const typeProducts = [];
    const productsArray = [];

    function addTypeProduct(newTypeProduct) {
        const newTypeProductInstance = { ...typeProduct, type: newTypeProduct.type };
        typeProducts.push(newTypeProductInstance);
    }

    const newTypeProduct1 = { type: 'CERVEZAS' };
    addTypeProduct(newTypeProduct1);

    const newTypeProduct2 = { type: 'TENTENPIES' };
    addTypeProduct(newTypeProduct2);

    const newTypeProduct3 = { type: 'SANDWICH' };
    addTypeProduct(newTypeProduct3);

    const newTypeProduct4 = { type: 'PIZZAS' };
    addTypeProduct(newTypeProduct4);

    function addProduct(newProduct) {
        const newProductInstance = { ...product, ...newProduct };
        productsArray.push(newProductInstance);
    }

    const newProduct1 = {
        type: 'CERVEZAS',
        name: 'BLONDE',
        desc: 'DORADO BRILLANTE-SUAVE MALTOSA-FACIL DE TOMAR',
        price1: '',
        nameprice1: '',
        nameprice2: 'VASO 414CC',
        price2: '$2400',
    };
    addProduct(newProduct1);

    const newProduct2 = {
        type: 'TENTENPIES',
        name: 'MILANESITAS',
        desc: 'DE TERNERA CON PAPAS FRITAS. CON DIPS DE CHEDDAR, ADEREZO BAUM Y ALIOLI DE RÚCULA',
        nameprice1: 'MEDIANA',
        price1: '$4150',
        nameprice2: 'GRANDE',
        price2: '$6750',
    };
    addProduct(newProduct2);

    const newProduct3 = {
        type: 'CERVEZAS',
        name: 'SCOTTISH',
        desc: 'COBRE-PROFUNDO-SABORES Y AROMAS ACARAMELADOS-FINAL SECO',
        nameprice1: '',
        price1: '',
        nameprice2: 'VASO 414CC',
        price2: '$2400',
    };
    addProduct(newProduct3);

    const newProduct4 = {
        type: 'CERVEZAS',
        name: 'OLD ALE',
        desc: 'ROJIZO PROFUNDO-ROBUSTA-FRUTOS ROJOS SECOS-ACARAMELADA',
        nameprice1: '',
        price1: '',
        nameprice2: 'VASO 420CC',
        price2: '$2700',
    };
    addProduct(newProduct4);

    const newProduct5 = {
        type: 'CERVEZAS',
        name: 'IRON ALE',
        desc: 'LIGERA-REFRESCANTE-NARANJA-JENGIBRE-SIN ALCOHOL',
        nameprice1: '',
        price1: '',
        nameprice2: 'VASO 473CC',
        price2: '$2550',
    };
    addProduct(newProduct5);

    const newProduct6 = {
        type: 'TENTENPIES',
        name: 'TORRE DE NACHOS',
        desc: 'CON TERNERA DESMENUZADA, SALSA DE TOMATES, CHEDDAR Y QUESO CREMA CON CIBOULETTE',
        nameprice1: '',
        price1: '',
        nameprice2: 'GRANDE',
        price2: '$7600',
    };
    addProduct(newProduct6);

    const newProduct7 = {
        type: 'TENTENPIES',
        name: 'RABAS',
        desc: 'ANILLOS DE CALAMAR FRITOS CON DIP DE ALIOLI DE RÚCULA Y GAJOS DE LIMÓN',
        nameprice1: 'MEDIANA',
        price1: '5950',
        nameprice2: 'GRANDE',
        price2: '$10850',
    };
    addProduct(newProduct7);

    const newProduct8 = {
        type: 'SANDWICH',
        name: 'FARO NORTE',
        desc: 'TOSTADO EN PAN CIBATTA DE JAMÓN GIRLLADO Y QUESO FUNDIDO Y MANTECA',
        nameprice1: '',
        price1: '',
        nameprice2: 'GRANDE',
        price2: '$5200',
    };
    addProduct(newProduct8);

    const newProduct9 = {
        type: 'SANDWICH',
        name: 'SERRANO',
        desc: 'SANDWICH DE JAMÓN CRUDO, TOMATE FRESCO, RÚCULA, QUESO EN HEBRAS Y PESTO DE TOMATES',
        nameprice1: '',
        price1: '',
        nameprice2: 'GRANDE',
        price2: '$5500',
    };
    addProduct(newProduct9);

    const newProduct10 = {
        type: 'SANDWICH',
        name: 'CHIMI BEEF',
        desc: 'SANDWICH EN PAN CIBATTA DE TERNERA DESMENUZADA CON QUESO TYBO, PANCETA CROCANTE Y SALSA CRIOLLA',
        nameprice1: '',
        price1: '',
        nameprice2: 'GRANDE',
        price2: '$7450',
    };
    addProduct(newProduct10);

    const newProduct11 = {
        type: 'PIZZAS',
        name: 'MOZZARELLA',
        desc: 'SALSA DE TOMATE, QUESO MOZZARELLA, ORÉGANO Y ACEITUNAS VERDES',
        nameprice1: 'MEDIANA',
        price1: '$4600',
        nameprice2: 'GRANDE',
        price2: '$7000',
    };
    addProduct(newProduct11);

    const newProduct12 = {
        type: 'PIZZAS',
        name: 'NAPOLITANA',
        desc: 'SALSA DE TOMATE, QUESO MOZZARELLA, TOMATES FRESCOS, ALBAHACA',
        nameprice1: 'MEDIANA',
        price1: '$4650',
        nameprice2: 'GRANDE',
        price2: '$7500',
    };
    addProduct(newProduct12);

    const newProduct13 = {
        type: 'PIZZAS',
        name: 'ESPINACA',
        desc: 'SALSA DE TOMATE, QUESO MOZZARELLA, ESPINACA Y HONGOS SALTEADOS',
        nameprice1: 'MEDIANA',
        price1: '$5600',
        nameprice2: 'GRANDE',
        price2: '$8800',
    };
    addProduct(newProduct13);

    const newProduct14 = {
        type: 'CERVEZAS',
        name: 'PORTER',
        desc: 'OSCURO CON REFLEJOS RUBI-CHOCOLATE-TOFFEE-CAFE',
        nameprice1: '',
        price1: '',
        nameprice2: 'VASO 414CC',
        price2: '$2550',
    };
    addProduct(newProduct14);

    return { typeProducts, productsArray };
}
