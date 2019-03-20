import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';


test('should generate set text filter action object with provided value', () => {
  const action = setTextFilter('date');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'date'
  });
  
});

test('should generate set text filter action object without provided value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('testing sort by date filter', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('testing sort by amount filter', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('testing set start date filter', () => {
  const date = moment(0);

  expect(setStartDate(date)).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('testing set end date filter', () => {
  const date = moment(100);
  expect(setEndDate(date)).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(100)
  });
});

