import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicoComponentComponent } from './nico-component.component';

describe('NicoComponentComponent', () => {
  let component: NicoComponentComponent;
  let fixture: ComponentFixture<NicoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NicoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NicoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
