import { TimerLabel } from './TimerLabel';

export function calcTimerLabel(duration, before, after)  {
  const diff = duration - (after - before);
  const isNegative = diff < 0;
  const timer = Math.abs(diff/60/1000);
  const mins = Math.floor(timer);
  const seconds = Math.round(60*(timer-mins));
  return new TimerLabel(mins, seconds, isNegative);
}

