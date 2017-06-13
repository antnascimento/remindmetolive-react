import buildSrc from './buildSrc';

describe('buildSrc', () => {
  it('should build the src', () => {
    expect(buildSrc("the-dir/", "image", "01", "1200")).toEqual("the-dir/image-01-1200.jpg");
  });
});
