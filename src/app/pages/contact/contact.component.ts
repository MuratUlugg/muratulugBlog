import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { HelperService } from 'src/app/services/helper-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean;
  success: boolean;
  info: string;

  constructor(public helperService: HelperService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  getValidationMessage(f: AbstractControl, name: string) {
    if (f.errors) {
      for (let errorName in f.errors) {
        if (errorName == 'required') {
          return `${name} Alanı Boş Bırakılamaz !!!  `;
        } else if (errorName == 'email') {
          return `${name} Alanı Mail Formatı Doğru Değil !!!  `;
        } else if (errorName == 'minlength') {
          return `${name} Alanı En Az 10 Karakter Olmalıdır !!!  `;
        }
      }
    }
  }

  get getControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.loading = true;
      this.helperService.sendContactEmail(this.contactForm.value).subscribe(
        (data) => {
          this.loading = false;
          this.success = true;
          this.contactForm.reset();
          this.info =
            'Mesajınız tarafımıza ulaşmıştır . En kısa süre içersinde dönüş sağlayacağız.';
        },
        (error) => {
          this.loading = false;
          this.success = false;
          this.info = 'Bir hata oluştu daha sonra tekrar deneyiniz .';
        }
      );
    } else {
      return false;
    }
  }
}
