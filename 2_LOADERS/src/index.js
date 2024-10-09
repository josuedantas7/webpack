import Tittle from './components/title'
import Image from './components/image'
import Button from './components/button'
const title = new Tittle();
const image = new Image();
const button = new Button();


image.insertBobImage();
title.create('Hello World!');
button.create();

// babel spread


const obj = {a: 1, b:2 , c:3, d: 4}

let {a, b, ...test} = obj

console.log(a, b, test)