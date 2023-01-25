import { Component, OnInit } from '@angular/core';
import { APIsService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-umovies',
  templateUrl: './umovies.component.html',
  styleUrls: ['./umovies.component.css'],
})
export class UmoviesComponent implements OnInit {
  movielist: any;
  loading = true;
  page: number = 1;

  constructor(private movie: APIsService) {
    // movies() {
    this.movie.fetchmovies().subscribe(
      (data: any) => {
        this.loading = false;
        console.log(data);
        // console.log(data.items);
        this.movielist = data;
      },
      (error: any) => {
        this.loading = false;
        console.log(error);
        alert('failed to reach endpoint');
      }
    );
    // }
  }

  ngOnInit(): void {}
}
