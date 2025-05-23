import { Component, OnInit } from '@angular/core';
import { ConnectLinks } from '../interfaces/ConnectLinks';
import { ConnectLinksService } from '../services/connect-links.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  links: ConnectLinks;
  SignupForm!: FormGroup;

  constructor(private connectLinks: ConnectLinksService) {
    this.SignupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'message': new FormControl(null, [Validators.required]),
      }),
    });

    this.links = connectLinks.getConnectLinks();

  }
  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.SignupForm);
  }

}
