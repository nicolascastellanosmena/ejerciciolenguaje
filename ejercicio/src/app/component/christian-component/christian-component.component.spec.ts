import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristianComponentComponent } from './christian-component.component';

describe('ChristianComponentComponent', () => {
  let component: ChristianComponentComponent;
  let fixture: ComponentFixture<ChristianComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChristianComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChristianComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
