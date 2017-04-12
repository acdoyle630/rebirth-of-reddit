/*jshint esversion: 6*/

window.addEventListener('load', pageLoad);

function pageLoad(){
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
      selfPic(requestData.data.children[i].data);
    } else {
      thumbPic(requestData.data.children[i].data);
      }
    }
}

function selfPic(picture){
 //create thumbnail
  const pic = document.createElement('IMG');
  const picFrame = document.createElement('div');
  picFrame.className = 'frameContent';

  //create title
  const title = document.createElement('p');
  title.className = 'titleContent';
  title.innerHTML = picture.title;
  picFrame.appendChild(title);

  //set thumbnail display
  pic.setAttribute('src', 'https://cdn.worldvectorlogo.com/logos/reddit-2.svg');
  pic.setAttribute('width', '100');
  pic.setAttribute('height', '100');
  pic.className = 'thumbnailContent';
  picFrame.appendChild(pic);
  homepage.appendChild(picFrame);
}

function thumbPic(picture){
  //create Thumbnail
  const pic = document.createElement('IMG');
  const picFrame = document.createElement('div');
  picFrame.className = 'frameContent';

  //create title
  const title = document.createElement('p');
  title.className = 'titleContent';
  title.innerHTML = picture.title;
  picFrame.appendChild(title);

  //set thumbnail display
  pic.setAttribute('src', picture.thumbnail);
  pic.setAttribute('width', '100');
  pic.setAttribute('height', '100');
  pic.className = 'thumbnailContent';
  picFrame.appendChild(pic);
  homepage.appendChild(picFrame);
}

