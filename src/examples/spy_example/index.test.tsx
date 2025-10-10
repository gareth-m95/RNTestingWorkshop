describe('jest mock difference', () => {
  test('clearAllmocks', () => {
    const mockFn = jest.fn(() => 42);
    mockFn();
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
    jest.clearAllMocks();

    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(mockFn()).toBe(42);
  });

  test('resetAllMock', () => {
    const mockFn = jest.fn(() => 42);
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
    jest.resetAllMocks();
    expect(mockFn()).toBeUndefined();
  });

  test('restoreAllMocksl()', () => {
    const obj = {
      method: () => 42,
    };

    const spy = jest.spyOn(obj, 'method').mockImplementation(() => 7);

    expect(obj.method()).toBe(7);
    expect(spy).toHaveBeenCalledTimes(1);

    jest.restoreAllMocks();

    expect(obj.method()).toBe(42);
  });
});
