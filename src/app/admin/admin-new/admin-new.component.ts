
import { ApiService } from './../../services/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-new',
  templateUrl: './admin-new.component.html',
  styleUrls: ['./admin-new.component.css']
})
export class AdminNewComponent implements OnInit {
  submitted = false;
  employeeForm: FormGroup;
  EmployeeProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  pic: any;

  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) { 
    this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm(){
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      path: ['', [Validators.required]],
      category: ['', [Validators.required]]
      
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.employeeForm.get('category').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      // this.pic = [];
      // this.pic.name = this.employeeForm.value.name;
      // this.pic.path = this.employeeForm.value.path;
      // this.pic.category = this.employeeForm.value.category;
      this.apiService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log(res)
          this.router.navigateByUrl('/admin');
        }, (error) => {
          console.log(error);
        });
    }
  }

}
