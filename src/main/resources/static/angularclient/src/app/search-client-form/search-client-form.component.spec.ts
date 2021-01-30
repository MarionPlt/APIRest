import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClientFormComponent } from './search-client-form.component';

describe('SearchClientFormComponent', () => {
  let component: SearchClientFormComponent;
  let fixture: ComponentFixture<SearchClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClientFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
