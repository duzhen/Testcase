import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TestcaseService} from './testcase.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// import { HeroSearchComponent } from './hero-search/hero-search.component';
import { AdDirective } from './ad.directive';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule} from '@angular/material';
import { TcPartnerComponent } from './tc-partner/tc-partner.component';
import { LoginComponent } from './login/login.component';
import { TestcaseComponent } from './testcase/testcase.component';
import { TcClientComponent } from './tc-client/tc-client.component';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { ImageToDataUrlModule } from 'ngx-image2dataurl';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    LoginComponent,
    TestcaseComponent,
    TcPartnerComponent,
    TcClientComponent,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    DataTablesModule,
    ImageToDataUrlModule
  ],
  providers: [TestcaseService],
  entryComponents: [TcPartnerComponent, TcClientComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
