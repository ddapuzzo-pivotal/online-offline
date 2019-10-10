import React, {useState} from 'react';

export const OfflineBanner = () => {
    const [isOnline, setIsOnline] = useState(false)
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));

    return isOnline
        ? <></>
        : <div id={'offline-banner'}>
            You are offline
        </div>;
};