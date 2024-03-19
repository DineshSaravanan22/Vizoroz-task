import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelbuttonComponent } from './cancelbutton.component';

describe('CancelbuttonComponent', () => {
  let component: CancelbuttonComponent;
  let fixture: ComponentFixture<CancelbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
