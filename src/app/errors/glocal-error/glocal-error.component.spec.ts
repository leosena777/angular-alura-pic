import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlocalErrorComponent } from './glocal-error.component';

describe('GlocalErrorComponent', () => {
  let component: GlocalErrorComponent;
  let fixture: ComponentFixture<GlocalErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlocalErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlocalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
