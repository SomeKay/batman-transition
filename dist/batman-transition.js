(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.BatmanResizer = BatmanResizer;
var viewPortHeight = window.innerHeight;
var viewPortWidth = window.innerWidth;

function BatmanResizer() {
    this.resizeAndPositionBackground = function (elem) {
        var bgSize = viewPortHeight + viewPortWidth;

        elem.style.width = bgSize + 'px';
        elem.style.height = bgSize + 'px';
        elem.style.left = '-' + viewPortHeight / 2 + 'px';
        elem.style.top = '-' + viewPortWidth / 2 + 'px';
    };

    this.resizeAndPositionLogo = function (elem) {
        var batsSize = 0;

        if (viewPortHeight < viewPortWidth) {
            batsSize = viewPortHeight;
        } else {
            batsSize = viewPortWidth;
        }

        elem.style.width = batsSize + 'px';
        elem.style.height = batsSize + 'px';
        elem.style.marginLeft = '-' + batsSize / 2 + 'px';
        elem.style.marginTop = '-' + batsSize / 2 + 'px';
    };
}

},{}],2:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.BatmanTransition = BatmanTransition;

var _batmanResizerJs = require('./batman-resizer.js');

function BatmanTransition(selector, targetUrl) {
    var logoClass = 'batman-transition-logo';
    var spinClass = 'batman-transition-spin';
    var batmanResizer = new _batmanResizerJs.BatmanResizer();
    var linkEl = document.querySelectorAll(selector);

    Array.prototype.forEach.call(linkEl, function (element, i) {
        element.addEventListener('click', function () {
            var bodyEl = document.querySelector('body');

            var spinEl = document.createElement('div');
            spinEl.className = spinClass;
            batmanResizer.resizeAndPositionBackground(spinEl);
            bodyEl.appendChild(spinEl);

            var batsEl = document.createElement('div');
            batsEl.className = logoClass;
            bodyEl.appendChild(batsEl);
            batmanResizer.resizeAndPositionLogo(batsEl);
            bodyEl.className += ' batman-transition-no-scrollbars';

            setTimeout(function () {
                bodyEl.style.display = 'none';
                window.location.href = targetUrl;
            }, 1500);

            return false;
        });
    });

    if (linkEl.length > 0) {
        window.addEventListener('resize', function () {
            var spinEl = document.querySelector(spinClass);
            var batsEl = document.querySelector(logoClass);

            if (spinEl && batsEl) {
                batmanResizer.resizeAndPositionBackground(spinEl);
                batmanResizer.resizeAndPositionLogo(batsEl);
            }
        });
    }
}

