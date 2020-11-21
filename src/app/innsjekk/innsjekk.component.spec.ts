import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InnsjekkComponent } from './innsjekk.component';

describe('InnsjekkComponent', () => {
  let component: InnsjekkComponent;
  let fixture: ComponentFixture<InnsjekkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnsjekkComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InnsjekkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
