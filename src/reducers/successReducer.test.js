import successReducer from './successReducer';
import { actionTypes } from '../actions';

test('returns default state when no action type is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
})
test('returns true state if action type of CORRECT_GUESS is passed', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
})