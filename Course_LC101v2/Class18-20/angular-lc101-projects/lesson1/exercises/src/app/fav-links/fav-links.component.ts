import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    ['w3Schools', 'w3schools.com'],
    ['LaunchCode', 'education.launchcode.org']
  ]

  constructor() { }

  ngOnInit() {
  }

}
