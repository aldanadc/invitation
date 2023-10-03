import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private router: Router) {}

  title = 'invitation';
  dDay = new Date('2023-12-16T12:00:00.000Z');
  now = new Date();
  difference!: number;

  ngOnInit(): void {
    const stored = sessionStorage.getItem('password');
    if (stored !== 'quierofiesta') {
      this.router.navigateByUrl('login');
    }else {
      this.difference = this.dateDifferenceInDays(this.dDay, this.now);
    }
  }

  dateDifferenceInDays(a: Date, b: Date) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
}
