chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
    alert("Extension started");

    var video = document.getElementsByTagName('video');
    var videoParent = video[0].parentNode;
    var videoGrandParent = video[0].parentNode.parentNode;

    //var video = document.getElementsByClassName("_1c_u _5-yb _302m");
    videoGrandParent.style["width"] = "auto";
    videoGrandParent.style["height"] = "-webkit-fill-available";


    var chat = document.getElementsByClassName("_6445 _6j32");
    chat[0].style['display'] = "none";

    //var parentDiv = document.getElementsByClassName("_53j5");
    videoParent.style['width'] = '-webkit-fill-available';
    videoParent.style['height'] = '95vh';

    //parentDiv[0].style['height'] = '-webkit-fill-available';
}