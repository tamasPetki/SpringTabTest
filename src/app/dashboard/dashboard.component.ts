import {Component, OnInit} from '@angular/core';
import {ServerService} from '../shared/server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private server: ServerService) {
    this.server.retrieveDataForChart();
    this.server.retrieveDataForTable();
  }

  ngOnInit() {
  }

}
