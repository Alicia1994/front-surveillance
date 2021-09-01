import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlePostComponent } from './handle-post.component';

describe('HandlePostComponent', () => {
  let component: HandlePostComponent;
  let fixture: ComponentFixture<HandlePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
