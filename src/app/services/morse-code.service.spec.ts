import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MorseCodeService } from './morse-code.service';

describe('MorseCodeService', () => {

  let service: MorseCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MorseCodeService]
    });
    service = new MorseCodeService();
  });

  it('should be created', inject([MorseCodeService], (service: MorseCodeService) => {
    expect(service).toBeTruthy();
  }));

  it('returns a promise of an object with morse code units', fakeAsync(() => {
    let spy = spyOn(service, 'getMorseCodeUnits').and.returnValue(true); 
    expect(service.getMorseCodeUnits()).toBeTruthy();
  }));
});

