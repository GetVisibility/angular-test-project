import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlpConfigurationComponent } from './dlp-configuration.component';

describe('DlpConfigurationComponent', () => {
  let component: DlpConfigurationComponent;
  let fixture: ComponentFixture<DlpConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlpConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlpConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
