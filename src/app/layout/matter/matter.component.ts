import { Component, OnInit } from '@angular/core';
import { matters } from 'src/app/data/matter';

@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.scss'],
})
export class MatterComponent implements OnInit {
  matters = matters;
  constructor() {}

  ngOnInit(): void {}
}
