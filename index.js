'use strict';
/* global hexo */
/** Requires */
var autotagTag = require('./lib/autotag.js')(hexo);

/** constants */
var TAG_NAME = 'autotag';

/** Init */
hexo.extend.tag.register(TAG_NAME, autotagTag(hexo.config[TAG_NAME] || {}));
