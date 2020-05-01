'use strict'

const myImages = [
  'img/bg.jpg',
  'img/loader.gif',
  'img/p_01.jpg',
  'img/p_02.jpg',
  'img/p_03.jpg',
  'img/p_04.jpg',
  'img/p_05.jpg',
  'img/p_06.jpg',
  'img/p_07.jpg',
  'img/p_08.jpg',
  'img/p_09.jpg',
  'img/p_10.jpg',
  'img/p_11.jpg',
  'img/p_12.jpg',
  'img/p_13.jpg',
  'img/p_14.jpg',
  'img/p_15.jpg',
  'img/p_16.jpg',
  'img/p_17.jpg',
  'img/p_18.jpg',
  'img/p_19.jpg',
  'img/p_20.jpg',
  'img/p_21.jpg',
  'img/p_22.jpg',
  'img/p_23.jpg',
  'img/p_24.jpg',
  'img/p_25.jpg',
];

const loadImages =  async function(imageUrlArray) {
  const promiseArray = [];
  const imageArray = [];

  for (let imageUrl of imageUrlArray) {

      promiseArray.push(new Promise(resolve => {
          const img = new Image();
          img.onload = resolve;
          img.src = imageUrl;
          imageArray.push(img);
      }));
  }
  await Promise.all(promiseArray);
  return imageArray;
};

const main = () => {

  window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  const templates = new function() {
    this.desktop = `
      <h1>Resiliencia</h1>
      <h2>Completa el reto de la resiliencia y conocerás tu regalo</h2>
      <p class="italic">"We will either find a way, or make one."</p>
      <button class="startscreen_button">Empezar</button>
      <p>Tip: ¡Si te atascas vuelve a empezar!</p>`;
    this.mobile = `
      <h1>Error!</h1>
      <h2>Sólo funciono en escritorio y en chrome mejor</h2>
      <h1>:D</h1>`;
    this.startScreen =
    `<main class="main_startscreen startscreen-container">
      <section class="startscreen startscreen-item">
        ${!window.mobileAndTabletcheck() ? this.desktop : this.mobile}   
      </section>
    </main>`;
    this.initStartScreenTemplate = () => {
      document.querySelector('.startscreen').innerHTML = this.startScreen;
    };

    this.main =
    `<main class="main_resiliencia resiliencia-container">
    </main>`;
    this.initMainTemplate = () => {
      document.querySelector('.mainscreen').innerHTML = this.main;
    };

    this.finalScreen =
    `<main class="main_finalscreen finalscreen-container">
      <section class="finalscreen finalscreen-item">
        <h1>Enhorabuena</h1>
        <p>Has vencido al resiliencia, tu código es: </p>
        <h1 class="code">"-----"</h1>
        <p>Envía el código a la siguiente dirección:</p>
        <h2>jesuscebader@protonmail.com</h2>
      </section>
    </main>`;
    this.initFinalScreenTemplate = () => {
      document.querySelector('.finalscreen').innerHTML = this.finalScreen;
    };

    this.initAllTemplates = () => {
      this.initStartScreenTemplate();
      this.initMainTemplate();
      this.initFinalScreenTemplate();
    };
  };

  templates.initAllTemplates();

  const selectors = new function () {
    this.page = document.querySelector('body');
    this.resilienciaContainer = this.page.querySelector('.main_resiliencia');
    this.startscreenContainer = this.page.querySelector('.main_startscreen');
    this.startscreenButton = this.startscreenContainer.querySelector('.startscreen_button');
    this.finalscreenContainer = this.page.querySelector('.main_finalscreen');
    this.finalscreenCode = this.page.querySelector('.code');
  };

  const model = new function(){
    this.puzzleImagesSrc = [...myImages.splice(2)];
    this.puzzleSelectors = [];
    this.shuffledSelectors = [];
  };

  const view = new function() {
    this.updatedItems = () => {
      return [...selectors.resilienciaContainer.querySelectorAll('.resiliencia-item')];
    };
    this.createCanva = () => {
      const item = document.createElement("div");
      item.classList.add('resiliencia-canvas')
      this.createStartingPuzzleArray(item)
      selectors.resilienciaContainer.append(item)
    };
    this.createStartingPuzzleArray = (canva) => {
      model.puzzleImagesSrc.forEach((e,i) => {
        const item = new Image(100, 100);
        item.src = e;
        item.setAttribute('data-position', i)
        model.puzzleSelectors.push(item);
      })
      this.shuffleArray(model.puzzleSelectors, canva);
    };
    this.shuffleArray = (array, canva) => {
      let getRandomPosition = 0;
      let isPosition = false;
      while (model.shuffledSelectors.length < 25) {
        getRandomPosition = Math.floor(Math.random()*25);
        model.shuffledSelectors.length === 0 && model.shuffledSelectors.push(array[getRandomPosition]);

        isPosition = model.shuffledSelectors.some( e => {
          return e.getAttribute('data-position') === array[getRandomPosition].getAttribute('data-position')
        })
        !isPosition && model.shuffledSelectors.push(array[getRandomPosition])
      };
      model.shuffledSelectors.forEach( e => {
        e.addEventListener("click", events.comparePosition);
        canva.append(e)});
    } 
    this.animatedBg = () => {
      selectors.resilienciaContainer.style.backgroundImage = `none`;
      const rgb = [0,0,0]
      setInterval(() => {
        rgb.forEach( (e,i) => {
          rgb[i] = Math.floor(Math.random()*255)
          selectors.resilienciaContainer.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        });
      }, 500);
      
    }
  };

  const events = new function() {
  this.removeResiliencia = (event) => {
      event.target.remove()
      if (view.updatedItems() < 1){
        fetch('https://spreadsheets.google.com/feeds/cells/1u7fTkRTI5MVgR_mbQWLt5tcU5_mx30nOHI9RqgxpmXQ/1/public/full?alt=json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          selectors.finalscreenCode.innerHTML = data.feed.entry[2].gs$cell["$t"];
          selectors.finalscreenContainer.style.display = "flex";
          selectors.finalscreenContainer.style.zIndex = 4;
          return
        });
      };
    };
    this.startResiliencia = (event) => {
      selectors.startscreenContainer.style.display = "none";
      view.createCanva()
      view.animatedBg()
    };
    this.comparePosition = (event) => {
      const dataPos = Array.from(model.shuffledSelectors).indexOf(event.target)
      const finalPos = Array.from(model.puzzleSelectors).indexOf(event.target)
    }
  };

  !window.mobileAndTabletcheck() && 
    selectors.startscreenButton.addEventListener("click", events.startResiliencia);

};

loadImages(myImages).then((images) => {
  window.addEventListener('load',main);
});