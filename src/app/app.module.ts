import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComposeComponent } from './compose/compose.component';
import { DraftComponent } from './draft/draft.component';
import { SendComponent } from './send/send.component';

const appRoutes: Routes = [
  { path: '', component: ComposeComponent },
  { path: 'draft', component: DraftComponent },
  { path: 'send', component: SendComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ComposeComponent,
    DraftComponent,
    SendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // for debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
