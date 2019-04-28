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
        element.addEventListener('click', function (event) {
            event.preventDefault();

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYm9qemkvUHJvamVrdGUvUGVyc29uYWwvYmF0bWFuLXRyYW5zaXRpb24vc3JjL2JhdG1hbi1yZXNpemVyLmpzIiwiL1VzZXJzL2JvanppL1Byb2pla3RlL1BlcnNvbmFsL2JhdG1hbi10cmFuc2l0aW9uL3NyYy9iYXRtYW4tdHJhbnNpdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7Ozs7UUFLRyxhQUFhLEdBQWIsYUFBYTtBQUg3QixJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3hDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7O0FBRS9CLFNBQVMsYUFBYSxHQUFHO0FBQzVCLFFBQUksQ0FBQywyQkFBMkIsR0FBRyxVQUFDLElBQUksRUFBSztBQUN6QyxZQUFJLE1BQU0sR0FBRyxjQUFjLEdBQUcsYUFBYSxDQUFDOztBQUU1QyxZQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbEMsWUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFJLGNBQWMsR0FBRyxDQUFDLEFBQUMsR0FBRyxJQUFJLENBQUM7QUFDcEQsWUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFJLGFBQWEsR0FBRyxDQUFDLEFBQUMsR0FBRyxJQUFJLENBQUM7S0FDckQsQ0FBQzs7QUFFRixRQUFJLENBQUMscUJBQXFCLEdBQUcsVUFBQyxJQUFJLEVBQUs7QUFDbkMsWUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDOztBQUVqQixZQUFJLGNBQWMsR0FBRyxhQUFhLEVBQUU7QUFDaEMsb0JBQVEsR0FB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Q0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2aWV3UG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbnZhciB2aWV3UG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbmV4cG9ydCBmdW5jdGlvbiBCYXRtYW5SZXNpemVyKCkge1xuICAgIHRoaXMucmVzaXplQW5kUG9zaXRpb25CYWNrZ3JvdW5kID0gKGVsZW0pID0+IHtcbiAgICAgICAgdmFyIGJnU2l6ZSA9IHZpZXdQb3J0SGVpZ2h0ICsgdmlld1BvcnRXaWR0aDtcblxuICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gYmdTaXplICsgJ3B4JztcbiAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBiZ1NpemUgKyAncHgnO1xuICAgICAgICBlbGVtLnN0eWxlLmxlZnQgPSAnLScgKyAodmlld1BvcnRIZWlnaHQgLyAyKSArICdweCc7XG4gICAgICAgIGVsZW0uc3R5bGUudG9wID0gJy0nICsgKHZpZXdQb3J0V2lkdGggLyAyKSArICdweCc7XG4gICAgfTtcblxuICAgIHRoaXMucmVzaXplQW5kUG9zaXRpb25Mb2dvID0gKGVsZW0pID0+IHtcbiAgICAgICAgdmFyIGJhdHNTaXplID0gMDtcblxuICAgICAgICBpZiAodmlld1BvcnRIZWlnaHQgPCB2aWV3UG9ydFdpZHRoKSB7XG4gICAgICAgICAgICBiYXRzU2l6ZSA9IHZpZXdQb3J0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmF0c1NpemUgPSB2aWV3UG9ydFdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IGJhdHNTaXplICsgJ3B4JztcbiAgICAgICAgZWxlbS5zdHlsZS5oZWlnaHQgPSBiYXRzU2l6ZSArICdweCc7XG4gICAgICAgIGVsZW0uc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIChiYXRzU2l6ZSAvIDIpICsgJ3B4JztcbiAgICAgICAgZWxlbS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyAoYmF0c1NpemUgLyAyKSArICdweCc7XG4gICAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBCYXRtYW5SZXNpemVyIH0gZnJvbSAnLi9iYXRtYW4tcmVzaXplci5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBCYXRtYW5UcmFuc2l0aW9uKHNlbGVjdG9yLCB0YXJnZXRVcmwpIHtcbiAgICBsZXQgbG9nb0NsYXNzID0gJ2JhdG1hbi10cmFuc2l0aW9uLWxvZ28nO1xuICAgIGxldCBzcGluQ2xhc3MgPSAnYmF0bWFuLXRyYW5zaXRpb24tc3Bpbic7XG4gICAgbGV0IGJhdG1hblJlc2l6ZXIgPSBuZXcgQmF0bWFuUmVzaXplcigpO1xuICAgIGxldCBsaW5rRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGlua0VsLCBmdW5jdGlvbihlbGVtZW50LCBpKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0IGJvZHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgICAgICAgICAgbGV0IHNwaW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3BpbkVsLmNsYXNzTmFtZSA9IHNwaW5DbGFzcztcbiAgICAgICAgICAgIGJhdG1hblJlc2l6ZXIucmVzaXplQW5kUG9zaXRpb25CYWNrZ3JvdW5kKHNwaW5FbCk7XG4gICAgICAgICAgICBib2R5RWwuYXBwZW5kQ2hpbGQoc3BpbkVsKTtcblxuICAgICAgICAgICAgbGV0IGJhdHNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmF0c0VsLmNsYXNzTmFtZSA9IGxvZ29DbGFzcztcbiAgICAgICAgICAgIGJvZHlFbC5hcHBlbmRDaGlsZChiYXRzRWwpO1xuICAgICAgICAgICAgYmF0bWFuUmVzaXplci5yZXNpemVBbmRQb3NpdGlvbkxvZ28oYmF0c0VsKTtcbiAgICAgICAgICAgIGJvZHlFbC5jbGFzc05hbWUgKz0gJyBiYXRtYW4tdHJhbnNpdGlvbi1uby1zY3JvbGxiYXJzJztcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBib2R5RWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldFVybFxuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGxpbmtFbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBzcGluRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNwaW5DbGFzcyk7XG4gICAgICAgICAgICBsZXQgYmF0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihsb2dvQ2xhc3MpO1xuXG4gICAgICAgICAgICBpZiAoc3BpbkVsICYmIGJhdHNFbCkge1xuICAgICAgICAgICAgICAgIGJhdG1hblJlc2l6ZXIucmVzaXplQW5kUG9zaXRpb25CYWNrZ3JvdW5kKHNwaW5FbCk7XG4gICAgICAgICAgICAgICAgYmF0bWFuUmVzaXplci5yZXNpemVBbmRQb3NpdGlvbkxvZ28oYmF0c0VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbndpbmRvdy5CYXRtYW5UcmFuc2l0aW9uID0gQmF0bWFuVHJhbnNpdGlvbjtcbiJdfQ==
