import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-thirukural-search',
  templateUrl: './thirukural-search.component.html',
  styleUrls: ['./thirukural-search.component.css']
})
export class ThirukuralSearchComponent {
  searchTerm!:string;
  kural: any;

  constructor(private http: HttpClient) {}

search() {
  if (this.searchTerm) {
    const apiUrl = `https://api-thirukkural.vercel.app/api?num=${this.searchTerm}`;
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response);
        this.kural = response;
      },
      (error) => {
        console.log(error);
        alert('Sorry! Only 1330 kurals available in Thirukural');
      }
    );
  } 
}


clear() {
  this.searchTerm = ''; // Clear the search term
  this.kural = null; // Clear the kural object
}
}
