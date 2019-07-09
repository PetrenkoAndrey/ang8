import { Component } from '@angular/core';
import { MetadataService } from './_services/metadata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New APP by Andy';
  loggedIn = true;
  metaDataUrl: any;
  constructor(private md: MetadataService) {}

  public logOut(){
    this.loggedIn = false;
  }
  ngOnInit() {
    this.metaDataUrl = this.md.getMetaData();
    console.log(this.metaDataUrl);
  }
}
