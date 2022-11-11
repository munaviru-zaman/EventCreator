import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedEventsComponent } from './deleted-events/deleted-events.component';
import { EventAdderComponent } from './event-adder/event-adder.component';
import { EventTableComponent } from './event-table/event-table.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'eventAdder', component: EventAdderComponent },
  { path: 'events', component: EventTableComponent },
  { path: 'deletedevents', component: DeletedEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
