import { Component } from '@angular/core';
import { NumbergeneratorService } from 'src/app/model/services/numbergeneratorservice/numbergenerator.service';

@Component({
  selector: 'app-readynumbers',
  templateUrl: './readynumbers.component.html',
  styleUrls: ['./readynumbers.component.css']
})
export class ReadynumbersComponent {
  readyNumbers : number[] = [];

  constructor(private numberGeneratorService : NumbergeneratorService){
    this.getReadyNumbers();
  }

  getReadyNumbers(){
    this.readyNumbers = this.numberGeneratorService.getReadyNumbers();
  }
}
