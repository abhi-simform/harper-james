import { Component, OnInit } from '@angular/core';
import { clients } from '../../data/clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients = clients;
  constructor() {}

  ngOnInit(): void {}
}
