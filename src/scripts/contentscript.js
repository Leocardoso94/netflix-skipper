import ext from "./utils/ext";

var extractTags = () => {
  var url = document.location.href;
  if (!url || !url.match(/^http/)) return;

  var data = {
    title: "",
    description: "",
    url: document.location.href
  }

  var ogTitle = document.querySelector("meta[property='og:title']");
  if (ogTitle) {
    data.title = ogTitle.getAttribute("content")
  } else {
    data.title = document.title
  }

  var descriptionTag = document.querySelector("meta[property='og:description']") || document.querySelector("meta[name='description']")
  if (descriptionTag) {
    data.description = descriptionTag.getAttribute("content")
  }


  return data;
}

function onRequest(request, sender, sendResponse) {

  console.log(ext);
  if (request.action === 'process-page') {
    sendResponse(extractTags())
  }
}

ext.runtime.onMessage.addListener(onRequest);


const runScript = () => {
  const url = document.location.href;
  if (!url || !url.match(/^http/)) return;

  checkSkipButton();
}


function checkSkipButton() {
  setInterval(() => {

    const skipCreditsButton = document.querySelector('.skip-credits a');
    if (skipCreditsButton) {
      skipCreditsButton.click();
    }

  }, 3000)
}

ext.runtime.onConnect.addListener(runScript());

