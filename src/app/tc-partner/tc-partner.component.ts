import { Component, OnInit, Input } from '@angular/core';
import {TestcaseService} from '../testcase.service';
import {Partner} from './partner';
import { RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-tc-partner',
  templateUrl: './tc-partner.component.html',
  styleUrls: ['./tc-partner.component.scss']
})
export class TcPartnerComponent implements OnInit {

  @Input() partner: Partner;
  selectedPartner: Partner;

  constructor(private testcaseService: TestcaseService) { }

  partners: Partner[];

  ngOnInit() {
    this.getPartner();
    this.partner = new Partner;
    this.selectedPartner = new Partner;
  }

  getPartner(): void {
    this.testcaseService.getPartner()
      .subscribe(partners => this.partners = partners);
  }

  onSelect(partner: Partner): void {
    this.selectedPartner = partner;
    this.partner = Object.assign({}, partner);
  }

  add(): void {
    this.partner = new Partner;
    this.selectedPartner = new Partner;
  }

  clear(): void {
    this.partner = Object.assign({}, this.selectedPartner);
  }

  save(): void {
    this.testcaseService.addPartner(this.partner)
      .subscribe();
    this.ngOnInit();
  }

  delete(): void {
    this.testcaseService.deleteHero(this.partner)
      .subscribe();
    this.ngOnInit();
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        const file: File = fileList[0];
        const formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        const headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        this.testcaseService.uploadFile(formData, headers);
    }
}
}
