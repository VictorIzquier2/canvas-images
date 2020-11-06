const draw = () => {
  // canvas declaration
  const canvas1 = document.querySelector('#canvas1');
  const ctx1 =  canvas1.getContext('2d');

  class CanvasImage {
    constructor(_src){
      this.image = new Image();
      this.image.src = _src;
    }
  }
  const drawCanvasImage = (_image, _ctx, _x, _y, _width, _height) => {
    _image.onload = () => {
    _ctx.drawImage(_image, _x, _y, _width, _height);
    }
  };

  const fireball = new CanvasImage('../images/fireball.png');
  drawCanvasImage(fireball.image, ctx1, 0, 0, 50, 50);
};
window.addEventListener('load', draw());

class CanvasImage {
  constructor(_src){
    this.image = new Image();
    this.image.src = _src;
  }
}
const fireball = new CanvasImage('../images/fireball.png');

const drawCanvasImage = (_image, _x, _y, _width,_height) =>{
  const canvas2 = document.getElementById('canvas2');
  const ctx2 = canvas2.getContext('2d');
  
 ctx2.clearRect(0, 0, 300, 300);
 ctx2.drawImage(_image, _x, _y, _width, _height);
};
const drawCanvasImageOnMove = (_image, a, b, c, d, _width, _height) => {
  let intervalId = 0;
  intervalId = setInterval(() =>{
    a += c;
    b += d;
    return drawCanvasImage(_image, a, b, _width, _height);
  }, 10);
}


window.addEventListener('load', drawCanvasImageOnMove(fireball.image, 250, 0, -0.3, 0.3, 50, 50));

