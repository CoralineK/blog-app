import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostListComponent } from './latest-post-list.component';

describe('LatestPostListComponent', () => {
  let component: LatestPostListComponent;
  let fixture: ComponentFixture<LatestPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
