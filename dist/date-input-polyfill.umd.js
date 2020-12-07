!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).dateInputPolyfill={})}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('.date-input-polyfill-reset, date-input-polyfill, date-input-polyfill select, date-input-polyfill table, date-input-polyfill th, date-input-polyfill td {\n  background: #fff;\n  color: #000;\n  text-shadow: none;\n  border: 0;\n  padding: 0;\n  height: auto;\n  width: auto;\n  line-height: normal;\n  font-family: sans-serif;\n  font-size: 14px;\n}\n\ndate-input-polyfill {\n  position: absolute !important;\n  text-align: center;\n  box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.22);\n  cursor: default;\n  z-index: 1;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  overflow: hidden;\n  display: block\n}\n\ndate-input-polyfill[data-open="false"] {\n    visibility: hidden;\n    z-index: -100 !important;\n    top: 0;\n  }\n\ndate-input-polyfill[data-open="true"] {\n    visibility: visible;\n  }\n\ndate-input-polyfill select, date-input-polyfill table, date-input-polyfill th, date-input-polyfill td {\n\n    box-shadow: none;\n    font-family: \'Lato\', Helvetica, Arial, sans-serif;\n  }\n\ndate-input-polyfill select, date-input-polyfill button {\n    border: 0;\n    border-radius: 0;\n    border-bottom: 1px solid #DADFE1;\n    height: 24px;\n    vertical-align: top;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n  }\n\ndate-input-polyfill .monthSelect-wrapper {\n    width: 55%;\n    display: inline-block;\n  }\n\ndate-input-polyfill .yearSelect-wrapper {\n    width: 25%;\n    display: inline-block;\n  }\n\ndate-input-polyfill select {\n    width: 100%\n  }\n\ndate-input-polyfill select:first-of-type {\n      border-right: 1px solid #DADFE1;\n      border-radius: 5px 0 0 0;\n      -moz-border-radius: 5px 0 0 0;\n      -webkit-border-radius: 5px 0 0 0;\n    }\n\ndate-input-polyfill button {\n    width: 20%;\n    background: #DADFE1;\n    border-radius: 0 5px 0 0;\n    -moz-border-radius: 0 5px 0 0;\n    -webkit-border-radius: 0 5px 0 0\n  }\n\ndate-input-polyfill button:hover {\n      background: #eee;\n    }\n\ndate-input-polyfill table {\n    border-collapse: separate !important;\n    border-radius: 0 0 5px 5px;\n    -moz-border-radius: 0 0 5px 5px;\n    -webkit-border-radius: 0 0 5px 5px;\n    overflow: hidden;\n    max-width: 280px;\n    width: 280px;\n  }\n\ndate-input-polyfill th, date-input-polyfill td {\n    width: 32px;\n    padding: 4px;\n    text-align: center;\n    box-sizing: content-box;\n  }\n\ndate-input-polyfill td[data-day] {\n    cursor: pointer\n  }\n\ndate-input-polyfill td[data-day]:hover {\n      background: #DADFE1;\n    }\n\ndate-input-polyfill [data-selected] {\n    font-weight: bold;\n    background: #D8EAF6;\n  }\n');var o={"en_en-US_en-UK":{days:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]},"zh_zh-CN":{days:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},"zh-Hans_zh-Hans-CN":{days:["周日","周一","周二","周三","周四","周五","周六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},"zh-Hant_zh-Hant-TW":{days:["週日","週一","週二","週三","週四","週五","週六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},"de_de-DE":{days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],today:"Heute",format:"DD.MM.YYYY"},"nl_nl-NL_nl-BE":{days:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],months:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],today:"Vandaag",format:"D/M/Y"},"pt_pt-BR":{days:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],today:"Hoje"},"fr_fr-FR_fr-BE":{days:["Di","Lu","Ma","Me","Je","Ve","Sa"],months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],today:"Aujourd'hui",format:"D/M/Y"},"es_es-VE":{days:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],today:"Hoy",format:"D/M/Y"},"da_da-dk":{days:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],months:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],today:"I dag",format:"dd/MM-YYYY"},"ru_ru-RU_ru-UA_ru-KZ_ru-MD":{days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],today:"Сегодня",format:"D.M.Y"},"uk_uk-UA":{days:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],today:"Cьогодні",format:"D.M.Y"},"sv_sv-SE":{days:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],today:"Idag",format:"YYYY-MM-dd"},"test_test-TEST":{days:["Foo","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Foo","February","March","April","May","June","July","August","September","October","November","December"]},ja:{days:["日","月","火","水","木","金","土"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今日",format:"YYYY-MM-dd"}};var r,s=function(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}((function(e,n){!function(n){var a,i,o,r=(a=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,o=/[^-+\dA-Z]/g,function(e,t,n,c){if(1!==arguments.length||"string"!==u(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var m=(t=String(r.masks[t]||t||r.masks.default)).slice(0,4);"UTC:"!==m&&"GMT:"!==m||(t=t.slice(4),n=!0,"GMT:"===m&&(c=!0));var p=n?"getUTC":"get",h=e[p+"Date"](),y=e[p+"Day"](),f=e[p+"Month"](),b=e[p+"FullYear"](),g=e[p+"Hours"](),v=e[p+"Minutes"](),D=e[p+"Seconds"](),M=e[p+"Milliseconds"](),T=n?0:e.getTimezoneOffset(),A=d(e),x=l(e),w={d:h,dd:s(h),ddd:r.i18n.dayNames[y],dddd:r.i18n.dayNames[y+7],m:f+1,mm:s(f+1),mmm:r.i18n.monthNames[f],mmmm:r.i18n.monthNames[f+12],yy:String(b).slice(2),yyyy:b,h:g%12||12,hh:s(g%12||12),H:g,HH:s(g),M:v,MM:s(v),s:D,ss:s(D),l:s(M,3),L:s(Math.round(M/10)),t:g<12?r.i18n.timeNames[0]:r.i18n.timeNames[1],tt:g<12?r.i18n.timeNames[2]:r.i18n.timeNames[3],T:g<12?r.i18n.timeNames[4]:r.i18n.timeNames[5],TT:g<12?r.i18n.timeNames[6]:r.i18n.timeNames[7],Z:c?"GMT":n?"UTC":(String(e).match(i)||[""]).pop().replace(o,""),o:(T>0?"-":"+")+s(100*Math.floor(Math.abs(T)/60)+Math.abs(T)%60,4),S:["th","st","nd","rd"][h%10>3?0:(h%100-h%10!=10)*h%10],W:A,N:x};return t.replace(a,(function(e){return e in w?w[e]:e.slice(1,e.length-1)}))});function s(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function d(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var a=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-a);var i=(t-n)/6048e5;return 1+Math.floor(i)}function l(e){var t=e.getDay();return 0===t&&(t=7),t}function u(e){return null===e?"null":void 0===e?"undefined":"object"!==t(e)?t(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}r.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},r.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},e.exports=r}()})),d=function(){function e(){var t=this;n(this,e),this.date=new Date,this.input=null,this.isOpen=!1,this.container=document.createElement("date-input-polyfill"),this.year=document.createElement("select"),e.createRangeSelect(this.year,1890,this.date.getFullYear()+20),this.year.className="yearSelect",this.year.addEventListener("change",(function(){t.date.setYear(t.year.value),t.refreshDaysMatrix()}));var a=document.createElement("span");a.className="yearSelect-wrapper",a.appendChild(this.year),this.container.appendChild(a),this.month=document.createElement("select"),this.month.className="monthSelect",this.month.addEventListener("change",(function(){t.date.setMonth(t.month.value),t.refreshDaysMatrix()}));var i=document.createElement("span");i.className="monthSelect-wrapper",i.appendChild(this.month),this.container.appendChild(i),this.today=document.createElement("button"),this.today.textContent="Today",this.today.addEventListener("click",(function(){var e=new Date;t.date=new Date("".concat(e.getFullYear(),"/").concat("0".concat(e.getMonth()+1).slice(-2),"/").concat("0".concat(e.getDate()).slice(-2))),t.setInput()})),this.container.appendChild(this.today);var o=document.createElement("table");this.daysHead=document.createElement("thead"),this.days=document.createElement("tbody"),this.days.addEventListener("click",(function(e){var n=e.target;if(!n.hasAttribute("data-day"))return!1;var a=t.days.querySelector("[data-selected]");a&&a.removeAttribute("data-selected"),n.setAttribute("data-selected",""),t.date.setDate(parseInt(n.textContent)),t.setInput()})),o.appendChild(this.daysHead),o.appendChild(this.days),this.container.appendChild(o),this.hide(),document.body.appendChild(this.container),this.removeClickOut=function(e){if(t.isOpen){for(var n=e.target,a=n===t.container||n===t.input;!a&&(n=n.parentNode);)a=n===t.container;("date"!==e.target.getAttribute("type")&&!a||!a)&&t.hide()}},this.removeBlur=function(e){t.isOpen&&t.hide()}}return i(e,[{key:"hide",value:function(){this.container.setAttribute("data-open",this.isOpen=!1),this.input&&this.input.blur(),document.removeEventListener("mousedown",this.removeClickOut),document.removeEventListener("touchstart",this.removeClickOut)}},{key:"show",value:function(){var e=this;this.container.setAttribute("data-open",this.isOpen=!0),setTimeout((function(){document.addEventListener("mousedown",e.removeClickOut),document.addEventListener("touchstart",e.removeClickOut)}),500),window.onpopstate=function(){e.hide()}}},{key:"goto",value:function(e){var t=this,n=e.getBoundingClientRect();this.container.style.top="".concat(n.top+n.height+(document.documentElement.scrollTop||document.body.scrollTop)+3,"px");var a=this.container.getBoundingClientRect(),i=a.width?a.width:280,o=function(){return t.container.className.replace("polyfill-left-aligned","").replace("polyfill-right-aligned","").replace(/\s+/g," ").trim()},r=n.right-i;n.right<i?(r=n.left,this.container.className="".concat(o()," polyfill-left-aligned")):this.container.className="".concat(o()," polyfill-right-aligned"),this.container.style.left="".concat(r+(document.documentElement.scrollLeft||document.body.scrollLeft),"px"),this.show()}},{key:"attachTo",value:function(e){return(e!==this.input||!this.isOpen)&&(this.input=e,this.refreshLocale(),this.sync(),this.goto(this.input),!0)}},{key:"sync",value:function(){isNaN(Date.parse(this.input.valueAsDate))?this.date=new Date:this.date=e.absoluteDate(this.input.valueAsDate),this.year.value=this.date.getFullYear(),this.month.value=this.date.getMonth(),this.refreshDaysMatrix()}},{key:"setInput",value:function(){var e=this;this.input.valueAsDate=this.date,this.input.focus(),setTimeout((function(){e.hide()}),100),this.pingInput()}},{key:"refreshLocale",value:function(){if(this.locale===this.input.locale)return!1;this.locale=this.input.locale,this.today.textContent=this.locale.today||"Today";for(var t=["<tr>"],n=0,a=this.locale.days.length;n<a;++n)t.push('<th scope="col">'.concat(this.locale.days[n],"</th>"));this.daysHead.innerHTML=t.join(""),e.createRangeSelect(this.month,0,11,this.locale.months)}},{key:"refreshDaysMatrix",value:function(){this.refreshLocale();for(var t=this.date.getFullYear(),n=this.date.getMonth(),a=new Date(t,n,1).getDay(),i=new Date(this.date.getFullYear(),n+1,0).getDate(),o=e.absoluteDate(this.input.valueAsDate)||!1,r=o&&t===o.getFullYear()&&n===o.getMonth(),s=[],d=0;d<i+a;++d)if(d%7==0&&s.push("\n          ".concat(0!==d?"</tr>":"","\n          <tr>\n        ")),d+1<=a)s.push("<td></td>");else{var l=d+1-a,u=r&&o.getDate()===l;s.push("<td data-day ".concat(u?"data-selected":"",">\n          ").concat(l,"\n        </td>"))}this.days.innerHTML=s.join("")}},{key:"pingInput",value:function(){var e,t;try{e=new Event("input",{bubbles:!0,cancelable:!1}),t=new Event("change",{bubbles:!0,cancelable:!1})}catch(n){(e=document.createEvent("KeyboardEvent")).initEvent("input",!0,!1),(t=document.createEvent("KeyboardEvent")).initEvent("change",!0,!1)}this.input.dispatchEvent(e),this.input.dispatchEvent(t)}}],[{key:"createRangeSelect",value:function(e,t,n,a){e.innerHTML="";for(var i=t;i<=n;++i){var o=document.createElement("option");e.appendChild(o);var r=a?a[i-t]:i;o.text=r,o.value=i}return e}},{key:"absoluteDate",value:function(e){return e&&new Date(e.getTime()+60*e.getTimezoneOffset()*1e3)}}]),e}(),l=function(){function e(t){var a=this;n(this,e),r||(r=new d),this.element=t,this.element.setAttribute("data-has-picker",""),this.locale=this.element.getAttribute("lang")||document.body.getAttribute("lang")||"en",this.format=this.element.getAttribute("date-format")||document.body.getAttribute("date-format")||this.element.getAttribute("data-date-format")||document.body.getAttribute("data-date-format")||"yyyy-mm-dd",this.element.setAttribute("placeholder",this.format),this.localeText=this.getLocaleText(),Object.defineProperties(this.element,{valueAsDate:{get:function(){if(!a.element.value)return null;var e=a.format||"yyyy-mm-dd",t=a.element.value.match(/(\d+)/g),n=0,i={};return e.replace(/(yyyy|dd|mm)/g,(function(e){i[e]=n++})),new Date(t[i.yyyy],t[i.mm]-1,t[i.dd])},set:function(e){a.element.value=s(e,a.format,!0)}},valueAsNumber:{get:function(){return a.element.value?a.element.valueAsDate.valueOf():NaN},set:function(e){a.element.valueAsDate=new Date(e)}}});var i=function(e){var t=a.element;t.locale=a.localeText;r.attachTo(t)};this.element.addEventListener("focus",i),this.element.addEventListener("mouseup",i),this.element.addEventListener("keydown",(function(e){var t=new Date;switch(e.keyCode){case 9:case 27:r.hide();break;case 38:a.element.valueAsDate&&(t.setDate(a.element.valueAsDate.getDate()+1),a.element.valueAsDate=t,r.pingInput());break;case 40:a.element.valueAsDate&&(t.setDate(a.element.valueAsDate.getDate()-1),a.element.valueAsDate=t,r.pingInput())}r.sync()})),this.element.addEventListener("keyup",(function(e){r.sync()}))}return i(e,[{key:"getLocaleText",value:function(){var e=this.locale.toLowerCase();for(var t in o){var n=t.split("_");if(n.map((function(e){return e.toLowerCase()})),~n.indexOf(e)||~n.indexOf(e.substr(0,2)))return o[t]}}}],[{key:"supportsDateInput",value:function(){var e=document.createElement("input");e.setAttribute("type","date");var t="not-a-date";return e.setAttribute("value",t),!(e.value===t)}},{key:"addPickerToDateInputs",value:function(){var t=document.querySelectorAll('input[type="date"]:not([data-has-picker])'),n=t.length;if(!n)return!1;for(var a=0;a<n;++a)new e(t[a])}},{key:"addPickerToOtherInputs",value:function(){var t=document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'),n=t.length;if(!n)return!1;for(var a=0;a<n;++a)new e(t[a])}}]),e}(),u=function(){l.addPickerToOtherInputs(),l.supportsDateInput()||l.addPickerToDateInputs()},c=function(){u(),document.querySelector("body").addEventListener("mousedown",(function(){u()}))};"loading"!==document.readyState?c():document.addEventListener("DOMContentLoaded",(function(){c()})),e.Input=l,Object.defineProperty(e,"__esModule",{value:!0})}));//# sourceMappingURL=date-input-polyfill.umd.js.map