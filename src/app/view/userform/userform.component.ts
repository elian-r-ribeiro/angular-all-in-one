import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email : new FormControl('', [Validators.required, Validators.email])
  });
  
  sendForm(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }else{
      console.log(this.userForm.value);
      this.userForm.reset({
        name : (''),
        email : ('')
      })
    }
  }
}
