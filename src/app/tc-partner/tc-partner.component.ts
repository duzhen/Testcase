import { Component, OnInit, Input } from '@angular/core';
import {TestcaseService} from '../testcase.service';
import {Partner} from './partner';

@Component({
  selector: 'app-tc-partner',
  templateUrl: './tc-partner.component.html',
  styleUrls: ['./tc-partner.component.scss']
})
export class TcPartnerComponent implements OnInit {

  // @Input() partner: Partner;

  constructor(private testcaseService: TestcaseService) { }

  partners: Partner[];

  ngOnInit() {
    this.getPartner();
  }

  getPartner(): void {
    this.testcaseService.getPartner()
      .subscribe(partners => this.partners = partners);
  }
}
