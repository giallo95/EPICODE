import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColor]'
})
export class RandomBackgroundColorDirective {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#33A6FF', '#FF33C3', '#FFFF33'];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    this.elementRef.nativeElement.style.backgroundColor = randomColor;
  }


}
