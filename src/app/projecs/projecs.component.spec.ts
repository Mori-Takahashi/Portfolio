import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecsComponent } from './projecs.component';

describe('ProjecsComponent', () => {
  let component: ProjecsComponent;
  let fixture: ComponentFixture<ProjecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjecsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
