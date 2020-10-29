import { expect } from "chai";

import Delta from "../src";
import { dateTestSet, millisecondTestSet } from "./testSets";

describe("Delta", function () {
  describe("Millisecond input", function () {
    millisecondTestSet.forEach(function (dataset) {
      describe(`Input ${dataset.input}`, function () {
        let dt = new Delta(dataset.input);

        it(`Milliseconds`, function () {
          expect(dt.ms).equal(dataset.expected.milliseconds);
        });

        it(`Seconds`, function () {
          expect(dt.sec).equal(dataset.expected.seconds);
        });

        it(`Minutes`, function () {
          expect(dt.min).equal(dataset.expected.minutes);
        });

        it(`Hours`, function () {
          expect(dt.h).equal(dataset.expected.hours);
        });

        it(`Days`, function () {
          expect(dt.d).equal(dataset.expected.days);
        });

        it(`Weeks`, function () {
          expect(dt.w).equal(dataset.expected.weeks);
        });
      });
    });
  });
  describe("Dates input", function () {
    dateTestSet.forEach(function (dataset) {
      describe(dataset.description, function () {
        let dt = Delta.diff(dataset.input[0], dataset.input[1]);

        it(`Milliseconds`, function () {
          expect(dt.ms).equal(dataset.expected.milliseconds);
        });

        it(`Seconds`, function () {
          expect(dt.sec).equal(dataset.expected.seconds);
        });

        it(`Minutes`, function () {
          expect(dt.min).equal(dataset.expected.minutes);
        });

        it(`Hours`, function () {
          expect(dt.h).equal(dataset.expected.hours);
        });

        it(`Days`, function () {
          expect(dt.d).equal(dataset.expected.days);
        });

        it(`Weeks`, function () {
          expect(dt.w).equal(dataset.expected.weeks);
        });
      });
    });
  });
});
