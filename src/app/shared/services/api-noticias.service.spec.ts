import { TestBed } from '@angular/core/testing';

import { ApiNoticiasService } from './api-noticias.service';

describe('ApiNoticiasService', () => {
  let service: ApiNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
