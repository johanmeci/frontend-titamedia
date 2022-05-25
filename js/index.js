//Menu Action
const btnMenu = document.querySelector('#iconMenu');
const navbar = document.querySelector('#navbar');

btnMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('active');
  navbar.classList.toggle('active');
});


//Grid Img API
const btnLoadImg = document.querySelector('#loadImg');
const imgGrid = document.querySelector('#imagesGrid');

async function getImgAPI() {
  const url = 'https://api.unsplash.com/photos/?client_id=XuMnBS-8t5ENxkoSorPlEGDGrz4zysQ-hRN8dvPf_78&per_page=15';

  imgGrid.innerHTML = '';

  const response = await fetch(url);
  const result = await response.json();

  if(result.length > 0) {

    result.map(img => {
      const imgNode = document.createElement('img');
      imgNode.classList.add('grid-item');
      imgNode.src = img.urls.small;

      imgGrid.appendChild(imgNode);
    });

  }


}

getImgAPI();