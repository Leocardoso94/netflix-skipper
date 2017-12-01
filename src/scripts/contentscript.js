import ext from "./utils/ext";
import storage from "./utils/storage";


const runScript = () => {
  const url = document.location.href;

  if (!url || !url.match('netflix.com')) return;

  checkSkipButton();

}


function checkSkipButton() {
  setInterval(() => {

    storage.get('checkedStopSkipIntro', function (resp) {

      if (!resp.checkedStopSkipIntro) {
        const skipCreditsButton = document.querySelector('.skip-credits a');
        if (skipCreditsButton) skipCreditsButton.click();

      }
    });

    storage.get('checkedStopWatchNext', function (resp) {

      if (!resp.checkedStopWatchNext) {
        const watchNextButton = document.querySelector('.WatchNext-still-hover-container');
        if (watchNextButton) watchNextButton.click();

      }
    });

  }, 3000)
}

ext.runtime.onConnect.addListener(runScript());

