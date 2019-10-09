const requestQueue = [];

export const offlineRequest = (action, setStatus) => {
    if (navigator.onLine) {
        action()
    } else {
        setStatus("Waiting for internet...");
        requestQueue.push(action)
    }
};

const flushQueue = () => {
    console.log("FLUSH");
    return requestQueue.forEach(it => it());
};

window.addEventListener('online', flushQueue);