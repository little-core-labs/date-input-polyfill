!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('.date-input-polyfill-reset, date-input-polyfill, date-input-polyfill select, date-input-polyfill table, date-input-polyfill th, date-input-polyfill td {\n  background: #fff;\n  color: #000;\n  text-shadow: none;\n  border: 0;\n  padding: 0;\n  height: auto;\n  width: auto;\n  line-height: normal;\n  font-family: sans-serif;\n  font-size: 14px;\n}\n\ndate-input-polyfill {\n  position: absolute !important;\n  text-align: center;\n  box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.22);\n  cursor: default;\n  z-index: 1;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  overflow: hidden;\n  display: block\n}\n\ndate-input-polyfill[data-open="false"] {\n    visibility: hidden;\n    z-index: -100 !important;\n    top: 0;\n  }\n\ndate-input-polyfill[data-open="true"] {\n    visibility: visible;\n  }\n\ndate-input-polyfill select, date-input-polyfill table, date-input-polyfill th, date-input-polyfill td {\n\n    box-shadow: none;\n    font-family: \'Lato\', Helvetica, Arial, sans-serif;\n  }\n\ndate-input-polyfill select, date-input-polyfill button {\n    border: 0;\n    border-radius: 0;\n    border-bottom: 1px solid #DADFE1;\n    height: 24px;\n    vertical-align: top;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n  }\n\ndate-input-polyfill .monthSelect-wrapper {\n    width: 55%;\n    display: inline-block;\n  }\n\ndate-input-polyfill .yearSelect-wrapper {\n    width: 25%;\n    display: inline-block;\n  }\n\ndate-input-polyfill select {\n    width: 100%\n  }\n\ndate-input-polyfill select:first-of-type {\n      border-right: 1px solid #DADFE1;\n      border-radius: 5px 0 0 0;\n      -moz-border-radius: 5px 0 0 0;\n      -webkit-border-radius: 5px 0 0 0;\n    }\n\ndate-input-polyfill button {\n    width: 20%;\n    background: #DADFE1;\n    border-radius: 0 5px 0 0;\n    -moz-border-radius: 0 5px 0 0;\n    -webkit-border-radius: 0 5px 0 0\n  }\n\ndate-input-polyfill button:hover {\n      background: #eee;\n    }\n\ndate-input-polyfill table {\n    border-collapse: separate !important;\n    border-radius: 0 0 5px 5px;\n    -moz-border-radius: 0 0 5px 5px;\n    -webkit-border-radius: 0 0 5px 5px;\n    overflow: hidden;\n    max-width: 280px;\n    width: 280px;\n  }\n\ndate-input-polyfill th, date-input-polyfill td {\n    width: 32px;\n    padding: 4px;\n    text-align: center;\n    box-sizing: content-box;\n  }\n\ndate-input-polyfill td[data-day] {\n    cursor: pointer\n  }\n\ndate-input-polyfill td[data-day]:hover {\n      background: #DADFE1;\n    }\n\ndate-input-polyfill [data-selected] {\n    font-weight: bold;\n    background: #D8EAF6;\n  }\n');class e{constructor(){if(window.thePicker)return window.thePicker;this.date=new Date,this.input=null,this.isOpen=!1,this.container=document.createElement("date-input-polyfill"),this.year=document.createElement("select"),e.createRangeSelect(this.year,1890,this.date.getFullYear()+20),this.year.className="yearSelect",this.year.addEventListener("change",(()=>{this.date.setYear(this.year.value),this.refreshDaysMatrix()}));const t=document.createElement("span");t.className="yearSelect-wrapper",t.appendChild(this.year),this.container.appendChild(t),this.month=document.createElement("select"),this.month.className="monthSelect",this.month.addEventListener("change",(()=>{this.date.setMonth(this.month.value),this.refreshDaysMatrix()}));const n=document.createElement("span");n.className="monthSelect-wrapper",n.appendChild(this.month),this.container.appendChild(n),this.today=document.createElement("button"),this.today.textContent="Today",this.today.addEventListener("click",(()=>{const e=new Date;this.date=new Date(`${e.getFullYear()}/${("0"+(e.getMonth()+1)).slice(-2)}/${("0"+e.getDate()).slice(-2)}`),this.setInput()})),this.container.appendChild(this.today);const a=document.createElement("table");this.daysHead=document.createElement("thead"),this.days=document.createElement("tbody"),this.days.addEventListener("click",(e=>{const t=e.target;if(!t.hasAttribute("data-day"))return!1;const n=this.days.querySelector("[data-selected]");n&&n.removeAttribute("data-selected"),t.setAttribute("data-selected",""),this.date.setDate(parseInt(t.textContent)),this.setInput()})),a.appendChild(this.daysHead),a.appendChild(this.days),this.container.appendChild(a),this.hide(),document.body.appendChild(this.container),this.removeClickOut=e=>{if(this.isOpen){let t=e.target,n=t===this.container||t===this.input;for(;!n&&(t=t.parentNode);)n=t===this.container;("date"!==e.target.getAttribute("type")&&!n||!n)&&this.hide()}},this.removeBlur=e=>{this.isOpen&&this.hide()}}hide(){this.container.setAttribute("data-open",this.isOpen=!1),this.input&&this.input.blur(),document.removeEventListener("mousedown",this.removeClickOut),document.removeEventListener("touchstart",this.removeClickOut)}show(){this.container.setAttribute("data-open",this.isOpen=!0),setTimeout((()=>{document.addEventListener("mousedown",this.removeClickOut),document.addEventListener("touchstart",this.removeClickOut)}),500),window.onpopstate=()=>{this.hide()}}goto(e){const t=e.getBoundingClientRect();this.container.style.top=t.top+t.height+(document.documentElement.scrollTop||document.body.scrollTop)+3+"px";const n=this.container.getBoundingClientRect(),a=n.width?n.width:280,i=()=>this.container.className.replace("polyfill-left-aligned","").replace("polyfill-right-aligned","").replace(/\s+/g," ").trim();let s=t.right-a;t.right<a?(s=t.left,this.container.className=i()+" polyfill-left-aligned"):this.container.className=i()+" polyfill-right-aligned",this.container.style.left=s+(document.documentElement.scrollLeft||document.body.scrollLeft)+"px",this.show()}attachTo(e){return(e!==this.input||!this.isOpen)&&(this.input=e,this.refreshLocale(),this.sync(),this.goto(this.input),!0)}sync(){isNaN(Date.parse(this.input.valueAsDate))?this.date=new Date:this.date=e.absoluteDate(this.input.valueAsDate),this.year.value=this.date.getFullYear(),this.month.value=this.date.getMonth(),this.refreshDaysMatrix()}setInput(){this.input.valueAsDate=this.date,this.input.focus(),setTimeout((()=>{this.hide()}),100),this.pingInput()}refreshLocale(){if(this.locale===this.input.locale)return!1;this.locale=this.input.locale,this.today.textContent=this.locale.today||"Today";const t=["<tr>"];for(let e=0,n=this.locale.days.length;e<n;++e)t.push(`<th scope="col">${this.locale.days[e]}</th>`);this.daysHead.innerHTML=t.join(""),e.createRangeSelect(this.month,0,11,this.locale.months)}refreshDaysMatrix(){this.refreshLocale();const t=this.date.getFullYear(),n=this.date.getMonth(),a=new Date(t,n,1).getDay(),i=new Date(this.date.getFullYear(),n+1,0).getDate(),s=e.absoluteDate(this.input.valueAsDate)||!1,o=s&&t===s.getFullYear()&&n===s.getMonth(),r=[];for(let e=0;e<i+a;++e){if(e%7==0&&r.push(`\n          ${0!==e?"</tr>":""}\n          <tr>\n        `),e+1<=a){r.push("<td></td>");continue}const t=e+1-a,n=o&&s.getDate()===t;r.push(`<td data-day ${n?"data-selected":""}>\n          ${t}\n        </td>`)}this.days.innerHTML=r.join("")}pingInput(){let e,t;try{e=new Event("input"),t=new Event("change")}catch(n){e=document.createEvent("KeyboardEvent"),e.initEvent("input",!0,!1),t=document.createEvent("KeyboardEvent"),t.initEvent("change",!0,!1)}this.input.dispatchEvent(e),this.input.dispatchEvent(t)}static createRangeSelect(e,t,n,a){e.innerHTML="";for(let i=t;i<=n;++i){const n=document.createElement("option");e.appendChild(n);const s=a?a[i-t]:i;n.text=s,n.value=i}return e}static absoluteDate(e){return e&&new Date(e.getTime()+60*e.getTimezoneOffset()*1e3)}}window.thePicker=new e;var t=window.thePicker;const n={"en_en-US_en-UK":{days:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]},"zh_zh-CN":{days:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},"zh-Hans_zh-Hans-CN":{days:["周日","周一","周二","周三","周四","周五","周六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},"zh-Hant_zh-Hant-TW":{days:["週日","週一","週二","週三","週四","週五","週六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},"de_de-DE":{days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},"nl_nl-NL_nl-BE":{days:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],months:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],today:"Vandaag",format:"D/M/Y"},"pt_pt-BR":{days:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],today:"Hoje"},"fr_fr-FR_fr-BE":{days:["Di","Lu","Ma","Me","Je","Ve","Sa"],months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],today:"Aujourd'hui",format:"D/M/Y"},"es_es-VE":{days:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],today:"Hoy",format:"D/M/Y"},"da_da-dk":{days:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],months:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],today:"I dag",format:"dd/MM-YYYY"},"ru_ru-RU_ru-UA_ru-KZ_ru-MD":{days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],today:"Сегодня",format:"D.M.Y"},"uk_uk-UA":{days:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],today:"Cьогодні",format:"D.M.Y"},"sv_sv-SE":{days:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],today:"Idag",format:"YYYY-MM-dd"},"test_test-TEST":{days:["Foo","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Foo","February","March","April","May","June","July","August","September","October","November","December"]},ja:{days:["日","月","火","水","木","金","土"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今日",format:"YYYY-MM-dd"}};var a,i,s,o=(a=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(e,t,n,h){if(1!==arguments.length||"string"!==u(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var c=(t=String(o.masks[t]||t||o.masks.default)).slice(0,4);"UTC:"!==c&&"GMT:"!==c||(t=t.slice(4),n=!0,"GMT:"===c&&(h=!0));var m=n?"getUTC":"get",p=e[m+"Date"](),y=e[m+"Day"](),g=e[m+"Month"](),b=e[m+"FullYear"](),f=e[m+"Hours"](),D=e[m+"Minutes"](),v=e[m+"Seconds"](),M=e[m+"Milliseconds"](),T=n?0:e.getTimezoneOffset(),A=d(e),w=l(e),x={d:p,dd:r(p),ddd:o.i18n.dayNames[y],dddd:o.i18n.dayNames[y+7],m:g+1,mm:r(g+1),mmm:o.i18n.monthNames[g],mmmm:o.i18n.monthNames[g+12],yy:String(b).slice(2),yyyy:b,h:f%12||12,hh:r(f%12||12),H:f,HH:r(f),M:D,MM:r(D),s:v,ss:r(v),l:r(M,3),L:r(Math.round(M/10)),t:f<12?"a":"p",tt:f<12?"am":"pm",T:f<12?"A":"P",TT:f<12?"AM":"PM",Z:h?"GMT":n?"UTC":(String(e).match(i)||[""]).pop().replace(s,""),o:(T>0?"-":"+")+r(100*Math.floor(Math.abs(T)/60)+Math.abs(T)%60,4),S:["th","st","nd","rd"][p%10>3?0:(p%100-p%10!=10)*p%10],W:A,N:w};return t.replace(a,(function(e){return e in x?x[e]:e.slice(1,e.length-1)}))});function r(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function d(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var a=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-a);var i=(t-n)/6048e5;return 1+Math.floor(i)}function l(e){var t=e.getDay();return 0===t&&(t=7),t}function u(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}o.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},o.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]};class h{constructor(e){this.element=e,this.element.setAttribute("data-has-picker",""),this.locale=this.element.getAttribute("lang")||document.body.getAttribute("lang")||"en",this.format=this.element.getAttribute("date-format")||document.body.getAttribute("date-format")||this.element.getAttribute("data-date-format")||document.body.getAttribute("data-date-format")||"yyyy-mm-dd",this.localeText=this.getLocaleText(),Object.defineProperties(this.element,{valueAsDate:{get:()=>{if(!this.element.value)return null;const e=this.format||"yyyy-mm-dd",t=this.element.value.match(/(\d+)/g);let n=0,a={};return e.replace(/(yyyy|dd|mm)/g,(e=>{a[e]=n++})),new Date(t[a.yyyy],t[a.mm]-1,t[a.dd])},set:e=>{this.element.value=o(e,this.format)}},valueAsNumber:{get:()=>this.element.value?this.element.valueAsDate.valueOf():NaN,set:e=>{this.element.valueAsDate=new Date(e)}}});const n=e=>{const n=this.element;n.locale=this.localeText;t.attachTo(n)};this.element.addEventListener("focus",n),this.element.addEventListener("mouseup",n),this.element.addEventListener("keydown",(e=>{const n=new Date;switch(e.keyCode){case 9:case 27:t.hide();break;case 38:this.element.valueAsDate&&(n.setDate(this.element.valueAsDate.getDate()+1),this.element.valueAsDate=n,t.pingInput());break;case 40:this.element.valueAsDate&&(n.setDate(this.element.valueAsDate.getDate()-1),this.element.valueAsDate=n,t.pingInput())}t.sync()})),this.element.addEventListener("keyup",(e=>{t.sync()}))}getLocaleText(){const e=this.locale.toLowerCase();for(const t in n){const a=t.split("_");if(a.map((e=>e.toLowerCase())),~a.indexOf(e)||~a.indexOf(e.substr(0,2)))return n[t]}}static supportsDateInput(){const e=document.createElement("input");e.setAttribute("type","date");const t="not-a-date";return e.setAttribute("value",t),!(e.value===t)}static addPickerToDateInputs(){const e=document.querySelectorAll('input[type="date"]:not([data-has-picker])'),t=e.length;if(!t)return!1;for(let n=0;n<t;++n)new h(e[n])}static addPickerToOtherInputs(){const e=document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'),t=e.length;if(!t)return!1;for(let n=0;n<t;++n)new h(e[n])}}const c=()=>{h.addPickerToOtherInputs(),h.supportsDateInput()||h.addPickerToDateInputs()};c(),document.addEventListener("DOMContentLoaded",(()=>{c()})),document.querySelector("body").addEventListener("mousedown",(()=>{c()}));//# sourceMappingURL=date-input-polyfill.esm.js.map
