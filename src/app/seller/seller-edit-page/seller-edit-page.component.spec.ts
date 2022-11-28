import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerEditPageComponent } from './seller-edit-page.component';

describe('SellerEditPageComponent', () => {
  let component: SellerEditPageComponent;
  let fixture: ComponentFixture<SellerEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
