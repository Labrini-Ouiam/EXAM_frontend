import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsService } from '../services/clients.service';
import { OnInit } from '@angular/core';
import {Client} from '../model/Client';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule], // <-- Ajoute CommonModule ici
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.getClients().subscribe({
      next: (data) => this.clients = data,
      error: (err) => console.error('Erreur lors de la récupération des clients :', err)
    });
  }
}
