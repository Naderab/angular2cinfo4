import { TestBed } from '@angular/core/testing';

import { ProductConsumerService } from './product-consumer.service';

describe('ProductConsumerService', () => {
  let service: ProductConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
