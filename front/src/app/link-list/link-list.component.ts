import {Component, OnInit} from '@angular/core';
import {Link} from '../types';
import { Apollo } from 'apollo-angular';
import { ALL_LINKS_QUERY, AllLinkQueryResponse } from '../graphql';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  // linksToRender: Link[] = [
  //   {
  //     id: '1',
  //     firstName: 'coucou',
  //     lastName: 'do'
  //   },
  //   {
  //     id: '2',
  //     firstName: 'kiki',
  //     lastName: 'dou'
  //   }
  // ];

  allLinks: Link[] = [];
  loading = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({ query: ALL_LINKS_QUERY })
      .valueChanges.subscribe(response => {
        const data: any = response.data;
        this.allLinks = data.allPersons;
        this.loading = data.loading;
        // this.allLinks = response.data.allPersons;
        // this.loading = response.data.loading;
      });
  }
}
