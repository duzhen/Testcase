import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {TestcaseService} from '../testcase.service';
import {Partner} from './partner';
import { RequestOptions, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import {MatSnackBar} from '@angular/material';
import { DataTableDirective } from 'angular-datatables';
import { Options, ImageResult } from 'ngx-image2dataurl';

@Component({
  selector: 'app-tc-partner',
  templateUrl: './tc-partner.component.html',
  styleUrls: ['./tc-partner.component.scss']
})
export class TcPartnerComponent implements OnInit {
  src: string = null;
  options: Options = {
    resize: {
      maxHeight: 128,
      maxWidth: 128
    },
    allowedExtensions: ['JPG', 'PnG'],
  };

  @Input() partner: Partner;
  selectedPartner: Partner;
  dtOptions: any = {};
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  constructor(public snackBar: MatSnackBar, private testcaseService: TestcaseService) { }

  partners: Partner[];

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      select: true,
      autoWidth: true
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
    if (this.partner.id) {
      this.selectedPartner.first_name = this.partner.first_name;
      this.selectedPartner.last_name = this.partner.last_name;
      this.selectedPartner.phone = this.partner.phone;
      this.selectedPartner.area_code = this.partner.area_code;
      this.selectedPartner.photo_id = this.partner.photo_id;
      this.selectedPartner.photo = this.partner.photo;
      const d = [this.partner.id, this.partner.first_name, this.partner.last_name,
        this.partner.phone, this.partner.area_code, this.partner.photo_id];
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.row('.selected')
          .data(d);
      const p = dtInstance.page();
      dtInstance.page(p).draw('page');
      });
    } else {
      this.rerender();
    }
    this.snackBar.open('Save successful!', '', { duration: 3000 });
  }

  delete(): void {
    this.testcaseService.deletePartner(this.partner)
      .subscribe();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.rows( '.selected' )
      .remove();
      const p = dtInstance.page();
      dtInstance.page(p).draw('page');
    });
    this.add();
    this.snackBar.open('Delete successful!', '', {duration: 3000});
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // const p = dtInstance.page();
      // // Call the dtTrigger to rerender again
      this.getData();
      // this.dtElement.dtInstance.then((dtInstance1: DataTables.Api) => {
      //   dtInstance1.page(p).draw( 'page' );
      // });
    });
  }

  // fileChange(event) {
  //   const fileList: FileList = event.target.files;
  //   if (fileList.length > 0) {
  //       const file: File = fileList[0];
  //       const formData: FormData = new FormData();
  //       formData.append('uploadFile', file, file.name);
  //       const headers = new Headers();
  //       headers.append('Content-Type', 'multipart/form-data');
  //       headers.append('Accept', 'application/json');
  //       this.testcaseService.uploadFile(formData, headers);
  //   }
  // }

  selected(imageResult: ImageResult) {
    if (imageResult.error) {
      alert(imageResult.error);
    }
    const file: File = imageResult.file;
    this.partner.photo_id = file.name;
    // this.partner.phone = imageResult.file
    // console.log(imageResult.file);
    // const myReader: FileReader = new FileReader();

    // myReader.onloadend = (e) => {
    //   // this.partner.photo = myReader.result;
    //   // console.log(this.partner.photo);
    // };
    // myReader.readAsDataURL(file);
    // const formData: FormData = new FormData();
    //     formData.append('uploadFile', file, file.name);
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Accept', 'application/json');
    //     this.testcaseService.uploadFile(formData, headers);
    this.partner.photo = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
  }
}
