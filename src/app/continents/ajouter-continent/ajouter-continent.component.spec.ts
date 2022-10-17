import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterContinentComponent } from './ajouter-continent.component';

describe('AjouterContinentComponent', () => {
  let component: AjouterContinentComponent;
  let fixture: ComponentFixture<AjouterContinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterContinentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
