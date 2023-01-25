import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-stories',
  templateUrl: './default-stories.component.html',
  styleUrls: ['./default-stories.component.css'],
})
export class DefaultStoriesComponent implements OnInit {
  message: any =
    'Lorem ipsum dopsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque deleniti amet. Dolores ex odio corrupti. Non sit nam laborum quo sapiente, porro placeat voluptates beatae eius sunt impedit cumqueLorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque deleniti amet. Dolores ex odio corrupti. Non sit nam laborum quo sapiente, porro placeat voluptates beatae eius sunt impedit cumque porro placeat voluptates beatae eius sunt impedit cumq porro placeat voluptates beatae eius sunt impedit cumq porro placeat voluptates beatae eius sunt impedit cumq porro placeat voluptates beatae eius sunt impedit cumqporro placeat voluptates beatae eius sunt impedit cumqporro placeat voluptates beatae eius sunt impedit cumq porro placeat voluptates beatae eius sunt impedit cumq porro placeat voluptates beatae eius sunt impedit cumq porro placeat voluptates beatae eius sunt impedit cumq porro placeat voluptates beatae eius sunt impedit cumq';
  hidden = false;
  hid = false;
  hide = false;
  show = false;
  shown = false;
  shows = false;
  shone = false;
  shoned = false;

  // storyArr:any = [
  //   {
  //     name: 'Jomi',
  //     img: '../../../assets/Images/Jomi.JPG',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis fuga quo voluptates ipsa, cum tempore dolores repudiandae perspiciatis possimus neque error vero quasi dolorem officiis voluptatibus. Impedit vero nostrum perferendis.',
  //   },
  //   {
  //     name: 'Feran',
  //     img: '../../../assets/Images/Feran.JPG',
  //     description:
  //       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis fuga quo voluptates ipsa, cum tempore dolores repudiandae perspiciatis possimus neque error vero quasi dolorem officiis voluptatibus. Impedit vero nostrum perferendis.',
  //   },
  // ];
  constructor() {}

  ngOnInit(): void {}

  JStory() {
    this.hidden = true;
    this.hid = false;
    this.hide = false;
    this.show = false;
    this.shown = false;
    this.shows = false;
    this.shoned = false;
  }

  JClose() {
    this.hidden = false;
  }

  FStory() {
    this.hid = true;
    this.hidden = false;
    this.hide = false;
    this.show = false;
    this.shown = false;
    this.shows = false;
    this.shoned = false;
  }

  FClose() {
    this.hid = false;
  }
  DvrgntS() {
    this.hide = true;
    this.hidden = false;
    this.hid = false;
    this.show = false;
    this.shown = false;
    this.shows = false;
    this.shoned = false;
  }
  DvrgntC() {
    this.hide = false;
  }
  AfterS() {
    this.show = true;
    this.hidden = false;
    this.hid = false;
    this.hide = false;
    this.shown = false;
    this.shows = false;
    this.shoned = false;
  }
  AfterC() {
    this.show = false;
  }
  PentS() {
    this.shown = true;
    this.hidden = false;
    this.hid = false;
    this.hide = false;
    this.show = false;
    this.shows = false;
    this.shoned = false;
  }
  PentC() {
    this.shown = false;
  }
  NbaS() {
    this.shows = true;
    this.hidden = false;
    this.hid = false;
    this.hide = false;
    this.show = false;
    this.shown = false;
    this.shoned = false;
  }
  NbaC() {
    this.shows = false;
  }
  TnbS() {
    this.shone = true;
    this.shows = false;
    this.hidden = false;
    this.hid = false;
    this.hide = false;
    this.show = false;
    this.shown = false;
    this.shoned = false;
  }
  TnbC() {
    this.shone = false;
  }
  AesS() {
    this.shoned = true;
    this.shone = false;
    this.shows = false;
    this.hidden = false;
    this.hid = false;
    this.hide = false;
    this.show = false;
    this.shown = false;
  }
  AesC() {
    this.shoned = false;
  }
  signin() {
    alert('Sorry! you have to log in');
  }
}
