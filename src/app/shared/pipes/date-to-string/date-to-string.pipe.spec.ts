import { DateToStringPipe } from './date-to-string.pipe';

describe('DateToStringPipe', () => {
  const pipe = new DateToStringPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "12/10/2018" to "12 Oct 2018"', () => {
    expect(pipe.transform('12/10/2018')).toBe('12 Oct 2018');
  });
});
