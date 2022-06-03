import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  getAllTeams() {
    return [
      {name: 'Fiança', headcount : 12, budget: 140000, installedHeadcount: 12, installedCost: 138060},
      {name: 'Emissão', headcount : 7, budget: 105000, installedHeadcount: 6, installedCost: 118050.80},
      {name: 'Sinistro', headcount : 10, budget: 110000, installedHeadcount: 8, installedCost: 90240.70},
      {name: 'Celular', headcount : 8, budget: 120500, installedHeadcount: 8, installedCost: 121432.82},
      {name: 'Squad Cadastro/LGPD', headcount : 8, budget: 120500, installedHeadcount: 8, installedCost: 121432.82},
      {name: 'Squad OPIN', headcount : 8, budget: 120500, installedHeadcount: 8, installedCost: 121432.82},
    ]
  }
}
