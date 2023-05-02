import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { catchError, map, timer, take } from 'rxjs';
@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit, OnChanges {

  @Input() message: string | undefined;
  @Input() show: boolean = false;
  @Input() showTimer: boolean = false;
  @Input() type: string | undefined;
  countdown$ = timer(0, 1000).pipe(
        take(5),
        map(secondsElapsed => 5 - secondsElapsed)
      );
  secondsLeft: any;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void{
    if(this.showTimer && this.show)
    this.getCountdown();

  }

  getCountdown(){
     console.log("Countdown started")
      this.countdown$.subscribe(secondsLeft => {
        console.log("Seconds left: ", secondsLeft);
        this.secondsLeft = secondsLeft;
      });
     }



}
