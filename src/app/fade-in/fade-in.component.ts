import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.css'],
  animations: [
    trigger('fadeInUp', [
      state('inView', style({
        opacity: 1,
        transform: 'translateY(0px)'
      })),
      state('outOfView', style({
        opacity: 0,
        transform: 'translateY(0px)'
      })),
      transition('outOfView => inView', [
        animate('1.8s ease-out')
      ])
    ])
  ]
})
export class FadeInComponent implements OnInit, OnDestroy {
  state = 'outOfView';
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Check if the entry intersects at least 25% of the viewport
        if (entry.intersectionRatio >= 0.25) {
          this.state = 'inView';
          this.observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, {
      threshold: [0.75, 1] // Specify the threshold values
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect(); // Disconnect the observer when the component is destroyed
    }
  }
}
