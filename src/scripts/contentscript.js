import ext from "./utils/ext";
import storage from "./utils/storage";

const target = document.body;

const checkClick = (storageProperty, buttonClass) => {
  storage.get(storageProperty, resp => {

    if (!resp[storageProperty]) {
      const button = document.querySelector(buttonClass);
      if (button) button.click();

    }
  });
}

const runScript = () => {
  const url = document.location.href;

  if (!url || !url.match('netflix.com')) return;


  const observer = new MutationObserver((() => {

    checkClick('checkedStopSkipIntro', '.skip-credits a');
    checkClick('checkedStopWatchNext', '.WatchNext-still-hover-container');

  }));

  const config = { childList: true, subtree: true };
  observer.observe(target, config);

}

ext.runtime.onConnect.addListener(runScript());




