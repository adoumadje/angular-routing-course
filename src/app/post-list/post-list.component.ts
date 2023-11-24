import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Array<any> = [
    {
      id: 1,
      title: 'Title 1',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ab distinctio quod earum dolorum quam!'
    },
    {
      id: 2,
      title: 'Title 2',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ab distinctio quod earum dolorum quam!'
    },
    {
      id: 3,
      title: 'Title 3',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ab distinctio quod earum dolorum quam!'
    },
    {
      id: 4,
      title: 'Title 4',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ab distinctio quod earum dolorum quam!'
    },
    {
      id: 5,
      title: 'Title 5',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ab distinctio quod earum dolorum quam!'
    }
  ]

  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((value) => {
      console.log(value)
      const page = value.get('page')
      const orderBy = value.get('orderBy')
    })
  }
}
