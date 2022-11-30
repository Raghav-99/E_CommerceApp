import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdispatchComponent } from './itemdispatch.component';

describe('ItemdispatchComponent', () => {
  let component: ItemdispatchComponent;
  let fixture: ComponentFixture<ItemdispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemdispatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
