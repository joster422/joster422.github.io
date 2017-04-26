import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoxieComponent } from './moxie.component';

describe('MoxieComponent', () => {
  let component: MoxieComponent;
  let fixture: ComponentFixture<MoxieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoxieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoxieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
