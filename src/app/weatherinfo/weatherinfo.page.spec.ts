import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherinfoPage } from './weatherinfo.page';

describe('WeatherinfoPage', () => {
  let component: WeatherinfoPage;
  let fixture: ComponentFixture<WeatherinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
