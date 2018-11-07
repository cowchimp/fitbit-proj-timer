import { monoDigits } from './monoDigits';

export class TimerLabel {
  constructor(mins, seconds, isNegative = false) {
    this.mins = mins;
    this.seconds = seconds;
    this.isNegative = isNegative;
  }

  toString() {
    return `${this.isNegative ? '-' : ''}${this.mins}:${this.seconds}`;
  }

  toMonoDigits() {
    return `${this.isNegative ? '-' : ''}${monoDigits(this.mins)}:${monoDigits(this.seconds)}`;
  }
}
