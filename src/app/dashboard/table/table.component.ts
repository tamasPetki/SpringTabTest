import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../shared/server.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs', 'protein'];
  dataSource = this.server.products;


  constructor(public server: ServerService) { }

  ngOnInit() {
  }

}
