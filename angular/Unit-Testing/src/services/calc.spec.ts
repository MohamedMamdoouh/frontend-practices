import { TestBed } from '@angular/core/testing';
import { CalcService as CalcService } from './calc';
import { SharedService } from './shared-service';

describe('calc service unit tests', () => {
  let sharedService: SharedService;
  let calc: CalcService;

  beforeEach(() => {
    // sharedService = new SharedService();
    // calc = new Calc(sharedService);

    TestBed.configureTestingModule({
      providers: [SharedService, { provide: CalcService, useClass: CalcService }],
    });

    sharedService = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  });

  it('should multiply two numbers', () => {
    // const sharedService = new SharedService();
    // const calc = new Calc(sharedService);
    const result = calc.multiply(2, 3);
    expect(result).toBe(6);
  });

  it("should call the shared service's mySharedFunction method", () => {
    // const sharedService = new SharedService();
    // const sharedService = { mySharedFunction: vi.fn() };
    vi.spyOn(sharedService, 'mySharedFunction');
    // const calc = new Calc(sharedService);
    calc.multiply(2, 3);
    expect(sharedService.mySharedFunction).toHaveBeenCalled();
  });
});
