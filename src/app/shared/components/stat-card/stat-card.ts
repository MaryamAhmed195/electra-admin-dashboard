import { Component, input, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-stat-card',
  styleUrl: './stat-card.css',
  templateUrl: './stat-card.html',
})
export class StatCard implements OnInit {
  title = input<string>();
  value = input<number>();
  icon = input<string>();
  showValue = true;
  handleClick() {
    console.log('Stat card clicked');
  }
  ngOnInit() {
    console.log('StatCard initialized');
  }
}
