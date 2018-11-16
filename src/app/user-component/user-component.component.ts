import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  name = "";
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params.name;
  }

}
