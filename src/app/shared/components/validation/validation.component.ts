import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit, AfterContentInit {

  @ContentChild(NgModel) model!: NgModel;
  @ContentChild(FormControlName) control!: FormControlName;
  
  private input: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control;
    if (this.input == undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
    }
  }

  public hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
