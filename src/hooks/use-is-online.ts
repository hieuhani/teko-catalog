import { useState, useEffect } from 'react'

export function useIsOnline(): boolean {
  const [online, setOnline] = useState<boolean>(navigator.onLine)
  const updateOnlineStatus = (): void => {
    setOnline(navigator.onLine)
  }
  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus);
    return (): void => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus);
    }
  }, [])
  return online
}
