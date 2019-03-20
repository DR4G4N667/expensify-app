import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
// import { editExpense } from '../../actions/expenses';

test('should set default state', () => {
  const action = {type: '@@INIT'};
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should add expense', () => {
  const currentState = expenses;
  const action = { 
    type: 'ADD_EXPENSE',   
    expense: {
      text: 'some text',
      note: 'some note',
      sortBy: 'date',
      value: '123',
      createdAt: '1000'
    } 
  };
  const state = expensesReducer(currentState, action );
  expect(state).toEqual([...expenses, action.expense])
});

test('should remove expense', () => {
  const currentState = expenses;
  const action = { type: 'REMOVE_EXPENSE', id: '3'};
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([expenses[0], expenses[1]]);
});

test('should not remove expense if id not found', () => {
  const currentState = expenses;
  const action = { type: 'REMOVE_EXPENSE', id: '4'};
  const state = expensesReducer(currentState, action);
  expect(state).toEqual(expenses);
});

test('should edit expense', () => {
  const currentState = expenses;
  const action = { 
    type: 'EDIT_EXPENSE',
    id: '3',
    updates: {
      amount: '3'
    }
  }
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([expenses[0], expenses[1], {...expenses[2], ...action.updates}]);
});

test('should not edit expense if id not found', () => {
  const currentState = expenses;
  const action = { 
    type: 'EDIT_EXPENSE',
    id: '7',
    updates: {
      amount: '667'
    }
  }
  const state = expensesReducer(currentState, action);
  expect(state).toEqual(expenses);
});

