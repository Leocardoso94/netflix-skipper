import ext from "./utils/ext";
import storage from "./utils/storage";

const stopSkipIntroCheckBox = document.getElementById('stop-skip-intro');

storage.get('checkedStopSkipIntro', function (resp) {
    stopSkipIntroCheckBox.checked = resp.checkedStopSkipIntro;
});

stopSkipIntroCheckBox.addEventListener('click', () => {
    storage.set({ checkedStopSkipIntro: stopSkipIntroCheckBox.checked }, function () {

    });
});


const stopSkipWatchNextCheckBox = document.getElementById('stop-skip-watch-next');

storage.get('checkedStopWatchNext', function (resp) {
    stopSkipWatchNextCheckBox.checked = resp.checkedStopWatchNext;
});

stopSkipWatchNextCheckBox.addEventListener('click', () => {
    storage.set({ checkedStopWatchNext: stopSkipWatchNextCheckBox.checked }, function () {

    });
});
