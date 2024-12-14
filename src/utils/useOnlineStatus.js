import { useEffect, useState } from "react"

export const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStatus(true)
        })

        window.addEventListener('offline', () => {
            setOnlineStatus(false)
            alert('Looks like you are Offline')
        })
    })

    return onlineStatus
}