chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
    alert(message.message);
    var chat = document.getElementsByClassName("_1c_u _5-yb _302m");
    console.log(chat);
    console.log(chat[0].style);
    console.log(chat[0].style["width"]);
    chat[0].style["width"] = "auto";
    chat[0].style["height"] = "-webkit-fill-available";
    var video = document.getElementsByClassName("_6445 _6j32");
    video[0].style['display'] = "none";

    var parentDiv = document.getElementsByClassName("_53j5");
    parentDiv[0].style['width'] = '-webkit-fill-available';
    parentDiv[0].style['height'] = '-webkit-fill-available';
}