import { Component } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Client} from '../model/Client';

@Component({
  selector: 'app-new-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {
  newClient: { nom: string; email: string } = {
    nom: '',
    email: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private clientsService: ClientsService) {}

  onSubmit() {
    this.clientsService.addClient(this.newClient).subscribe({
      next: (client) => {
        this.successMessage = "Client ajouté avec succès : " + client.nom;
        this.errorMessage = '';
        this.newClient = { nom: '', email: '' }; // réinitialiser le formulaire
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = "Erreur lors de l'ajout du client.";
        this.successMessage = '';
      }
    });
  }
}
