import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [ FormsModule ],
  standalone: true
})
export class LoginPageComponent implements OnInit {
  password!: any;
  correctPass: string = 'quierofiesta';

 constructor(private router: Router) {}

  ngOnInit(): void {
    const stored = sessionStorage.getItem('password');
    if (stored === this.correctPass) {
      this.navigateToInvitation();
    }
  }

  logPassword() {
    if (this.password.toLowerCase() === this.correctPass) {
      sessionStorage.setItem('password', this.password.toLowerCase());
      this.navigateToInvitation();
    }else {
      this.password = '';
    }
  }

  navigateToInvitation() {
   this.router.navigateByUrl('invitacion');
  }
}
