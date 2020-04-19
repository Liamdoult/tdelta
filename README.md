# delta-time

Time duration and difference library to extend Date functionality.

## Usage

```javascript
import DeltaTime from "deltaTime";

const dt = DeltaTime(someDurationInMS);

console.log(`h: ${dt.getHours()} m: ${dt.getMinutes()} s: ${dt.getSeconds()}`);
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
