const PUBLIC_VAPID_KEY='BF0FvpEyDl47Hi_8HDn7kjqeMku2AAb8YkY5Y2_IZQsuX-FkirR4WMaXMXCCdN5IoGln0iB9gObyH8uvDw0Cry0';

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
const subscription = async () => {

    //Service Worker
    const register = await navigator.serviceWorker.register('/worker.js',{
        scope: '/'
    });
    console.log('new Service Worker');

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    });
    


    await fetch('/subscription', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log('Suscribed!')
}

const form = document.querySelector('#myform');
const message = document.querySelector('#message');

form.addEventListener('submit', e=> {
    e.preventDefault();
    fetch('/new-message')
})
subscription();