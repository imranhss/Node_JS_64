import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user.component',
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent implements OnInit{

  userForm!: FormGroup;
  selectedImage: File | null = null;
  message = '';


  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ){
 this.userForm = this.fb.group({

    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],   


  });


  }



  ngOnInit(): void {

    
  }


   onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
    }
  }


  onSubmit(){

     if (this.userForm.invalid || !this.selectedImage) {
      this.message = 'Please fill all fields and upload an image.';
      return;
    }

    const userData = new FormData();

    Object.keys(this.userForm.controls).forEach(key => {
      userData.append(key, this.userForm.get(key)?.value);
    });

     userData.append('photo', this.selectedImage as Blob);

     this.userService.saveUser(userData).subscribe({
      next: (data)=>{
        this.message= "User data Saved";
        this.userForm.reset();
        this.selectedImage = null;

      },

      error: (errr)=>{
        console.log(errr);
        this.message= '❌ Failed to add User';
      }




     });



  }







}
