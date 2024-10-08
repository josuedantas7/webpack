import Login from '../img/login.png'
class Image {
    insertBobImage(){
        const image = document.createElement('img');

        image.src = Login;
        image.width = 500;

        document.querySelector('body').appendChild(image);
    }
}

export default Image;