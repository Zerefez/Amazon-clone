import money from "../../scripts/utils/money.js";

describe('test suite: Money format currency', () => {
  it('convert cents to dollars', () => {
    expect(money(2095)).toEqual('20.95');
  });
  it('work with 0', () => {
    expect(money(0)).toEqual('0.00');
  });

  describe('rounding', () => {
    it('rounds up to the nearst cent', () => {
      expect(money(2000.5)).toEqual('20.01');
    });
    it('rounds down to the nearst cent', () => {
      expect(money(2000.4)).toEqual('20.00');
    });
  });
});
