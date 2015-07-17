'use strict';
import { BatmanResizer } from './batman-resizer.js';

export function BatmanTransition(selector, targetUrl) {
    let logoClass = 'batman-transition-logo';
    let spinClass = 'batman-transition-spin';
    let batmanResizer = new BatmanResizer();
    let linkEl = document.querySelectorAll(selector);

    Array.prototype.forEach.call(linkEl, function(element, i) {
        element.addEventListener('click', function() {
            let bodyEl = document.querySelector('body');

            let spinEl = document.createElement('div');
            spinEl.className = spinClass;
            batmanResizer.resizeAndPositionBackground(spinEl);
            bodyEl.appendChild(spinEl);

            let batsEl = document.createElement('div');
            batsEl.className = logoClass;
            bodyEl.appendChild(batsEl);
            batmanResizer.resizeAndPositionLogo(batsEl);
            bodyEl.className += ' batman-transition-no-scrollbars';

            setTimeout(function() {
                bodyEl.style.display = 'none';
                window.location.href = targetUrl
            }, 1500);

            return false;
        });
    });

    if (linkEl.length > 0) {
        window.addEventListener('resize', function() {
            let spinEl = document.querySelector(spinClass);
            let batsEl = document.querySelector(logoClass);

            if (spinEl && batsEl) {
                batmanResizer.resizeAndPositionBackground(spinEl);
                batmanResizer.resizeAndPositionLogo(batsEl);
            }
        });
    }

}

window.BatmanTransition = BatmanTransition;
