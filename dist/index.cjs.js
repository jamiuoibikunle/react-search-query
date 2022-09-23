'use strict';

var handleSearch = function handleSearch(search) {
  var arr = search.replace("?", "").split("&");
  var sorted = {};
  arr.forEach(function (e) {
    var arr = e.split("=");
    sorted[arr[0]] = arr[1];
  });
  return sorted;
};

var query = function query() {
  var search = window.location.search;

  if (search === "") {
    return {
      query: null
    };
  } else {
    var result = handleSearch(search);
    return result;
  }
};

var returnLibrary = function returnLibrary() {
  return {
    Query: query
  };
};

var index = returnLibrary();

module.exports = index;
