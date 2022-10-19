import { Component, OnInit } from '@angular/core';
import { Continents } from '../continents';
import { ContinentsService } from '../continents.service';
import { Search} from './search';

@Component({
  selector: 'app-tous-les-continents',
  templateUrl: './tous-les-continents.component.html',
  styleUrls: ['./tous-les-continents.component.css']
})
export class TousLesContinentsComponent implements OnInit {

  constructor(private continentService: ContinentsService) { }

  continent: Continents[] = [];
  search:Search = {code:'', lang:'',kw:''};

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(){
    this.continentService.get(this.search).subscribe((data) => {
      this.continent = data;
      console.log(data);
    });
  }
}
