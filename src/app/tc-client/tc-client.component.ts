import { Component, OnInit } from '@angular/core';
import {TestcaseService} from '../testcase.service';
import {Client} from './client';

@Component({
  selector: 'app-tc-client',
  templateUrl: './tc-client.component.html',
  styleUrls: ['./tc-client.component.scss']
})
export class TcClientComponent implements OnInit {

  constructor(private testcaseService: TestcaseService) { }

  clients: Client[];

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    this.testcaseService.getClient()
      .subscribe(clients => this.clients = clients);
  }

}
