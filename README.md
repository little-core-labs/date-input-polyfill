# @12core/date-input-polyfill
[![npm version][npmimg]][npm] [![build status][actionsimg]][actions]
[![downloads][downloadsimg]][downloads]

Just include this simple script and IE, Firefox, and OS X Safari will support `<input type="date">`, without any dependencies, not even jQuery!

Support dynamically created inputs, so can be used in single page applications.

Forked from [date-input-polyfill](https://github.com/jcgertig/date-input-polyfill). Continuing as a separate project.

Changes include:

- A refreshed rollup based build system.
- No more webpack
- No more sass (postcss unsing standards based CSS)
- Maybe some bug fixes.
- Automated maintenance and a website: https://little-core-labs.github.io/date-input-polyfill

## Known issues:

- input[type="date"].value returns the formatted date, rather than the standard `YYYY-MM-DD` format.  This is unfortunate and may be addressed at some point.
- Automatic attachment isn't that reliable inside of react.  This may be improved.
- Date objects are displayed in the local time zone, which causes date drift by a day sometimes.  Looking into this issue now.

## Install
`npm install --save @12core/date-input-polyfill`

Add to your project:

* **Webpack/Browserify:** `require('@12core/date-input-polyfill');`

    or alongside **Babel:** `import '@12core/date-input-polyfill';`

* **Script Tag:** Copy `@12core/date-input-polyfill/dist/date-input-polyfill.umd.js` from `node_modules` and
include it anywhere in your HTML.

* This package also supports **ESM**: `date-input-polyfill.esm.js`.

## Features
* **Easily Stylable:** [These are the default styles](https://github.com/jcgertig/date-input-polyfill/blob/master/date-input-polyfill.scss),
which you may override with your own.

* **Polyfills `valueAsDate` and `valueAsNumber`:**
[Learn more about these properties.](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#property-valueasdate)
They behave as getters and setters.

* **Keyboard Shortcuts:** `Esc` will hide the datepicker. `Up/Down` will
increment/decrement the date by one day.

* **Localization:** Specify the datepicker's locale by setting the
`lang` attribute of the `input` element.  The default locale is `en`.

    `<input type="date" lang="en" />`

* **Formatting:** Specify the display format by setting either the
`date-format` or `data-date-format` attribute of the `input` element.  The default format is `yyyy-mm-dd`.
[Available options list.](https://github.com/felixge/node-dateformat#mask-options)

    `<input type="date" date-format="mm/dd/yyyy" />`

    `<input type="date" data-date-format="mm/dd/yyyy" />`


## Contributing

### Local Development
Run `npm start`.

### Build
Run `npm run build`

[npmimg]: https://img.shields.io/npm/v/@12core/date-input-polyfill.svg
[npm]: https://npmjs.org/package/@12core/date-input-polyfill
[actionsimg]: https://github.com/little-core-labs/date-input-polyfill/workflows/tests/badge.svg
[actions]: https://github.com/little-core-labs/date-input-polyfill/actions
[downloadsimg]: http://img.shields.io/npm/dm/@12core/date-input-polyfill.svg
[downloads]: https://npmjs.org/package/@12core/date-input-polyfill
