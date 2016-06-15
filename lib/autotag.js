'use strict';
/** Requires */
var _ = require('lodash');

module.exports = function (hexo) {
  return function (opts) {
    return function autotag(args) {
      var config = _.merge({
      }, opts);

      var res = '';
      var tagname = args[0];

      var tags = hexo.locals.get('tags').toArray();

      var findedTag = _.find(tags, function (tag) {
        return tag.name.toLowerCase() === tagname.toLowerCase();
      });

      if (findedTag) {
        res += '<a ';
        res += [
          'href="' + _.escape('/' + findedTag.path) + '"',
          'title="' + _.escape(findedTag.name) + '"'
        ].join(' ');
        res += '>';
        res += tagname;
        res += '</a>';
      } else {
        res = tagname;
      }

      return res;
    }
  };
};