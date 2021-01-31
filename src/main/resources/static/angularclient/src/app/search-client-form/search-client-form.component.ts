import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchClientRequest} from '../search-client-request';
import {ClientService} from '../service/client.service';

@Component({
  selector: 'app-search-client-form',
  templateUrl: './search-client-form.component.html',
  styleUrls: ['./search-client-form.component.scss']
})
export class SearchClientFormComponent implements OnInit {
  @Output() search = new EventEmitter<SearchClientRequest>();
  request: SearchClientRequest;

  constructor() {
    this.request = new SearchClientRequest();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.search.emit(this.request);
  }
}
