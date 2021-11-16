import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";

const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
