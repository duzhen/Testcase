import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcClientComponent } from './tc-client.component';

describe('TcClientComponent', () => {
  let component: TcClientComponent;
  let fixture: ComponentFixture<TcClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
