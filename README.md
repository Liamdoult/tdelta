# delta-time

![Build](https://github.com/Liamdoult/delta-time/workflows/Build/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Publish](https://github.com/Liamdoult/delta-time/workflows/Publish/badge.svg)

Time duration and difference library to extend Date functionality.

## Usage

```javascript
import Delta from "tdelta";

// With milliseconds
const dt = new Delta(someDurationInMS);

// Or with difference between numbers
const dt = Delta.diff(1589258164810, 1585844072389);

// Or with difference between Date objects:
const dt = Delta.diff(new Date(1589258164810), new Date(1585844072389));

console.log(`h: ${dt.getHours()} m: ${dt.getMinutes()} s: ${dt.getSeconds()}`);
```

**Supported extractions:**

```
  durationInMS: number;
  getMilliseconds(): number;
  getSeconds(): number;
  getMinutes(): number;
  getHours(): number;
  getDays(): number;
  getWeeks(): number;
```

## Contribution

Contribution is welcome, however to save time and wasted work please create an issue with your suggested improvments.

### Running Tests

Test are written with `mocha` and `chai`. Tests can be run locally using:

    npm test

### Generating Docs

Documentation is performed using `tsdocs`. Once generated you can view them inside the generated local directory `docs/`.

    npm run docs

### Formatting

Formatting is performed using prettier. The formatting is configured to run on commit, but if you wish to run it anyway:

    npm run fmt
