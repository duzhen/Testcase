import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcPartnerComponent } from './tc-partner.component';

describe('TcPartnerComponent', () => {
  let component: TcPartnerComponent;
  let fixture: ComponentFixture<TcPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