window.BatmanTransition = BatmanTransition;

},{"./batman-resizer.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYm9qemkvUHJvamVrdGUvUGVyc29uYWwvYmF0bWFuL3NyYy9iYXRtYW4tcmVzaXplci5qcyIsIi9Vc2Vycy9ib2p6aS9Qcm9qZWt0ZS9QZXJzb25hbC9iYXRtYW4vc3JjL2JhdG1hbi10cmFuc2l0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7OztRQUtHLGFBQWEsR0FBYixhQUFhO0FBSDdCLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDeEMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7QUFFL0IsU0FBUyxhQUFhLEdBQUc7QUFDNUIsUUFBSSxDQUFDLDJCQUEyQixHQUFHLFVBQUMsSUFBSSxFQUFLO0FBQ3pDLFlBQUksTUFBTSxHQUFHLGNBQWMsR0FBRyxhQUFhLENBQUM7O0FBRTVDLFlBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDakMsWUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNsQyxZQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUksY0FBYyxHQUFHLENBQUMsQUFBQyxHQUFHLElBQUksQ0FBQztBQUNwRCxZQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUksYUFBYSxHQUFHLENBQUMsQUFBQyxHQUFHLElBQUksQ0FBQztLQUNyRCxDQUFDOztBQUVGLFFBQUksQ0FBQyxxQkFBcUIsR0FBRyxVQUFDLElBQUksRUFBSztBQUNuQyxZQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7O0FBRWpCLFlBQUksY0FBYyxHQUFHLGFBQWEsRUFBRTtBQUNoQyxvQkFBUSxHQUFHLGNBQWMsQ0FBQztTQUM3QixNQUNJ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Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2aWV3UG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbnZhciB2aWV3UG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbmV4cG9ydCBmdW5jdGlvbiBCYXRtYW5SZXNpemVyKCkge1xuICAgIHRoaXMucmVzaXplQW5kUG9zaXRpb25CYWNrZ3JvdW5kID0gKGVsZW0pID0+IHtcbiAgICAgICAgdmFyIGJnU2l6ZSA9IHZpZXdQb3J0SGVpZ2h0ICsgdmlld1BvcnRXaWR0aDtcblxuICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gYmdTaXplICsgJ3B4JztcbiAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBiZ1NpemUgKyAncHgnO1xuICAgICAgICBlbGVtLnN0eWxlLmxlZnQgPSAnLScgKyAodmlld1BvcnRIZWlnaHQgLyAyKSArICdweCc7XG4gICAgICAgIGVsZW0uc3R5bGUudG9wID0gJy0nICsgKHZpZXdQb3J0V2lkdGggLyAyKSArICdweCc7XG4gICAgfTtcblxuICAgIHRoaXMucmVzaXplQW5kUG9zaXRpb25Mb2dvID0gKGVsZW0pID0+IHtcbiAgICAgICAgdmFyIGJhdHNTaXplID0gMDtcblxuICAgICAgICBpZiAodmlld1BvcnRIZWlnaHQgPCB2aWV3UG9ydFdpZHRoKSB7XG4gICAgICAgICAgICBiYXRzU2l6ZSA9IHZpZXdQb3J0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmF0c1NpemUgPSB2aWV3UG9ydFdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IGJhdHNTaXplICsgJ3B4JztcbiAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBiYXRzU2l6ZSArICdweCc7XG4gICAgICAgIGVsZW0uc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIChiYXRzU2l6ZSAvIDIpICsgJ3B4JztcbiAgICAgICAgZWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyAoYmF0c1NpemUgLyAyKSArICdweCc7XG4gICAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBCYXRtYW5SZXNpemVyIH0gZnJvbSAnLi9iYXRtYW4tcmVzaXplci5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBCYXRtYW5UcmFuc2l0aW9uKHNlbGVjdG9yLCB0YXJnZXRVcmwpIHtcbiAgICBsZXQgbG9nb0NsYXNzID0gJ2JhdG1hbi10cmFuc2l0aW9uLWxvZ28nO1xuICAgIGxldCBzcGluQ2xhc3MgPSAnYmF0bWFuLXRyYW5zaXRpb24tc3Bpbic7XG4gICAgbGV0IGJhdG1hblJlc2l6ZXIgPSBuZXcgQmF0bWFuUmVzaXplcigpO1xuICAgIGxldCBsaW5rRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGlua0VsLCBmdW5jdGlvbihlbGVtZW50LCBpKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICAgICAgICAgIGxldCBzcGluRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNwaW5FbC5jbGFzc05hbWUgPSBzcGluQ2xhc3M7XG4gICAgICAgICAgICBiYXRtYW5SZXNpemVyLnJlc2l6ZUFuZFBvc2l0aW9uQmFja2dyb3VuZChzcGluRWwpO1xuICAgICAgICAgICAgYm9keUVsLmFwcGVuZENoaWxkKHNwaW5FbCk7XG5cbiAgICAgICAgICAgIGxldCBiYXRzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhdHNFbC5jbGFzc05hbWUgPSBsb2dvQ2xhc3M7XG4gICAgICAgICAgICBib2R5RWwuYXBwZW5kQ2hpbGQoYmF0c0VsKTtcbiAgICAgICAgICAgIGJhdG1hblJlc2l6ZXIucmVzaXplQW5kUG9zaXRpb25Mb2dvKGJhdHNFbCk7XG4gICAgICAgICAgICBib2R5RWwuY2xhc3NOYW1lICs9ICcgYmF0bWFuLXRyYW5zaXRpb24tbm8tc2Nyb2xsYmFycyc7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYm9keUVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRVcmxcbiAgICAgICAgICAgIH0sIDE1MDApO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGxpbmtFbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBzcGluRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNwaW5DbGFzcyk7XG4gICAgICAgICAgICBsZXQgYmF0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihsb2dvQ2xhc3MpO1xuXG4gICAgICAgICAgICBpZiAoc3BpbkVsICYmIGJhdHNFbCkge1xuICAgICAgICAgICAgICAgIGJhdG1hblJlc2l6ZXIucmVzaXplQW5kUG9zaXRpb25CYWNrZ3JvdW5kKHNwaW5FbCk7XG4gICAgICAgICAgICAgICAgYmF0bWFuUmVzaXplci5yZXNpemVBbmRQb3NpdGlvbkxvZ28oYmF0c0VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbndpbmRvdy5CYXRtYW5UcmFuc2l0aW9uID0gQmF0bWFuVHJhbnNpdGlvbjtcbiJdfQ==
