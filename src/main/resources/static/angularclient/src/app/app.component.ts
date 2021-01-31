import {Component} from '@angular/core';
import {SearchClientRequest} from './search-client-request';
import {ClientService} from './service/client.service';
import {Client} from './Model/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  clients: Client[];

  constructor(private clientService: ClientService) {
    this.title = 'Projet Web Communication : API Rest';
    this.clients = [];
  }
  onSearch(request: SearchClientRequest): void{
    this.clientService.search(request).subscribe(result => this.clients = result);
  }
}

