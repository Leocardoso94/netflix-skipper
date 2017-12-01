import ext from "./utils/ext";
import storage from "./utils/storage";


const runScript = () => {
  const url = document.location.href;

  if (!url || !url.match('netflix.com')) return;

  checkSkipButton();

}


function checkSkipButton() {
  setInterval(() => {

    storage.get('checkedStop', function (resp) {
      
      if (!resp.checkedStop) {
        const skipCreditsButton = document.querySelector('.skip-credits a');
        if (skipCreditsButton) {
          skipCreditsButton.click();
        }
      }
    });

  }, 3000)
}

ext.runtime.onConnect.addListener(runScript());

