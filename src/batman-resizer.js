'use strict';

var viewPortHeight = window.innerHeight;
var viewPortWidth = window.innerWidth;

export function BatmanResizer() {
    this.resizeAndPositionBackground = (elem) => {
        var bgSize = viewPortHeight + viewPortWidth;

        elem.style.width = bgSize + 'px';
        elem.style.height = bgSize + 'px';
        elem.style.left = '-' + (viewPortHeight / 2) + 'px';
        elem.style.top = '-' + (viewPortWidth / 2) + 'px';
    };

    this.resizeAndPositionLogo = (elem) => {
        var batsSize = 0;

        if (viewPortHeight < viewPortWidth) {
            batsSize = viewPortHeight;
        }
        else {
            batsSize = viewPortWidth;
        }

        elem.style.width = batsSize + 'px';
        elem.style.height = batsSize + 'px';
        elem.style.marginLeft = '-' + (batsSize / 2) + 'px';
        elem.style.marginTop = '-' + (batsSize / 2) + 'px';
    };
}