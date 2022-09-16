import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  title = 'schemeMaster';

  @Input() tenantList :any;
  backendUrl = "http://localhost:4000/";
  ifLoaded = false;

  addScheme(){
    alert("Scheme Inserted 123456789 added");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes);
    this.ifLoaded = true;
  }

  getProfilePic(){
    if (this.ifLoaded){
      this.ifLoaded = true;
      return this.backendUrl + this.tenantList.profilePic;
    }
    return;
  }
}
