import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UmdiauruguaiService } from './services/umdiauruguai.service';
import { Component, Input, OnInit } from '@angular/core';
import Umdiauruguai from './interfaces/umdiauruguai.interface';

@Component({
  selector: 'app-umdiauruguai',
  templateUrl: './umdiauruguai.component.html',
  styleUrls: ['./umdiauruguai.component.css']
})
export class UmdiauruguaiComponent implements OnInit {
  @Input() currentUserId!: string;

  activeUmdiauruguai: Umdiauruguai | null = null;
  umdiauruguai: Umdiauruguai[] = [];
  umdiauruguaiForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  
  

  constructor(
    private umdiauruguaiService: UmdiauruguaiService,
    private fb: FormBuilder,
    private http: HttpClient

  ) { 
    
    
    this.umdiauruguaiForm = new FormGroup({
      mensagem: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(560)]),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.isEmail)]),
        
    })
  }

  ngOnInit(): void {
    this.umdiauruguaiService.getUmdiauruguai().subscribe(umdiauruguai => {
      this.umdiauruguai = umdiauruguai;
    })
  }

  

  async onSubmit() {
    const response = await this.umdiauruguaiService.addUmdiauruguai(this.umdiauruguaiForm.value);
    console.log(response);
  }

  isValidField(field:string): string {
    const validatedField = this.umdiauruguaiForm.get(field);
    return (validatedField?.valid && validatedField?.touched)
    ? 'is-valid' : validatedField?.touched ? 'is-invalid' : '' ;

  }

  deleteUmdiauruguai(commentId: string): void {
    this.umdiauruguaiService.deleteUmdiauruguai(commentId).subscribe(() => {
      this.umdiauruguai = this.umdiauruguai.filter(
        (comment) => comment.id !== commentId
      );
    });
  }

  setActiveUmdiauruguai(activeUmdiauruguai: Umdiauruguai | null): void {
    this.activeUmdiauruguai = activeUmdiauruguai;
  }

  addUmdiauruguai({
    text,
    parentId,
  }: {
    text: string;
    parentId: string | null;
  }): void {
    this.umdiauruguaiService
      .createUmdiauruguai(text, parentId)
      .subscribe((createdComment) => {
        this.umdiauruguai = [...this.umdiauruguai, createdComment];
        this.activeUmdiauruguai = null;
      });
  }

  getRootUmdiauruguai(): Umdiauruguai[] {
    return this.umdiauruguai.filter((comment) => comment.parentId === null);
  }

  getReplies(commentId: string): Umdiauruguai[] {
    return this.umdiauruguai
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  }

}
