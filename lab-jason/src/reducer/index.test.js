import reducer from './';
import deepFreeze from 'deep-freeze';

const defaultState ={
  categories: [],
};

test('initial state should have all reducers', () =>{
  let res = reducer();
  expect(res).toEqual(defaultState);
});
