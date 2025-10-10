import { mainFunction } from './function';
import * as helperModule from './helper';

describe('mainFunction', () => {
  it('should call helperFunction and return correct reult', () => {
    const spy = jest.spyOn(helperModule, 'helperFunction');
    const result = mainFunction(5);

    expect(spy).toHaveBeenCalledWith(10);
    expect(result).toBe(30);
  });
});
