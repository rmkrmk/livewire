var path = require('path');
var messenger = require(path.resolve(__dirname, '../messenger'));
var shell = require('shell');
var config = require(path.resolve(__dirname, '../config')).get();
var dialogs = require('../dialogs');
const packageJsonReader = require(path.resolve(__dirname, '../config/packageJsonReader.js'));

var handlers = {
  issues: function () {
    shell.openExternal(config.urls.repository + '/issues');
  },
  about: function () {

    var version = null;
    const fs = require('fs');

    var showAboutDialog = (version) => {
      dialogs.messageBox({
        title: 'About',
        message: `Livewire


Version:   ${version}
GitHub:    http://github.com/infragistics/livewire`
      });
    };

    if(!version) {
      packageJsonReader.get().then((config) => {
        version = config.version;
        showAboutDialog(version);
      });
    } else {
      showAboutDialog(version)
    }
  }
};

messenger.subscribe.menu('issues', handlers.issues);
messenger.subscribe.menu('about', handlers.about);