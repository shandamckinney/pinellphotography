import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  pictures: any;
  weddingPictures: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
  }

}
