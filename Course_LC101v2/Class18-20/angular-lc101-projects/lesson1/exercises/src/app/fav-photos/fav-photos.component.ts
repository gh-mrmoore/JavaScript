import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://assets.datacamp.com/production/course_13690/shields/original/shield_image_course_13690_20200117-1-10k55d5?1579287320';
  image3 = 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f2/Iron_Man_Armor_-_Mark_LXXXV.png/revision/latest/top-crop/width/360/height/450?cb=20190401222437';

  constructor() { }

  ngOnInit() {
  }

}