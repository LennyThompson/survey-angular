
import {fromEvent as observableFromEvent, Observable} from 'rxjs';

import {debounceTime} from 'rxjs/operators';
import {EventEmitter, ElementRef, OnInit, Directive, Input, Output, AfterViewInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Directive(
    {
        selector: "[debounce]"
    }
)
export class Debounce implements AfterViewInit
{
    @Input() delay: number = 300;
    @Output() func: EventEmitter<any> = new EventEmitter();

    constructor
    (
        private elementRef: ElementRef,
        private model: NgModel
    )
    {
    }

    ngAfterViewInit(): void
    {
        observableFromEvent(this.elementRef.nativeElement, 'keyup').pipe(
            debounceTime(this.delay))
            .subscribe((input: any) => {
                console.log("debouncing: " + input.target.value);
                // this.model.value = input.target.value;
            });
    }

}