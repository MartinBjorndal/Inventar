import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtsjekketComponent } from './utsjekket.component';

describe('UtsjekketComponent', () => {
  let component: UtsjekketComponent;
  let fixture: ComponentFixture<UtsjekketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtsjekketComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtsjekketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
