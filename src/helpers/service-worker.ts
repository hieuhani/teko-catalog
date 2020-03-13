export function setup(): void {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing
            if (installingWorker == null) {
              return
            }
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log(
                    'New content is available and will be used when all ' +
                      'tabs for this page are closed.'
                  )
                } else {
                  console.log('Content is cached for offline use.')
                }
              }
            }
          }
        })
        .catch(error => {
          console.error('Error during service worker registration:', error)
        })
    })
  }
}
