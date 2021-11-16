import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [CommonModule, FormsModule, UserRoutingModule],
})
export class UserModule {}
