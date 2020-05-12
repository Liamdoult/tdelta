import { expect } from "chai";

import Delta from "../src";
import { dateTestSet, millisecondTestSet } from "./testSets";

describe("Delta", function () {
  describe("Millisecond input", function () {
    millisecondTestSet.forEach(function (dataset) {
      describe(`Input ${dataset.input}`, function () {
        let dt = new Delta(dataset.input);

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
  describe("Dates input", function () {
    dateTestSet.forEach(function (dataset) {
      describe(dataset.description, function () {
        let dt = Delta.diff(dataset.input[0], dataset.input[1]);

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
});
