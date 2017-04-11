/*jshint esversion: 6*/

var load = document.querySelector('#random');

window.addEventListener('load', snowboard);


function snowboard(){
  oReq = new XMLHttpRequest();
  oReq.addEventListener('load', updateDisplay);
  oReq.open('GET', 'http://www.reddit.com/r/chibears.json');
  oReq.send();
}

function updateDisplay(){
  const requestData = JSON.parse(this.responseText);
  console.log(requestData.data.children);
  for(var i = 0; i<requestData.data.children.length; i++){
    if(requestData.data.children[i].data.thumbnail === 'self'){
      selfPic();
    } else {
      thumbPic(requestData.data.children[i].data.thumbnail);
      }
    }
}

function selfPic(){
  const pic = document.createElement('IMG');
  pic.setAttribute('src', 'https://cdn.worldvectorlogo.com/logos/reddit-2.svg');
  pic.setAttribute('width', '300');
  pic.setAttribute('height', '300');
  document.body.appendChild(pic);
}

function thumbPic(picture){
  const pic = document.createElement('IMG');
  pic.setAttribute('src', picture);
  pic.setAttribute('width', '300');
  pic.setAttribute('height', '300');
  document.body.appendChild(pic);
}

