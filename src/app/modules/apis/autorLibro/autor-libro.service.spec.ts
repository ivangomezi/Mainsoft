import { TestBed } from '@angular/core/testing';

import { AutorLibroService } from './autor-libro.service';

describe('AutorLibroService', () => {
  let service: AutorLibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorLibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
