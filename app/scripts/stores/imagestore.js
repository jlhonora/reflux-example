var Reflux = require('reflux');
var $ = require('jquery');
var ImageActions = require('../actions/imageactions');

var ImageStore = Reflux.createStore({
  listenables: [ImageActions],
  imagelist: [],
  sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
  tag: null,
  init: function() {
    this.fetchList();
  },
  fetchList: function() {
    $.ajax({
      url: this.getSourceUrl(),
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      cache: false,
      context: this,
      success: function(data) {
        console.log('fetch complete');
        this.imagelist = data.items;
        this.trigger(this.imagelist);
      },
      error: function(data) {
        console.log('fetch error!');
      }
    });
  },
  getSourceUrl: function() {
    var url = this.sourceUrl;
    if (this.tag) {
      url += '&tags=' + this.tag;
    }
    return url;
  },
  selectTag: function(tag) {
    console.log('selected tag ' + tag);
    this.tag = tag;
    this.fetchList();
  }
});

module.exports = ImageStore;
