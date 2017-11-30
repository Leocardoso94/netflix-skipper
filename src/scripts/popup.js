import ext from "./utils/ext";
import storage from "./utils/storage";

const checkBox = document.getElementById('stop');


storage.get('checkedStop', function (resp) {
    checkBox.checked = resp.checkedStop;
});


checkBox.addEventListener('click', () => {
    storage.set({ checkedStop: checkBox.checked }, function () {

    });
})