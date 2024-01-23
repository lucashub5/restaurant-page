import './components/style.css';
import logoWheat from './components/svg/logo-Wheat.svg';
import logoWSP from './components/svg/logo-whatsapp.svg';
import logoIG from './components/svg/logo-instagram.svg';
import logoFace from './components/svg/logo-facebook.svg';

export function createLogo() {
    return `
        <div class="logo">
            <div class="logo-subtext">Baum</div>
            <div class="logo-subtext">LANÚS</div>
            <div class="container-wheat">
                <div class="border-logo"></div>
                <div class="img-logo">
                    <img src="${logoWheat}" alt="logo-wheat">
                </div>
                <div class="border-logo"></div>
            </div>
        </div>
    `;
}

export function createMenuHeader() {
    return `
        <div class="menu-header">CARTA</div>
    `;
}

export function createSocialIcons() {
    return `
        <div class="social">
            ${createSocialIcon(logoWSP)}
            ${createSocialIcon(logoIG)}
            ${createSocialIcon(logoFace)}
        </div>
    `;
}

function createSocialIcon(src) {
    return `<img src="${src}" alt="social-icon">`;
}
