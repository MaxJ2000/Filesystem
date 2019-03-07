!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n={mutiCMD:/^(?<CMD>[\w\d\-\_\?]+)(?<params>(\ +(?<pre>[^\-\\\/\w\d\s\n\r]?)[^\"]*\k<pre>)*)?/,paraCMD:/\s*[-]+[A-Za-z]+/},i=function(){function t(t,e,r){void 0===r&&(r=""),this.type=t,this.name=e,this.content=r,this.child=[],this.getChild=function(){return null}}return t.prototype.getFather=function(){throw new Error("You have been in the root!")},t}(),o=new(function(){function t(){this.loadData()}return t.prototype.getInput=function(t){var e,r;e="0";try{(function(){if(r=n.mutiCMD.exec(t)){var i=r.groups;if(!i)throw new Error("Illegal Input!");switch(i.CMD){case"cd":e=this.cd(i.para);break;case"ls":e=this.ls(i.para);break;case"echo":e=this.echo(i.para);break;case"mdkir":e=this.mkdir(i.para);break;case"rm":e=this.rm(i.para);break;case"cp":e=this.cp(i.para);break;case"touch":e=this.touch(i.para);break;case"cat":e=this.cat(i.para);break;default:throw new Error("Illegal Input!")}}}).bind(this)()}catch(t){return t.toString()}return e},t.prototype.loadData=function(){var t=localStorage.getItem("filesystem");t||(this.rootDirObj=JSON.parse(t))},t.prototype.addDirFunc=function(){function t(t){for(var e=0,r=this.child;e<r.length;e++){var n=r[e];if(n.name===t)return n}throw new Error("File'"+t+"' not found!")}function e(t){return function(t){return function(){return t}}(t)}this.rootDirObj.getChild=t,this.rootDirObj.getFather=function(){throw new Error("You have been in the root!")},function r(n){for(var i=0,o=n.child;i<o.length;i++){var u=o[i];u.getChild=t,u.getFather=e(n),u.child.length&&r(u)}}(this.curDirObj)},t.prototype.parsePath=function(t){for(var e,r=0,n=t.split("/");r<n.length;r++){var i=n[r];switch(i){case"..":if(e){e=e.getFather();break}e=this.curDirObj.getFather();case".":if(e)break;e=this.curDirObj;break;default:if(e)e=e.getChild(i);else{if(this.rootDirObj.name!==i)throw new Error("Direction'"+i+"' not found!");e=this.rootDirObj}}}return e},t.prototype.ls=function(t){var e=[],r=!1;t.match(/-a/)&&(r=!0);for(var n=0,i=this.curDirObj.child;n<i.length;n++){var o=i[n];!0===r?e.push(o.name):"."!=o.name[0]&&e.push(o.name)}return e.join("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")},t.prototype.echo=function(t){return t},t.prototype.mkdir=function(t){for(var e,r=t.split("/"),n=r.pop(),o=0,u=(e=0===r.length?this.curDirObj:this.parsePath(r.join("/"))).child;o<u.length;o++){if(u[o].name===n)throw new Error(n+" have been existed!")}return e.child.push(new i("dir",n)),"0"},t.prototype.touch=function(t){for(var e,r=t.split("/"),n=r.pop(),o=0,u=(e=0===r.length?this.curDirObj:this.parsePath(r.join("/"))).child;o<u.length;o++){if(u[o].name===n)throw new Error(n+" have been existed!")}return e.child.push(new i("file",n)),"0"},t.prototype.cd=function(t){return this.curDirObj=this.parsePath(t),"0"},t.prototype.cp=function(t){return"0"},t.prototype.rm=function(t){return"0"},t.prototype.cat=function(t){return"0"},t}());new(function(){function t(t){this.rootDiv=t,this.stdout=this.rootDiv.querySelector(".stdout"),this.stdin=this.rootDiv.querySelector(".stdin"),this.inputElement=this.stdin.querySelector(".stdinInput"),this.inputText="",this.displayString=""}return t.prototype.getEnter=function(){this.inputText=this.inputElement.value,console.log(this.inputText),this.inputElement.value="",this.displayString=o.getInput(this.inputText),this.addStdin},t.prototype.addStdin=function(){"0"===this.inputText?this.inputText="":this.inputText="<div>"+this.inputText+"</div><br/>",this.stdout.innerHTML=this.stdout.innerHTML+"\n    <div>[root@MaxJ ~]  "+this.inputText+"</div>\n    "+this.displayString},t.prototype.addListener=function(){var t=this;this.inputElement.addEventListener("keydown",function(e){"Enter"===e.key&&t.getEnter()})},t.prototype.initial=function(){this.addListener()},t}())(document.querySelector(".root")).initial()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbGVzeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlcm1pbmFsLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIlJFRyIsIm11dGlDTUQiLCJwYXJhQ01EIiwiRGF0YSIsInR5cGUiLCJjb250ZW50IiwidGhpcyIsImNoaWxkIiwiZ2V0Q2hpbGQiLCJnZXRGYXRoZXIiLCJFcnJvciIsInRlcm1pbmFsX2ZpbGVzeXN0ZW0iLCJGaWxlc3lzdGVtIiwibG9hZERhdGEiLCJnZXRJbnB1dCIsImlucHV0VGV4dCIsImRpc3BsYXlTdHJpbmciLCJleGVjUmVzdWx0IiwiZXhlYyIsImdyb3VwcyIsIkNNRCIsImNkIiwicGFyYSIsImxzIiwiZWNobyIsIm1rZGlyIiwicm0iLCJjcCIsInRvdWNoIiwiY2F0Iiwic3dpdGNoQ2FzZSIsImRpc3BsYXlFcnJvciIsInRvU3RyaW5nIiwiZGF0YVN0cmluZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb290RGlyT2JqIiwiSlNPTiIsInBhcnNlIiwiYWRkRGlyRnVuYyIsIl9pIiwiX2EiLCJsZW5ndGgiLCJzZXRGYXRoZXIiLCJmYXRoZXIiLCJyZWN1cnNpdmVBZGRGdW5jIiwibm93RGlyIiwiZGlyIiwiY3VyRGlyT2JqIiwicGFyc2VQYXRoIiwicGF0aFN0cmluZyIsInBhcnNlUmVzdWx0IiwicGF0aEFycmF5XzEiLCJzcGxpdCIsInBhdGgiLCJuYW1lQXJyYXkiLCJkaXNwbGF5SGlkZGVuIiwibWF0Y2giLCJjaGlsZE9iaiIsInB1c2giLCJqb2luIiwib3BlcmF0ZURpck9iaiIsInBhdGhBcnJheSIsInBvcCIsIlRlcm1pbmFsIiwicm9vdERpdiIsInN0ZG91dCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGRpbiIsImlucHV0RWxlbWVudCIsImdldEVudGVyIiwiY29uc29sZSIsImxvZyIsImFkZFN0ZGluIiwiaW5uZXJIVE1MIiwiYWRkTGlzdGVuZXIiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaW5pdGlhbCIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFp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LEtBQUtTLFVBQVMsZUFDbENULEtBQUtVLGVBRVRnRCxFQUFBcEUsVUFBQStFLFlBQUEsZUFBQUMsRUFBQXRFLEtBQ0VBLEtBQUsrRCxhQUFhUSxpQkFBaUIsVUFBVyxTQUFDQyxHQUMvQixVQUFWQSxFQUFFdkYsS0FDSnFGLEVBQUtOLGNBSVhOLEVBQUFwRSxVQUFBbUYsUUFBQSxXQUNFekUsS0FBS3FFLGVBRVRYLEVBMUNBLEdDRGUsQ0FBc0JnQixTQUFTYixjQUFjLFVBQ25EWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbnRlcmZhY2UgSURhdGEge1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGNoaWxkOiBJRGF0YVtdO1xyXG59XHJcbmludGVyZmFjZSBJUkVHIHtcclxuICBtdXRpQ01EOiBSZWdFeHA7XHJcbiAgcGFyYUNNRDogUmVnRXhwO1xyXG59XHJcbmxldCBSRUc6IElSRUcgPSB7XHJcbiAgbXV0aUNNRDogL14oPzxDTUQ+W1xcd1xcZFxcLVxcX1xcP10rKSg/PHBhcmFtcz4oXFwgKyg/PHByZT5bXlxcLVxcXFxcXC9cXHdcXGRcXHNcXG5cXHJdPylbXlxcXCJdKlxcazxwcmU+KSopPy8sXHJcbiAgcGFyYUNNRDogL1xccypbLV0rW0EtWmEtel0rLyxcclxufVxyXG5jbGFzcyBEYXRhIGltcGxlbWVudHMgSURhdGEge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNoaWxkOiBEYXRhW107XHJcbiAgZ2V0Q2hpbGQ6IChuYW1lOiBzdHJpbmcpID0+IERhdGE7XHJcbiAgZ2V0RmF0aGVyKCk6IERhdGEge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSBiZWVuIGluIHRoZSByb290IScpO1xyXG4gIH07XHJcbiAgY29uc3RydWN0b3IodHlwZTogJ2ZpbGUnIHwgJ2RpcicsIG5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nID0gJycpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRoaXMuY2hpbGQgPSBbXTtcclxuICAgIHRoaXMuZ2V0Q2hpbGQgPSAoKSA9PiB7IHJldHVybiBudWxsIH07XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVzeXN0ZW0ge1xyXG4gIHJvb3REaXJPYmo6IERhdGE7XHJcbiAgY3VyRGlyT2JqOiBEYXRhO1xyXG4gIGN1ckRpcjogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0SW5wdXQoaW5wdXRUZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IGRpc3BsYXlTdHJpbmc6IHN0cmluZztcclxuICAgIGRpc3BsYXlTdHJpbmcgPSAnMCc7XHJcbiAgICBsZXQgZXhlY1Jlc3VsdDogUmVnRXhwRXhlY0FycmF5O1xyXG4gICAgZnVuY3Rpb24gc3dpdGNoQ2FzZSh0aGlzOiBGaWxlc3lzdGVtKTogdm9pZCB7XHJcbiAgICAgIGlmIChleGVjUmVzdWx0ID0gUkVHLm11dGlDTUQuZXhlYyhpbnB1dFRleHQpKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwcyA9IGV4ZWNSZXN1bHQuZ3JvdXBzO1xyXG4gICAgICAgIGlmIChncm91cHMpIHtcclxuICAgICAgICAgIHN3aXRjaCAoZ3JvdXBzLkNNRCkge1xyXG4gICAgICAgICAgICBjYXNlICdjZCc6IGRpc3BsYXlTdHJpbmcgPSB0aGlzLmNkKGdyb3Vwcy5wYXJhKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xzJzogZGlzcGxheVN0cmluZyA9IHRoaXMubHMoZ3JvdXBzLnBhcmEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZWNobyc6IGRpc3BsYXlTdHJpbmcgPSB0aGlzLmVjaG8oZ3JvdXBzLnBhcmEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWRraXInOiBkaXNwbGF5U3RyaW5nID0gdGhpcy5ta2Rpcihncm91cHMucGFyYSk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdybSc6IGRpc3BsYXlTdHJpbmcgPSB0aGlzLnJtKGdyb3Vwcy5wYXJhKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NwJzogZGlzcGxheVN0cmluZyA9IHRoaXMuY3AoZ3JvdXBzLnBhcmEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndG91Y2gnOiBkaXNwbGF5U3RyaW5nID0gdGhpcy50b3VjaChncm91cHMucGFyYSk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjYXQnOiBkaXNwbGF5U3RyaW5nID0gdGhpcy5jYXQoZ3JvdXBzLnBhcmEpOyBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgSW5wdXQhJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBJbnB1dCEnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHN3aXRjaENhc2UuYmluZCh0aGlzKSgpO1xyXG4gICAgfSBjYXRjaCAoZGlzcGxheUVycm9yKSB7XHJcbiAgICAgIHJldHVybiBkaXNwbGF5RXJyb3IudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwbGF5U3RyaW5nO1xyXG4gIH1cclxuICBwdWJsaWMgbG9hZERhdGEoKTogdm9pZCB7XHJcbiAgICBsZXQgZGF0YVN0cmluZzogc3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbGVzeXN0ZW0nKTtcclxuICAgIGlmICghZGF0YVN0cmluZykge1xyXG4gICAgICB0aGlzLnJvb3REaXJPYmogPSBKU09OLnBhcnNlKGRhdGFTdHJpbmcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGREaXJGdW5jKCk6IHZvaWQge1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2hpbGQodGhpczogRGF0YSwgbmFtZTogc3RyaW5nKTogRGF0YSB7XHJcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZpbGUnJHtuYW1lfScgbm90IGZvdW5kIWApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0RmF0aGVyKGZhdGhlcjogRGF0YSk6ICgpID0+IERhdGEge1xyXG4gICAgICBmdW5jdGlvbiBnZXRGYXRoZXIoZmF0aGVyOiBEYXRhKTogKCkgPT4gRGF0YSB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBmYXRoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBnZXRGYXRoZXIoZmF0aGVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUFkZEZ1bmMobm93RGlyOiBEYXRhKSB7XHJcbiAgICAgIGZvciAobGV0IGRpciBvZiBub3dEaXIuY2hpbGQpIHtcclxuICAgICAgICBkaXIuZ2V0Q2hpbGQgPSBnZXRDaGlsZDtcclxuICAgICAgICBkaXIuZ2V0RmF0aGVyID0gc2V0RmF0aGVyKG5vd0Rpcik7XHJcbiAgICAgICAgaWYgKGRpci5jaGlsZC5sZW5ndGgpIHtcclxuICAgICAgICAgIHJlY3Vyc2l2ZUFkZEZ1bmMoZGlyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucm9vdERpck9iai5nZXRDaGlsZCA9IGdldENoaWxkO1xyXG4gICAgdGhpcy5yb290RGlyT2JqLmdldEZhdGhlciA9ICgpID0+IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSBiZWVuIGluIHRoZSByb290IScpO1xyXG4gICAgfVxyXG4gICAgcmVjdXJzaXZlQWRkRnVuYyh0aGlzLmN1ckRpck9iaik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHBhcnNlUGF0aChwYXRoU3RyaW5nOiBzdHJpbmcpOiBEYXRhIHtcclxuICAgIGxldCBwYXJzZVJlc3VsdDogRGF0YTtcclxuICAgIGxldCBwYXRoQXJyYXk6IHN0cmluZ1tdID0gcGF0aFN0cmluZy5zcGxpdCgnLycpO1xyXG4gICAgZm9yIChsZXQgcGF0aCBvZiBwYXRoQXJyYXkpIHtcclxuICAgICAgc3dpdGNoIChwYXRoKSB7XHJcbiAgICAgICAgY2FzZSAnLi4nOiBpZiAocGFyc2VSZXN1bHQpIHtcclxuICAgICAgICAgIHBhcnNlUmVzdWx0ID0gcGFyc2VSZXN1bHQuZ2V0RmF0aGVyKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFyc2VSZXN1bHQgPSB0aGlzLmN1ckRpck9iai5nZXRGYXRoZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnLic6IGlmIChwYXJzZVJlc3VsdCkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBhcnNlUmVzdWx0ID0gdGhpcy5jdXJEaXJPYmo7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDogaWYgKHBhcnNlUmVzdWx0KSB7XHJcbiAgICAgICAgICBwYXJzZVJlc3VsdCA9IHBhcnNlUmVzdWx0LmdldENoaWxkKHBhdGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5yb290RGlyT2JqLm5hbWUgPT09IHBhdGgpIHtcclxuICAgICAgICAgICAgcGFyc2VSZXN1bHQgPSB0aGlzLnJvb3REaXJPYmo7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpcmVjdGlvbicke3BhdGh9JyBub3QgZm91bmQhYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPERhdGE+cGFyc2VSZXN1bHQ7XHJcbiAgfVxyXG4gIGxzKHBhcmE6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmV0dXJuU3RyaW5nOiBzdHJpbmc7XHJcbiAgICBsZXQgbmFtZUFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgbGV0IGRpc3BsYXlIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlmIChwYXJhLm1hdGNoKC8tYS8pKSB7XHJcbiAgICAgIGRpc3BsYXlIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgY2hpbGRPYmogb2YgdGhpcy5jdXJEaXJPYmouY2hpbGQpIHtcclxuICAgICAgaWYgKGRpc3BsYXlIaWRkZW4gPT09IHRydWUpIHtcclxuICAgICAgICBuYW1lQXJyYXkucHVzaChjaGlsZE9iai5uYW1lKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjaGlsZE9iai5uYW1lWzBdICE9ICcuJykge1xyXG4gICAgICAgICAgbmFtZUFycmF5LnB1c2goY2hpbGRPYmoubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm5TdHJpbmcgPSBuYW1lQXJyYXkuam9pbignJm5ic3AmbmJzcCZuYnNwJm5ic3AmbmJzcCZuYnNwJm5ic3AnKTtcclxuICAgIHJldHVybiByZXR1cm5TdHJpbmc7XHJcbiAgfVxyXG4gIGVjaG8ocGFyYTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXR1cm5TdHJpbmc6IHN0cmluZztcclxuICAgIHJldHVyblN0cmluZyA9IHBhcmE7XHJcbiAgICByZXR1cm4gcmV0dXJuU3RyaW5nO1xyXG4gIH1cclxuICBta2RpcihwYXJhOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHBhdGhBcnJheTogc3RyaW5nW10gPSBwYXJhLnNwbGl0KCcvJyk7XHJcbiAgICBsZXQgb3BlcmF0ZURpck9iajogRGF0YTtcclxuICAgIGxldCBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBwYXRoQXJyYXkucG9wKCk7XHJcbiAgICBpZiAocGF0aEFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBvcGVyYXRlRGlyT2JqID0gdGhpcy5jdXJEaXJPYmo7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVyYXRlRGlyT2JqID0gdGhpcy5wYXJzZVBhdGgocGF0aEFycmF5LmpvaW4oJy8nKSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBvcGVyYXRlRGlyT2JqLmNoaWxkKSB7XHJcbiAgICAgIGlmIChjaGlsZC5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke25hbWV9IGhhdmUgYmVlbiBleGlzdGVkIWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVyYXRlRGlyT2JqLmNoaWxkLnB1c2gobmV3IERhdGEoJ2RpcicsIG5hbWUpKTtcclxuICAgIHJldHVybiAnMCc7XHJcbiAgfVxyXG4gIHRvdWNoKHBhcmE6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgcGF0aEFycmF5OiBzdHJpbmdbXSA9IHBhcmEuc3BsaXQoJy8nKTtcclxuICAgIGxldCBvcGVyYXRlRGlyT2JqOiBEYXRhO1xyXG4gICAgbGV0IG5hbWU6IHN0cmluZyA9IDxzdHJpbmc+cGF0aEFycmF5LnBvcCgpO1xyXG4gICAgaWYgKHBhdGhBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgb3BlcmF0ZURpck9iaiA9IHRoaXMuY3VyRGlyT2JqO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3BlcmF0ZURpck9iaiA9IHRoaXMucGFyc2VQYXRoKHBhdGhBcnJheS5qb2luKCcvJykpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgY2hpbGQgb2Ygb3BlcmF0ZURpck9iai5jaGlsZCkge1xyXG4gICAgICBpZiAoY2hpbGQubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtuYW1lfSBoYXZlIGJlZW4gZXhpc3RlZCFgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BlcmF0ZURpck9iai5jaGlsZC5wdXNoKG5ldyBEYXRhKCdmaWxlJywgbmFtZSkpO1xyXG4gICAgcmV0dXJuICcwJztcclxuICB9XHJcbiAgY2QocGF0aFN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHRoaXMuY3VyRGlyT2JqID0gdGhpcy5wYXJzZVBhdGgocGF0aFN0cmluZyk7XHJcbiAgICByZXR1cm4gJzAnO1xyXG4gIH1cclxuICBjcChwYXRoU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJldHVyblN0cmluZzogc3RyaW5nO1xyXG4gICAgcmV0dXJuICcwJztcclxuICB9XHJcbiAgcm0ocGF0aFN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXR1cm5TdHJpbmc6IHN0cmluZztcclxuICAgIHJldHVybiAnMCc7XHJcbiAgfVxyXG4gIGNhdChwYXRoU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJldHVyblN0cmluZzogc3RyaW5nO1xyXG4gICAgcmV0dXJuICcwJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEZpbGVzeXN0ZW0gZnJvbSAnLi9maWxlc3lzdGVtJztcclxuY29uc3QgZmlsZXN5c3RlbSA9IG5ldyBGaWxlc3lzdGVtKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsIHtcclxuICByb290RGl2OiBFbGVtZW50O1xyXG4gIHN0ZG91dDogRWxlbWVudDtcclxuICBzdGRpbjogRWxlbWVudDtcclxuICBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgaW5wdXRUZXh0OiBzdHJpbmc7XHJcbiAgZGlzcGxheVN0cmluZzogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHJvb3REaXY6IEVsZW1lbnQpIHtcclxuICAgIHRoaXMucm9vdERpdiA9IHJvb3REaXY7XHJcbiAgICB0aGlzLnN0ZG91dCA9IDxFbGVtZW50PnRoaXMucm9vdERpdi5xdWVyeVNlbGVjdG9yKCcuc3Rkb3V0Jyk7XHJcbiAgICB0aGlzLnN0ZGluID0gPEVsZW1lbnQ+dGhpcy5yb290RGl2LnF1ZXJ5U2VsZWN0b3IoJy5zdGRpbicpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnN0ZGluLnF1ZXJ5U2VsZWN0b3IoJy5zdGRpbklucHV0Jyk7XHJcbiAgICB0aGlzLmlucHV0VGV4dD0nJztcclxuICAgIHRoaXMuZGlzcGxheVN0cmluZz0nJztcclxuICB9XHJcbiAgZ2V0RW50ZXIoKTp2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRUZXh0ID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0VGV4dCk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gZmlsZXN5c3RlbS5nZXRJbnB1dCh0aGlzLmlucHV0VGV4dCk7XHJcbiAgICB0aGlzLmFkZFN0ZGluO1xyXG4gIH1cclxuICBhZGRTdGRpbigpOnZvaWQge1xyXG4gICAgaWYodGhpcy5pbnB1dFRleHQ9PT0nMCcpe1xyXG4gICAgICB0aGlzLmlucHV0VGV4dD0nJztcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLmlucHV0VGV4dD1gPGRpdj4ke3RoaXMuaW5wdXRUZXh0fTwvZGl2Pjxici8+YDtcclxuICAgIH1cclxuICAgIHRoaXMuc3Rkb3V0LmlubmVySFRNTCA9IGAke3RoaXMuc3Rkb3V0LmlubmVySFRNTH1cclxuICAgIDxkaXY+W3Jvb3RATWF4SiB+XSAgJHt0aGlzLmlucHV0VGV4dH08L2Rpdj5cclxuICAgICR7dGhpcy5kaXNwbGF5U3RyaW5nfWA7XHJcbiAgfVxyXG4gIGFkZExpc3RlbmVyKCk6dm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbnRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBpbml0aWFsKCk6dm9pZHtcclxuICAgIHRoaXMuYWRkTGlzdGVuZXIoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFRlcm1pbmFsIGZyb20gJy4vdGVybWluYWwnO1xyXG5jb25zdCB0ZXJtaW5hbD1uZXcgVGVybWluYWwoPEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKSk7XHJcbnRlcm1pbmFsLmluaXRpYWwoKTsgIl0sInNvdXJjZVJvb3QiOiIifQ==