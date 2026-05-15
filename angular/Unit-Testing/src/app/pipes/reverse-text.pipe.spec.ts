import { ReverseTextPipe } from './reverse-text.pipe';

describe('ReverseTextPipe', () => {
  let pipe: ReverseTextPipe;

  beforeEach(() => {
    pipe = new ReverseTextPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reverse the provided text', () => {
    expect(pipe.transform('Angular')).toBe('ralugnA');
  });

  it('should return an empty string for nullish input', () => {
    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform(null)).toBe('');
  });
});