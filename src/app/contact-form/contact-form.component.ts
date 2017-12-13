import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  countries;

  constructor(private router: Router, public service: CountriesService) { }

  ngOnInit() {
    this.service.getCountries()
    .subscribe(countries => this.countries = countries);
  }

  askMeaQuestion(contactForm) {
    console.log(contactForm);
  }
}
