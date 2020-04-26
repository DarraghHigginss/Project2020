import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WestPage } from './west.page';

describe('WestPage', () => {
  let component: WestPage;
  let fixture: ComponentFixture<WestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
