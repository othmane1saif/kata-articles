import { TaxePipe } from './taxe.pipe';

describe('PricePipe', () => {
  it('create an instance', () => {
    const pipe = new TaxePipe();
    expect(pipe).toBeTruthy();
  });
});
