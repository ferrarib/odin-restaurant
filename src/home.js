
export default function() {
    const heroBox = document.createElement('div');
    heroBox.classList.add('hero-box');
    
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "Ferrari's";

    const subtitle = document.createElement('div');
    subtitle.classList.add('subtitle');
    subtitle.textContent = "Where food and comfort meet";

    heroBox.appendChild(title);
    heroBox.appendChild(subtitle);


    return heroBox;
}