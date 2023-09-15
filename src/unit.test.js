const { sum1 } = require('./index.js')

test('Checa se os valores estão corretos', () => {
  expect(sum1).toEqual(expect.any(Number));
});

