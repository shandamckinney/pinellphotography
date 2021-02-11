import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Picture } from 'src/app/models/Picture';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  pic: Picture;
  submitted = false;
  employeeForm: FormGroup;
  id: string;
  
  constructor(private route: ActivatedRoute, 
    private apiService: ApiService, 
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone) {
      this.mainForm();
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.apiService.getEmployee(this.id).subscribe(x => {
      this.pic = x;
      console.log(this.pic)
    })
  }

  mainForm(){
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      path: ['', [Validators.required]],
      category: ['', [Validators.required]]
      
    })
  }
  // Getter to access form control
  get myForm(){
    return this.employeeForm.controls;
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.employeeForm.get('category').setValue(e, {
      onlySelf: true
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.pic.name = this.employeeForm.value.name;
      this.pic.path = this.employeeForm.value.path;
      this.pic.category = this.employeeForm.value.category;
      this.pic._id = this.id;
      this.apiService.updateEmployee(this.id, this.pic).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.router.navigateByUrl('/admin');
        }, (error) => {
          console.log(error);
        });
    }
  }

  deleteImage(){
    this.apiService.deleteEmployee(this.id).subscribe(x => {
      if(x){
        this.router.navigateByUrl('/admin');
      }
    })
  }

}
