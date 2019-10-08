chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
    var video = document.getElementsByTagName('video');
    var videoParent = video[0].parentNode;
    var videoGrandParent = video[0].parentNode.parentNode;
    var chat = document.getElementsByClassName("_6445 _6j32");
 
    videoGrandParent.style["width"] = "auto";
    videoGrandParent.style["height"] = "-webkit-fill-available";

    chat[0].style['display'] = "none";

    videoParent.style['width'] = '-webkit-fill-available';
    videoParent.style['height'] = '95vh';
}