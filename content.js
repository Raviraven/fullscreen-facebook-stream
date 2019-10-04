chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
    alert(message.message);

    var video = document.getElementsByTagName('video');
    console.log(video);
    console.log(video[0].parentNode);
    console.log(video[0].parentNode.parentNode);
    var parent = video[0].parentNode.parentNode;

    //var video = document.getElementsByClassName("_1c_u _5-yb _302m");
    parent.style["width"] = "auto";
    parent.style["height"] = "-webkit-fill-available";


    var chat = document.getElementsByClassName("_6445 _6j32");
    chat[0].style['display'] = "none";

    var parentDiv = document.getElementsByClassName("_53j5");
    parentDiv[0].style['width'] = '-webkit-fill-available';
    parentDiv[0].style['height'] = '95vh';

    //parentDiv[0].style['height'] = '-webkit-fill-available';
}