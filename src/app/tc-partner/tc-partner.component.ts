import { Component, OnInit, Input } from '@angular/core';
import {TestcaseService} from '../testcase.service';
import {Partner} from './partner';
import { RequestOptions, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-tc-partner',
  templateUrl: './tc-partner.component.html',
  styleUrls: ['./tc-partner.component.scss']
})
export class TcPartnerComponent implements OnInit {

  @Input() partner: Partner;
  selectedPartner: Partner;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  constructor(private testcaseService: TestcaseService) { }

  partners: Partner[];

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      // autoWidth: true
      // pageLength: 1
    };
    this.getData();
  }
   getData(): void {
    this.getPartner();
    this.partner = new Partner;
    this.selectedPartner = new Partner;
   }
  getPartner(): void {
    this.testcaseService.getPartner()
      .subscribe(partners => { this.partners = partners;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  onSelect(partner: Partner): void {
    this.selectedPartner = partner;
    this.partner = partner; // Object.assign({}, partner);
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
    // this.getData();
  }

  delete(): void {
    this.testcaseService.deleteHero(this.partner)
      .subscribe();
    // this.getData();
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
