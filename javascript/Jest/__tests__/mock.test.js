test("mock function", () => {
  const mocker = jest.fn((person) => `Hello ${person}`);
  expect(mocker("Ahmed")).toBe("Hello Ahmed");
  expect(mocker("Ali")).toBe("Hello Ali");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(2);
  expect(mocker).toHaveBeenCalledWith("Ali");
});
