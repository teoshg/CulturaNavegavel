import { DatabaseService } from './../../service/database.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

 

  constructor(
    private databaseService: DatabaseService ,
    private fb: FormBuilder,
    private http: HttpClient

  ) {
      this.contactForm = new FormGroup({ 
        menssagem: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(560)]),
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.pattern(this.isEmail)]),
        
      })
    }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.contactForm.value)
    const response = await this.databaseService.addBase(this.contactForm.value);
    console.log(response);
  }

  isValidField(field:string): string {
    const validatedField = this.contactForm.get(field);
    return (validatedField?.valid && validatedField?.touched)
    ? 'is-valid' : validatedField?.touched ? 'is-invalid' : '' ;

  }
  
}


