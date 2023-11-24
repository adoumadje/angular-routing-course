import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-routing';

  constructor( private router:Router) { }

  ngOnInit(): void {
    const obsTest$ = new Observable( observer => {
      observer.next('Returned from Observable')
      observer.next('This is the second Return from Observable')
      observer.next('This is the third Return from Observable')
    }).subscribe((value) => {
      console.log(value)
      
    })

    obsTest$.unsubscribe()
  }

  onSubmit() {
    // this.router.navigate(['/posts'])
    // this.router.navigate(['/post', 1, 'postTitle'])
    this.router.navigate(['/posts', { queryParams: { page: 1, orderBy: 'newest' } }])
  }
}
