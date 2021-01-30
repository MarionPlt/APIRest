import { Component, OnInit } from '@angular/core';
import {SearchClientRequest} from '../search-client-request';

@Component({
  selector: 'app-search-client-form',
  templateUrl: './search-client-form.component.html',
  styleUrls: ['./search-client-form.component.scss']
})
export class SearchClientFormComponent implements OnInit {


  request: SearchClientRequest;

  constructor() {
    this.request = new SearchClientRequest();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Hello caneton!', this.request);
  }
}
