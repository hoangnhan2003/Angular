import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}

