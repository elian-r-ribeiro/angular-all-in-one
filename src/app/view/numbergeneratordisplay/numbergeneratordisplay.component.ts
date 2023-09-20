import { Component} from '@angular/core';
import { NumbergeneratorService } from 'src/app/model/services/numbergeneratorservice/numbergenerator.service';

@Component({
  selector: 'app-numbergeneratordisplay',
  templateUrl: './numbergeneratordisplay.component.html',
  styleUrls: ['./numbergeneratordisplay.component.css']
})
export class NumbergeneratordisplayComponent {
  numbers : number[] = []
  numberOne! : number;
  numberOneToggle : boolean = false;

  constructor(private numberGeneratorService : NumbergeneratorService){
    this.getRandomNumbers();
    this.getNumberOne();
    this.numberGeneratorService.buttonClick$.subscribe(() => {this.getNumberOneToggle();});
  }

  getRandomNumbers(){
    this.numbers = this.numberGeneratorService.getRandomNumbersList();
  }

  getNumberOne(){
    this.numberOne = this.numberGeneratorService.getNumberOne();
  }

  getNumberOneToggle(){
    this.numberOneToggle = this.numberGeneratorService.getNumberOneToggle();
  }
}
