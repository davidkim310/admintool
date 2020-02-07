import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/login',
      name: 'Login',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ]
  ngOnInit() {
  }

}

interface Nav {
  link: string,
  name: string,
  exact: boolean
}