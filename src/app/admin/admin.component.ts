
import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Picture } from './../models/Picture';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pics: any;

  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) { 
  }

  
  ngOnInit(): void {
    this.apiService.getEmployees().subscribe(x => {
      this.pics = [];
      this.pics = x;
      console.log(this.pics)
    })
  }

  
}
