export interface DeltaTime {
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
export class DeltaTime implements DeltaTime {
  /**
   * @param { number } durationInMS The duration/difference in time.
   */
  constructor(durationInMS: number) {
    this.durationInMS = durationInMS;
  }

  /**
   * Returns the milliseconds segment of the delta.
   *
   * This is not to be mistaken with total milliseconds.
   * @example
   * ``` javascript
   * const ms = 13493;
   * let dt = DeltaTime(ms);
   * dt.getMilliseconds() // equals 493 not 13493
   * ```
   *
   * @returns { number } The number of milliseconds.
   */
  getMilliseconds(): number {
    return Math.floor(this.durationInMS) % 1000;
  }

  /**
   * Returns the seconds segment of the delta.
   *
   * This is not to be mistaken with total seconds.
   * @example
   * ``` javascript
   * const ms = 152000;
   * let dt = DeltaTime(ms);
   * dt.getSeconds() // equals 32 not 152
   * ```
   *
   * @returns { number } The number of seconds.
   */
  getSeconds(): number {
    return Math.floor(this.durationInMS / 1000) % 60;
  }

  /**
   * Returns the minutes segment of the delta.
   *
   * This is not to be mistaken with total minutes.
   * @example
   * ``` javascript
   * const ms = 9120000;
   * let dt = DeltaTime(ms);
   * dt.getMinutes() // equals 32 not 152
   * ```
   *
   * @returns { number } The number of minutes.
   */
  getMinutes(): number {
    return Math.floor(this.durationInMS / 1000 / 60) % 60;
  }

  /**
   * Returns the hours segment of the delta.
   *
   * This is not to be mistaken with total hours.
   * @example
   * ``` javascript
   * const ms = 216000000;
   * let dt = DeltaTime(ms);
   * dt.getHours() // equals 12 not 60
   * ```
   *
   * @returns { number } The number of hours.
   */
  getHours(): number {
    return Math.floor(this.durationInMS / 1000 / 60 / 60) % 24;
  }

  /**
   * Returns the days segment of the delta.
   *
   * This is not to be mistaken with total days.
   * @example
   * ``` javascript
   * const ms = 1382400000;
   * let dt = DeltaTime(ms);
   * dt.getDays() // equals 2 not 16
   * ```
   *
   * @returns { number } The number of days.
   */
  getDays(): number {
    return Math.floor(this.durationInMS / 1000 / 60 / 60 / 24) % 7;
  }

  /**
   * Returns the week segment of the delta.
   *
   * This is equavilant to total weeks.
   * @example
   * ``` javascript
   * const ms = 33868800000;
   * let dt = DeltaTime(ms);
   * dt.getWeeks() // equals 56 not 4
   * ```
   *
   * @returns { number } The number of days.
   */
  getWeeks(): number {
    return Math.floor(this.durationInMS / 1000 / 60 / 60 / 24 / 7);
  }
}

export default DeltaTime;
