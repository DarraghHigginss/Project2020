import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalwayPage } from './galway.page';

describe('GalwayPage', () => {
  let component: GalwayPage;
  let fixture: ComponentFixture<GalwayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalwayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalwayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
