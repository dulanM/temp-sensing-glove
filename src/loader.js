// src/loader.js

'use strict';

// This loader is for static sites. It simply returns the image source path
// without any server-side processing. It's the simplest way to get the
// Next.js Image component to work with `output: 'export'`.
module.exports = function myLoader({ src, width, quality }) {
  return src;
};