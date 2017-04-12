/*jshint esversion: 6*/

window.addEventListener('load', pageLoad);
let homePage = 'all';
let myPage = 'snowboarding';
const random = document.querySelector('#random');
const myBoards = document.querySelector('#myBoards');
const app = document.querySelector('#getApp');
const homeScreen = document.querySelector('#homepage');
const search = document.querySelector('#searchBar');
const searchButton = document.querySelector('#searchButton');
const subreddit = document.querySelector('#subreddit');

searchButton.addEventListener('click', function(){
//reload page with new homePage
  homeScreen.innerHTML = '';
  homePage = search.value;
  subreddit.innerHTML = homePage;
  console.log(homePage);
  pageLoad();
});

myBoards.addEventListener('click', function(){
  homeScreen.innerHTML = '';
  homePage = myPage;
  subreddit.innerHTML = homePage;
  console.log(homePage);
  console.log(myPage);
  pageLoad();
});

function pageLoad(){
  oReq = new XMLHttpRequest();
  oReq.addEventListener('load', updateDisplay);
  oReq.open('GET', 'http://www.reddit.com/r/'+ homePage +'.json');
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
  pic.setAttribute('width', '200');
  pic.setAttribute('height', '200');
  pic.className = 'thumbnailContent';
  picFrame.appendChild(pic);
  homepage.appendChild(picFrame);

  //Author
  const author = document.createElement('h4');
  author.className = 'author';
  author.innerHTML = picture.author;
  title.appendChild(author);
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
  pic.setAttribute('width', '200');
  pic.setAttribute('height', '200');
  pic.className = 'thumbnailContent';
  picFrame.appendChild(pic);
  homepage.appendChild(picFrame);

  //author
  const author = document.createElement('h4');
  author.className = 'author';
  author.innerHTML = picture.author;
  title.appendChild(author);
}

