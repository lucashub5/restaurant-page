export function createMenuCerveza() {
    const liContainer = document.createElement('li');
    const menuContainer = document.createElement('h2');
    menuContainer.classList.add('menu');
    liContainer.appendChild(menuContainer);

    const ulContainer = document.createElement('ul');
    ulContainer.classList.add('submenu');
    liContainer.appendChild(ulContainer);

    const itemContainer = document.createElement('li');
    itemContainer.classList.add('item');
    const titleItem = document.createElement('a');
    titleItem.classList.add('title-item');
    titleItem.textContent = 'BLONDE';



}



<content>
            <nav>
                <ul>
                  <li>
                    <h2 class="menu">CERVEZAS</h2>
                    <ul class="submenu">
                      <li class="item">
                        <a class="title-item">BLONDE</a>
                        <div>
                            <a class="desc-item">ABV% 5 INU 18 SRM 4</a>
                            <a class="desc2-item"> DORADO BRILLANTE
                                -SUAVE-MALTOSA-FACIL DE TOMAR</a>
                        </div>
                        <div>
                            <a class="cc-item">VASO 414cc</a>
                            <a class="price-item">$2400</a>
                        </div>
                        </li>
                        <li class="item">
                            <a class="title-item">SCOTTISH</a>
                            <div>
                                <a class="desc-item">ABV% 6 INU 18 SRM 15</a>
                                <a class="desc2-item"> COBRE PROFUNDO-SABORES Y AROMAS ACARAMELADOS-FINAL SECO</a>
                            </div>
                            <div>
                                <a class="cc-item">VASO 414cc</a>
                                <a class="price-item">$2400</a>
                            </div>
                            </li>
                            <li class="item">
                                <a class="title-item">POTTER</a>
                                <div>
                                    <a class="desc-item">ABV% 6 INU 18 SRM 27</a>
                                    <a class="desc2-item"> OSCURO CON REFLEJOS RUBI-CHOCOLATE-TOFFEE-CAFE</a>
                                </div>
                                <div>
                                    <a class="cc-item">VASO 414cc</a>
                                    <a class="price-item">$2550</a>
                                </div>
                                </li>
                    </ul>
                  </li>
                  <li>
                        <h2 class="menu">TENTENPIES</h2>
                        <ul class="submenu">
                            <li class="item-french">
                                <a class="title-item">MILANESITAS</a>
                                <a class="desc2-item">DE TERNERA CON PAPAS FRITAS. CON DIPS DE CHEDDAR, ADEREZO BAUM 
                                    Y ALIOLI DE RÚCULA.
                                </a>
                                <div>
                                    <a class="cc-item">MEDIANA</a>
                                    <a class="price-item">$4150</a>
                                </div>
                                <div>
                                    <a class="cc-item">GRANDE</a>
                                    <a class="price-item">$6750</a>
                                </div>
                            </li>
                        </ul>
                        <ul class="submenu">
                            <li class="item-french">
                                <a class="title-item">CRISPY CHICKEN</a>
                                <a class="desc2-item">TIRITAS DE POLLO REBOZADAS EN CEREAL CON PAPAS FRITAS. CON DIPS 
                                    DE CHEDDAR, ADEREZO BAUM Y ALIOLI DE RÚCULA
                                </a>
                                <div>
                                    <a class="cc-item">MEDIANA</a>
                                    <a class="price-item">$4450</a>
                                </div>
                                <div>
                                    <a class="cc-item">GRANDE</a>
                                    <a class="price-item">$7250</a>
                                </div>
                            </li>
                        </ul>
                        <ul class="submenu">
                            <li class="item-french">
                                <a class="title-item">RABAS</a>
                                <a class="desc2-item">ANILLOS DE CALAMAR FRITOS CON DIP DE ALIOLI DE RÚCULA
                                     Y GAJOS DE LIMÓN
                                </a>
                                <div>
                                    <a class="cc-item">MEDIANA</a>
                                    <a class="price-item">$5950</a>
                                </div>
                                <div>
                                    <a class="cc-item">GRANDE</a>
                                    <a class="price-item">$10850</a>
                                </div>
                            </li>
                        </ul>
                  </li>
                  <li>
                    <h2 class="menu">PAPAS</h2>
                    <ul class="submenu">
                        <li class="item-french">
                            <a class="title-item">BERLIN</a>
                            <a class="desc2-item">SALSA DE QUESO CHEDDAR, SALCHICHA CORTADA Y HUEVOS REVUELTOS</a>
                            <div>
                                <a class="cc-item">MEDIANA</a>
                                <a class="price-item">$5450</a>
                            </div>
                            <div>
                                <a class="cc-item">GRANDE</a>
                                <a class="price-item">$6900</a>
                            </div>
                        </li>
                    </ul>
                    <ul class="submenu">
                        <li class="item-french">
                            <a class="title-item">PORKER</a>
                            <a class="desc2-item">SALSA CHEDDAR, BRASEADO DE CERDO A LA BBQ, VERDEO Y QUESO CREMA</a>
                            <div>
                                <a class="cc-item">MEDIANA</a>
                                <a class="price-item">$5450</a>
                            </div>
                            <div>
                                <a class="cc-item">GRANDE</a>
                                <a class="price-item">$6900</a>
                            </div>
                        </li>
                    </ul>
                    <ul class="submenu">
                        <li class="item-french">
                            <a class="title-item">VEGANAS</a>
                            <a class="desc2-item">TOMATES SECOS HIDRATADOS, RÚCULA, ACEITUNAS NEGRAS, 
                                ACEITE DE ALBAHACA Y DIP DE SALSA BRAVA</a>
                            <div>
                                <a class="cc-item">MEDIANA</a>
                                <a class="price-item">$5000</a>
                            </div>
                            <div>
                                <a class="cc-item">GRANDE</a>
                                <a class="price-item">$6350</a>
                            </div>
                        </li>
                    </ul>
              </li>
                  
                </ul>
              </nav>
        </content>