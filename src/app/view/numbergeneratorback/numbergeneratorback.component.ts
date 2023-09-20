import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NumbergeneratorService } from 'src/app/model/services/numbergeneratorservice/numbergenerator.service';

@Component({
  selector: 'app-numbergeneratorback',
  templateUrl: './numbergeneratorback.component.html',
  styleUrls: ['./numbergeneratorback.component.css']
})
export class NumbergeneratorbackComponent {
  numberOne : number[] = [];

  constructor(private numberGeneratorService : NumbergeneratorService, private router : Router){}

  generateRandomNumber(){
    this.numberGeneratorService.generateRandomNumber();
  }

  goToReadyNumbers(){
    this.router.navigate(['/readynumbers'])
  }

  goToHome(){
    this.router.navigate(['/'])
  }

  goToUserForm(){
    this.router.navigate(['/userform'])
  }

  changeNumberOneToggle(){
    this.numberGeneratorService.changeNumberOneToggle();
  }
}
