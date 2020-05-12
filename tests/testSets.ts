export const millisecondTestSet = [
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

export const dateTestSet = [
  {
    description: "Test Date input",
    input: [new Date(1585844072389), new Date(1589258164810)],
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
    description: "Test negative inverted time input (A > B)",
    input: [new Date(1589258164810), new Date(1585844072389)],
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
    description: "Test number input",
    input: [1589258164810, 1585844072389],
    expected: {
      milliseconds: 421,
      seconds: 32,
      minutes: 21,
      hours: 12,
      days: 4,
      weeks: 5,
    },
  },
];
