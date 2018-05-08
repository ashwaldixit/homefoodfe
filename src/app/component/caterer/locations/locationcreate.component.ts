import { CatererService } from './../../../services/caterer.service';
import { CatererLocation } from './../../../model/catererlocation.model';
import { Location } from './../../../model/location.model';
import { LocationService } from './../../../services/location.service';
import { Caterer } from './../../../model/caterer.model';
import { Category } from './../../../model/category.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'location',
  templateUrl: './locationcreate.component.html',
  styleUrls : ['./locationcreate.component.css'],
  providers:[LocationService,CatererService]
})
export class LocationCreateComponent implements OnInit{

  locations: Location[];
  catererLocation = new CatererLocation;
  catererLocations : CatererLocation[];
  
  constructor(private locationService : LocationService, private catererService : CatererService){}

  ngOnInit(){
    this.getCities();
    this.getActiveLocations() 
  }
  getCities(){
    this.locationService.getCitiesByDistict("Bengaluru").subscribe(res => this.locations=res);
  }

  getActiveLocations(){
    this.catererService.getAllActiveCatererLocations().subscribe(res => this.catererLocations=res);
  }

  create(){
    this.catererService.addCatererLocation(this.catererLocation).subscribe(res => this.getActiveLocations())
  }


  onChange(deviceValue) {
		
  }
  
  
}