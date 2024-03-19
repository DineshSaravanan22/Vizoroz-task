import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommomformComponent } from './commomform.component';

describe('CommomformComponent', () => {
  let component: CommomformComponent;
  let fixture: ComponentFixture<CommomformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommomformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommomformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
