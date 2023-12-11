import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Construction } from 'src/app/core/interfaces/construction.interfaces';
import { map } from 'rxjs/operators'

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private token = '1234'
  searchBar = new FormControl('');
  constructions = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchFunction()
  }

  searchFunction() {
    this.searchBar.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(query => {
        if (query !== null) {
          this.getConstructionsByQuery(query);
        }
      });
  }

  getConstructionsByQuery(query: string) {
    this.http.get('aquí la web de la api', {
      params: new HttpParams()
        .set('access_token, this.token', this.token)
        .set('q', query)
    }).pipe(
      map((result: any) => result.response.constructions.map((construction: Construction) => construction.name))
    )
      .subscribe(result => {
        this.constructions = result;
      })
  }
}


