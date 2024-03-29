const observableModule = require("@nativescript/core/data/observable");
const errorMsgs = require("~/00 Constants/error_messages.json");

var page;
var pageData;

exports.onShownModally = function (args) {
    page = args.object;
    page.actionBarHidden = true;
    pageData = observableModule.fromObject({
        temp_announcement: {
            description: undefined,
            picture: undefined,
        },
        create_callback: args.context.create_callback,
    });
    page.bindingContext = pageData;
};

exports.confirmCreateAnnouncementOnTap = function () {
    if ( !pageData.temp_announcement.description ) {
        alert("Write something...");
        return;
    }
    pageData.create_callback(pageData.temp_announcement);
    page.closeModal();
};

exports.closeCreateAnnouncementModalOnTap = function () {
    page.closeModal();
};
