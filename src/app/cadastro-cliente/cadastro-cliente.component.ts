import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css'],
})
export class CadastroClienteComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.generateForm();
  }

  public submit(): void{
    if(this.form.valid){
      //submit
    }
    else{
      this.verificarFormulario(this.form);
    }
  }

  private verificarFormulario(formGroup: FormGroup): void{
    Object.keys(formGroup.controls).forEach(controlName =>{
      let controle = formGroup.get(controlName);
      controle?.markAsDirty();
      if(controle instanceof FormGroup)
      {
        this.verificarFormulario(controle);
      }
    });
  }

  private generateForm(): void {
    this.form = this.formBuilder.group({
      email: [{ value: '', disabled: false }, Validators.required],
      senha: [{value: '', disabled: false}, Validators.required],
    });
  }
}
