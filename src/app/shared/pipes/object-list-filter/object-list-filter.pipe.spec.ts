import { ObjectListFilterPipe } from './object-list-filter.pipe';

describe('ObjectListFilterPipe', () => {
  const pipe = new ObjectListFilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filter objects using property', () => {

    const list = [
      {path: 'A'},
      {path: 'C'},
      {path: 'A'},
      {path: 'D'},
      {path: 'E'}
    ];

    expect(pipe.transform(list, 'path', 'A').length).toBe(2);
  });

});
