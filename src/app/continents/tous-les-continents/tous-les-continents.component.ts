import { Component, OnInit } from '@angular/core';
import { Continents } from '../continents';
import { ContinentsService } from '../continents.service';

@Component({
  selector: 'app-tous-les-continents',
  templateUrl: './tous-les-continents.component.html',
  styleUrls: ['./tous-les-continents.component.css']
})
export class TousLesContinentsComponent implements OnInit {

  constructor(private continentService: ContinentsService) { }

  continent: Continents[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.continentService.get().subscribe((data) => {
      this.continent = data;
      console.log(data);
    });
  }

}
