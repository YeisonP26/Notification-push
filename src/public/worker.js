console.log('Service Worker')

self.addEventListener('push', e => {
   const data =  e.data.json()
   console.log(data)
   self.registration.showNotification(data.tittle, {
    body: data.message,
    icon:'https://i.pinimg.com/originals/22/e5/73/22e573580760f3dcd66a442cb89dc473.png'
   })
})