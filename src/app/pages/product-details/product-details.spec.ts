import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetails } from './product-details';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
describe('ProductDetails', () => {
  let component: ProductDetails;
  let fixture: ComponentFixture<ProductDetails>;
  let httpTesting: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetails],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '1' }),
            },
          },
        },
      ],
    }).compileComponents();
    httpTesting = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ProductDetails);
    component = fixture.componentInstance;
    const request = httpTesting.expectOne('/data/products.json');
    request.flush([
      {
        id: 1,
        name: 'Sony WH-1000XM5',
        categoryId: 1,
        price: 399,
        stock: 12,
        isActive: true,
      },
    ]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
