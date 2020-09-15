const ImageSize = require("image-size");
const fs = require("fs");

const maxLogoWidth = 512;
const maxLogoHeight =  512;
const minLogoWidth =  64;
const minLogoHeight =  64;
const maxLogoSizeKB =  100;

const getFileSizeInKB = (path) => fs.statSync(path).size / 1000;

const isValidSize = (path) => {
    const sizeInKB = getFileSizeInKB(path);
    return sizeInKB <= maxLogoSizeKB;
}

const getImageDimensions = (path) => ImageSize.imageSize(path);

const isValidDimension = (path) => {
    const { width, height } = getImageDimensions(path);
    
    return (width <= maxLogoWidth) && 
        (height <= maxLogoHeight) && 
        (width >= minLogoWidth) && 
        (height >= minLogoHeight);
}                           

module.exports = {
    isValidSize,
    isValidDimension
}