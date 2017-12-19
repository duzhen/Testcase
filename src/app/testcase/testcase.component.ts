import { Component, OnInit, Type, ViewChild, ComponentFactoryResolver, OnDestroy} from '@angular/core';
import { Testcase } from './testcase';
import { AdDirective } from '../ad.directive';
import { TestcaseService } from '../testcase.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TcPartnerComponent } from '../tc-partner/tc-partner.component';
import { TcClientComponent} from '../tc-client/tc-client.component';

@Component({
  selector: 'app-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.scss']
})
export class TestcaseComponent implements OnDestroy, OnInit {

  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(private testcaseService: TestcaseService, private componentFactoryResolver: ComponentFactoryResolver, private route: ActivatedRoute,
              private location: Location) { }
  testcaseComponet = {'partner': TcPartnerComponent,
                      'client': TcClientComponent};

  testcases: Testcase[];
  testName = 'Wefixd Test Case';

  ngOnInit() {
    this.getTestcases();
    // const id = this.route.snapshot.paramMap.get('id');
    // this.loadComponent(this.testcaseComponet[id]);
  }

  ngOnDestroy() {

  }

  gotest(id: string, name: string) {
    // const id = this.route.snapshot.paramMap.get('id');
    if(this.testcaseComponet[id]) {
      this.testName = name;
      this.loadComponent(this.testcaseComponet[id]);
    }
  }

  loadComponent(component: Type<any>, ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  getTestcases(): void {
    this.testcaseService.getTestcases()
      .subscribe(testcases => this.testcases = testcases);
  }

}
