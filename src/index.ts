export interface Delta {
  durationInMS: number;
  getMilliseconds(): number;
  getSeconds(): number;
  getMinutes(): number;
  getHours(): number;
  getDays(): number;
  getWeeks(): number;
}

/**
 * Provideds functionality for duration/difference in times.
 *
 */
export class Delta implements Delta {
  /**
   * @param { number } durationInMS The duration/difference in time.
   */
  constructor(durationInMS: number) {
    this.durationInMS = durationInMS;
  }

  static diff(timeA: Date | number, timeB: Date | number): Delta {
    if (timeA instanceof Date) {
      timeA = timeA.getTime();
    }
    if (timeB instanceof Date) {
      timeB = timeB.getTime();
    }
    let diff: number = timeA - timeB;
    let milliseconds: number = Math.abs(diff);
    return new Delta(milliseconds);
  }

  /**
   * Shorthand for `milliseconds`.
   *
   * This is not to be mistaken with total milliseconds.
   * @example
   * ``` javascript
   * const ms = 13493;
   * let dt = Delta(ms);
   * dt.ms // equals 493 not 13493
   * ```
   *
   * @returns { number } The number of milliseconds.
   */
  get ms(): number {
    return this.milliseconds;
  }

  /**
   * Returns the milliseconds segment of the delta.
   *
   * This is not to be mistaken with total milliseconds.
   * @example
   * ``` javascript
   * const ms = 13493;
   * let dt = Delta(ms);
   * dt.milliseconds // equals 493 not 13493
   * ```
   *
   * @returns { number } The number of milliseconds.
   */
  get milliseconds(): number {
    return Math.floor(this.durationInMS) % 1000;
  }

  /**
   * Shorthand for `seconds`.
   *
   * This is not to be mistaken with total seconds.
   * @example
   * ``` javascript
   * const ms = 152000;
   * let dt = Delta(ms);
   * dt.sec // equals 32 not 152
   * ```
   *
   * @returns { number } The number of seconds.
   */
  get sec(): number {
    return this.seconds;
  }

  /**
   * Returns the seconds segment of the delta.
   *
   * This is not to be mistaken with total seconds.
   * @example
   * ``` javascript
   * const ms = 152000;
   * let dt = Delta(ms);
   * dt.seconds // equals 32 not 152
   * ```
   *
   * @returns { number } The number of seconds.
   */
  get seconds(): number {
    return Math.floor(this.durationInMS / 1000) % 60;
  }

  /**
   * Shorthand for `minutes`.
   *
   * This is not to be mistaken with total minutes.
   * @example
   * ``` javascript
   * const ms = 9120000;
   * let dt = Delta(ms);
   * dt.min // equals 32 not 152
   * ```
   *
   * @returns { number } The number of minutes.
   */
  get min(): number {
    return this.minutes;
  }

  /**
   * Returns the minutes segment of the delta.
   *
   * This is not to be mistaken with total minutes.
   * @example
   * ``` javascript
   * const ms = 9120000;
   * let dt = Delta(ms);
   * dt.minutes // equals 32 not 152
   * ```
   *
   * @returns { number } The number of minutes.
   */
  get minutes(): number {
    return Math.floor(this.durationInMS / 1000 / 60) % 60;
  }

  /**
   * Shorthand for `hours`.
   *
   * This is not to be mistaken with total hours.
   * @example
   * ``` javascript
   * const ms = 216000000;
   * let dt = Delta(ms);
   * dt.h // equals 12 not 60
   * ```
   *
   * @returns { number } The number of hours.
   */
  get h(): number {
    return this.hours;
  }

  /**
   * Returns the hours segment of the delta.
   *
   * This is not to be mistaken with total hours.
   * @example
   * ``` javascript
   * const ms = 216000000;
   * let dt = Delta(ms);
   * dt.hours // equals 12 not 60
   * ```
   *
   * @returns { number } The number of hours.
   */
  get hours(): number {
    return Math.floor(this.durationInMS / 1000 / 60 / 60) % 24;
  }

  /**
   * Shorthand for `days`.
   *
   * This is not to be mistaken with total days.
   * @example
   * ``` javascript
   * const ms = 1382400000;
   * let dt = Delta(ms);
   * dt.d // equals 2 not 16
   * ```
   *
   * @returns { number } The number of days.
   */
  get d(): number {
    return this.days;
  }

  /**
   * Returns the days segment of the delta.
   *
   * This is not to be mistaken with total days.
   * @example
   * ``` javascript
   * const ms = 1382400000;
   * let dt = Delta(ms);
   * dt.days // equals 2 not 16
   * ```
   *
   * @returns { number } The number of days.
   */
  get days(): number {
    return Math.floor(this.durationInMS / 1000 / 60 / 60 / 24) % 7;
  }

  /**
   * Shorthand for `weeks`.
   *
   * This is equavilant to total weeks.
   * @example
   * ``` javascript
   * const ms = 33868800000;
   * let dt = Delta(ms);
   * dt.weeks() // equals 56 not 4
   * ```
   *
   * @returns { number } The number of weeks.
   */
  get w(): number {
    return this.weeks;
  }

  /**
   * Returns the week segment of the delta.
   *
   * This is equavilant to total weeks.
   * @example
   * ``` javascript
   * const ms = 33868800000;
   * let dt = Delta(ms);
   * dt.getWeeks() // equals 56 not 4
   * ```
   *
   * @returns { number } The number of weeks.
   */
  get weeks(): number {
    return Math.floor(this.durationInMS / 1000 / 60 / 60 / 24 / 7);
  }
}

export default Delta;
