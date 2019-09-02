import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTrackDataComponent } from './player-track-data.component';

describe('PlayerTrackDataComponent', () => {
  let component: PlayerTrackDataComponent;
  let fixture: ComponentFixture<PlayerTrackDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTrackDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTrackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
