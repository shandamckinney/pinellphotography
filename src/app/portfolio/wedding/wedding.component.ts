import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {
  pictures: any;
  weddingPictures: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEmployees().subscribe(x => {
      this.pictures = [];
      this.weddingPictures = [];
      this.pictures = x;
      console.log('all pictures: ', this.pictures)
      this.weddingPictures = this.pictures.filter(x => x.category === "'Wedding");
      this.weddingPictures.forEach(x => x.path = ('../../../assets/images/' + x.path))
    })
  }

}
