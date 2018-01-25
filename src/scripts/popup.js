import ext from "./utils/ext";
import storage from "./utils/storage";


const stop = (storageProperty, className) => {
    const element = document.getElementById(className);

    storage.get(storageProperty, (resp) => {
        element.checked = resp[storageProperty];
    });

    element.addEventListener('click', () => {
        storage.set({ [storageProperty]: element.checked });
    });

}

stop('checkedStopSkipIntro', 'stop-skip-intro');
stop('checkedStopWatchNext', 'stop-skip-watch-next');