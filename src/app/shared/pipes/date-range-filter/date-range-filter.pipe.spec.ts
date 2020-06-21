import { DateRangeFilterPipe } from './date-range-filter.pipe';

describe('DateRangeFilterPipe', () => {
  const pipe = new DateRangeFilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filter dates list', () => {
    const fromDate = new Date(2018, 10 - 1, 12);
    const toDate = new Date(2018, 10 - 1, 22);

    const list = [
      {date: '10/10/2018'},
      {date: '12/10/2018'},
      {date: '13/10/2018'},
      {date: '14/10/2018'},
      {date: '25/10/2018'}
    ];

    expect(pipe.transform(list, fromDate, toDate).length).toBe(3);
  });
});
