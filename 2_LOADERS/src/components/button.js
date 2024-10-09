import './button.scss'
class Button {
    create(){
        const button = document.createElement('button');

        button.innerText = 'Click me';

        button.classList.add('btn');

        document.body.appendChild(button);
    }
}

export default Button;