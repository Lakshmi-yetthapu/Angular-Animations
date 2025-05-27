import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
 animations: [
    trigger('answerToggle', [
      state('closed', style({
        height: '0',
        opacity: '0',
        paddingTop: '0',
        paddingBottom: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*', 
        opacity: '1',
        paddingTop: '16px', 
        paddingBottom: '16px' 
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ])
    ]),
    trigger('iconRotate', [
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      state('open', style({
        transform: 'rotate(180deg)'
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class FaqComponent {
  faqItems: FaqItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.faqItems = [
      {
        question: 'What is Angular?',
        answer: 'Angular is a platform and framework for building single-page client-side applications using HTML and TypeScript.',
        isOpen: false
      },
      {
        question: 'What are Components in Angular?',
        answer: 'Components are the main building blocks of Angular applications. They consist of a template, a class, and styles, defining a part of the UI.',
        isOpen: false
      },
      {
        question: 'How does data binding work?',
        answer: 'Angular supports various forms of data binding, including interpolation ({{ }}), property binding ([property]), event binding ((event)), and two-way binding ([(ngModel)]).',
        isOpen: false
      },
      {
        question: 'What is Dependency Injection?',
        answer: 'Dependency Injection is a design pattern used to increase modularity and testability. Angular\'s DI system provides instances of services to components or other services that declare them as dependencies.',
        isOpen: false
      },
      {
        question: 'What is the Angular CLI?',
        answer: 'The Angular CLI (Command Line Interface) is a tool that helps you create, develop, scaffold, and maintain Angular applications directly from a command shell.',
        isOpen: false
      }
    ];
  }

  toggleAnswer(item: FaqItem): void {
    item.isOpen = !item.isOpen;
  }
}
