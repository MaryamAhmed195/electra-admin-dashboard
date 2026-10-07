import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { HttpTestingController } from '@angular/common/http/testing';
describe('CategoryService', () => {
  let service: CategoryService;
  let httpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CategoryService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const request = httpTesting.expectOne('/data/categories.json');
    request.flush([
      { id: 1, name: 'Audio' },
      { id: 2, name: 'Laptops' },
      { id: 3, name: 'Phones' },
    ]);
    expect(service).toBeTruthy();
  });
});
