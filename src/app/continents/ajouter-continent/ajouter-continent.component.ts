import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContinentsService } from '../continents.service';
import { CreateOrUpdateContinent } from '../create-or-update-continent';

@Component({
  selector: 'app-ajouter-continent',
  templateUrl: './ajouter-continent.component.html',
  styleUrls: ['./ajouter-continent.component.css']
})
export class AjouterContinentComponent implements OnInit {

  constructor(
    private continentService:ContinentsService, private router:Router
  ) { }

  continent: CreateOrUpdateContinent = {
    code:'',
    name:'',
  };

  ngOnInit(): void {
  }
  create(){
    this.continentService.create(this.continent).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
