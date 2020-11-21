import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtsjekkComponent } from './utsjekk.component';

describe('UtsjekkComponent', () => {
  let component: UtsjekkComponent;
  let fixture: ComponentFixture<UtsjekkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtsjekkComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtsjekkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
