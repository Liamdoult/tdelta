import { expect } from "chai";

import DeltaTime from "../src";

const testData = [
  {
    input: 0,
    expected: {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 0,
    },
  },
  {
    input: 13493,
    expected: {
      milliseconds: 493,
      seconds: 13,
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 0,
    },
  },
  {
    input: 18144000000,
    expected: {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 30,
    },
  },
  {
    input: 3414092421,
    expected: {
      milliseconds: 421,
      seconds: 32,
      minutes: 21,
      hours: 12,
      days: 4,
      weeks: 5,
    },
  },
  {
    input: 152000,
    expected: {
      milliseconds: 0,
      seconds: 32,
      minutes: 2,
      hours: 0,
      days: 0,
      weeks: 0,
    },
  },
  {
    input: 9120000,
    expected: {
      milliseconds: 0,
      seconds: 0,
      minutes: 32,
      hours: 2,
      days: 0,
      weeks: 0,
    },
  },
  {
    input: 216000000,
    expected: {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 12,
      days: 2,
      weeks: 0,
    },
  },
  {
    input: 1382400000,
    expected: {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 2,
      weeks: 2,
    },
  },
  {
    input: 33868800000,
    expected: {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 56,
    },
  },
];

describe("DeltaTime", function () {
  testData.forEach(function (dataset) {
    describe(`Input ${dataset.input}`, function () {
      let dt = new DeltaTime(dataset.input);

      it(`getMilliseconds`, function () {
        expect(dt.getMilliseconds()).equal(dataset.expected.milliseconds);
      });

      it(`getSeconds`, function () {
        expect(dt.getSeconds()).equal(dataset.expected.seconds);
      });

      it(`getMinutes`, function () {
        expect(dt.getMinutes()).equal(dataset.expected.minutes);
      });

      it(`getHours`, function () {
        expect(dt.getHours()).equal(dataset.expected.hours);
      });

      it(`getDays`, function () {
        expect(dt.getDays()).equal(dataset.expected.days);
      });

      it(`getWeeks`, function () {
        expect(dt.getWeeks()).equal(dataset.expected.weeks);
      });
    });
  });
});
