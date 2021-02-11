import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('myCarousel', {static: false}) myCarousel;

  images = [
    '../../../assets/images/KaitlynTyler1.jpg',
    '../../../assets/images/KaitlynTyler2.jpg',
    '../../../assets/images/KaitlynTyler3.jpg'
  ]
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getEmployees().subscribe(x => {
      console.log(x);
    })
  }

  next() {
    this.myCarousel.next();
  }

}
