import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScribeService } from './../service/scribe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  scribeForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;



  constructor(
    private scribeService: ScribeService,
  ) { 

    this.scribeForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      emaill: new FormControl(null, [Validators.required, Validators.pattern(this.isEmail)]),

    })
  }

  ngOnInit(): void {
  }

    async onSubmit() {
    console.log(this.scribeForm.value)
    const response = await this.scribeService.addScribe(this.scribeForm.value);
    console.log(response);
  }

  isValidField(field:string): string {
    const validatedField = this.scribeForm.get(field);
    return (validatedField?.valid && validatedField?.touched)
    ? 'is-valid' : validatedField?.touched ? 'is-invalid' : '' ;

  }

}
