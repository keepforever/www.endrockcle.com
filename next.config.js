// next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withSass();

const withImages = require('next-images');
module.exports = withImages();

const withFonts = require('nextjs-fonts');
module.exports = withFonts();

const withVideos = require('next-videos')
module.exports = withVideos()
