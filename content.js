chrome.runtime.onMessage.addListener(gotMessage);

var fullscreen = false;
var chatDisplay;
var vidParentWidth;
var vidParentHeight;
var vidGrandParentWidth;
var vidGrandParentHeight;

var video;
var videoParent;
var videoGrandParent;
var chat;


function gotMessage(message,sender,sendresponse)
{
    getDOMElements();
    if(!fullscreen)
    {
        setVideoToFullscreen();
    }
    else {
        minimizeVideo();
    }

    fullscreen = !fullscreen;
}

function getDOMElements(){
    video = document.getElementsByTagName('video');
    videoParent = video[0].parentNode;
    videoGrandParent = video[0].parentNode.parentNode;
    chat = document.getElementsByClassName("_6445 _6j32");
 
    chatDisplay = 'block';
    vidParentHeight = videoParent.style['height'];
    vidParentWidth = videoParent.style['width'];
    vidGrandParentHeight = videoGrandParent.style["height"];
    vidGrandParentWidth = videoGrandParent.style["width"];
}

function setVideoToFullscreen(){
    setStylesForDOMElems('none', '-webkit-fill-available', '95vh', 'auto', '-webkit-fill-available')
}

function minimizeVideo(){
    setStylesForDOMElems(chatDisplay, vidParentWidth, vidParentHeight, vidGrandParentWidth, vidGrandParentHeight);
}

function setStylesForDOMElems(chatDisplay, vidParentWidth, vidParentHeight, vidGrandParentWidth, vidGrandParentHeight){
    chat[0].style['display'] = chatDisplay;
    videoParent.style['width'] = vidParentWidth;
    videoParent.style['height'] = vidParentHeight;
    videoGrandParent.style["width"] = vidGrandParentWidth;
    videoGrandParent.style["height"] = vidGrandParentHeight;
}