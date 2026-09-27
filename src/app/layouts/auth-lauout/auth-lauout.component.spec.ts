import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLauoutComponent } from './auth-lauout.component';

describe('AuthLauoutComponent', () => {
  let component: AuthLauoutComponent;
  let fixture: ComponentFixture<AuthLauoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLauoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLauoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
