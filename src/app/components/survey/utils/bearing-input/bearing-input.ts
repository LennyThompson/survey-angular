import {
    Component, QueryList, Inject, Optional, ViewChild, AfterContentInit,
    ViewEncapsulation, Input, ContentChildren, ContentChild, ElementRef, ViewChildren, AfterViewInit, Output,
    EventEmitter
} from "@angular/core";
import {BearingFormat} from "../../pipes/format-bearing";
import {ElementBase} from "../element-base";
import {NG_VALUE_ACCESSOR, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel} from "@angular/forms";
import {
    FloatLabelType, MatInput, MatPlaceholder, MatHint
} from "@angular/material";

let nextUniqueId = 0;

/**
 * Component that represents a bearing input. It encapsulates 3 input elements.
 */
@Component({
    selector: "bearing-input",
    templateUrl: "bearing-input.html",
    styleUrls: ["./bearing-input.scss"],
    host: {
        // Remove align attribute to prevent it from interfering with layout.
        '[attr.align]': 'null',
        '[class.mat-input-container]': 'true',
        '[class.mat-focused]': '_onFocussed()',
        // '[class.ng-untouched]': '_shouldForward("untouched")',
        // '[class.ng-touched]': '_shouldForward("touched")',
        // '[class.ng-pristine]': '_shouldForward("pristine")',
        // '[class.ng-dirty]': '_shouldForward("dirty")',
        // '[class.ng-valid]': '_shouldForward("valid")',
        // '[class.ng-invalid]': '_shouldForward("invalid")',
        // '[class.ng-pending]': '_shouldForward("pending")',
        '(click)': '_focusInput()',
    },
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: BearingInputContainer,
            multi: true,
        }
    ]
})
export class BearingInputContainer extends ElementBase<number> implements AfterContentInit, AfterViewInit
{
    /** Alignment of the input container's content. */
    @Input() align: 'start' | 'end' = 'start';

    /** Color of the input divider, based on the theme. */
    @Input() dividerColor: 'primary' | 'accent' | 'warn' = 'primary';
    /** Placeholder attribute of the element. */
    private _placeholder: string = '';
    @Output() _placeholderChange = new EventEmitter<string>();

    @Input()
    get placeholder() { return this._placeholder; }
    set placeholder(value: string) {
        if (this._placeholder !== value) {
            this._placeholder = value;
            this._placeholderChange.emit(this._placeholder);
        }
    }

    /** Whether the floating label should always float or not. */
    get _shouldAlwaysFloat()
    {
        return this._floatPlaceholder === 'always';
    };

    /** Whether the placeholder can float or not. */
    get _canPlaceholderFloat()
    {
        return true;//this._floatPlaceholder !== 'never';
    }

    /** Text for the input hint. */
    @Input()
    get hintLabel()
    {
        return this._hintLabel;
    }

    set hintLabel(value: string)
    {
        this._hintLabel = value;
        this._processHints();
    }

    private _hintLabel = '';

    // Unique id for the hint label.
    _hintLabelId: string = `md-input-hint-${nextUniqueId++}`;

    /** Whether the placeholder should always float, never float or float as the user types. */
    @Input()
    get floatPlaceholder()
    {
        return this._floatPlaceholder;
    }

    set floatPlaceholder(value: FloatLabelType)
    {
        this._floatPlaceholder = value || 'auto';
    }

    private _floatPlaceholder: FloatLabelType = 'auto';

    @ViewChildren(MatInput)
    _mdInputChildren: QueryList<MatInput>;
    _focusChild: MatInput;
    @ContentChild(MatPlaceholder)
    _placeholderChild: MatPlaceholder;

    @ContentChildren(MatHint)
    _hintChildren: QueryList<MatHint>;

    private _degrees: string;
    private _minutes: string;
    private _seconds: string;
    @ViewChild(NgModel) model: NgModel;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private bearingFormat: BearingFormat
    )
    {
        super(validators, asyncValidators);
    }

    get degrees(): string
    {
        return this._degrees;
    }

    set degrees(value: string)
    {
        this._degrees = value;
        this.updateBearing();
    }

    get minutes(): string
    {
        return this._minutes;
    }

    set minutes(value: string)
    {
        this._minutes = value;
        this.updateBearing();
    }

    get seconds(): string
    {
        return this._seconds;
    }

    set seconds(value: string)
    {
        this._seconds = value;
        this.updateBearing();
    }

    updateBearing()
    {
        this.value = Number(this._degrees ? this._degrees : "0") + Number(this._minutes ? this._minutes : "0") / 60 + Number(this._seconds ? this._seconds : "0") / 3600;
        console.log("Bearing: " + this.value);
    }

    updateParts()
    {
        let strBearing = this.bearingFormat.transform(this.value);
        console.log(strBearing);
        let matches = /(\d+)º(\d+)'(\d+)"/.exec(strBearing);
        if (matches !== null)
        {
            this._degrees = matches[1];
            this._minutes = matches[2];
            this._seconds = matches[3];
        }
    }

    ngAfterViewInit(): void
    {
        if (!this._mdInputChildren)
        {
            throw new Error('MatInputContainerMissingMatInputError');
        }

        this._mdInputChildren.forEach(child => this._focusChild ? this._focusChild = child : null);
    }

    ngAfterContentInit()
    {
        this._processHints();

        // Re-validate when things change.
        this._hintChildren.changes.subscribe(() => this._processHints());
    }

    /** Focuses the underlying input. */
    _focusInput()
    {
        this._mdInputChildren.forEach(child => child.focused ? this._focusChild = child : null)
    }

    /**
     * Does any extra processing that is required when handling the hints.
     */
    private _processHints()
    {
        this._validateHints();
        this._syncAriaDescribedby();
    }

    /**
     * Ensure that there is a maximum of one of each `<md-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */
    private _validateHints()
    {
        if (this._hintChildren)
        {
            let startHint: MatHint = null;
            let endHint: MatHint = null;
            this._hintChildren.forEach((hint: MatHint) =>
            {
                if (hint.align == 'start')
                {
                    if (startHint || this.hintLabel)
                    {
                        throw new Error('MatInputContainerDuplicatedHintError: start');
                    }
                    startHint = hint;
                }
                else if (hint.align == 'end')
                {
                    if (endHint)
                    {
                        throw new Error('MatInputContainerDuplicatedHintError: end');
                    }
                    endHint = hint;
                }
            });
        }
    }

    /**
     * Sets the child input's `aria-describedby` to a space-separated list of the ids
     * of the currently-specified hints, as well as a generated id for the hint label.
     */
    private _syncAriaDescribedby()
    {
        let ids: string[] = [];
        let startHint = this._hintChildren ?
            this._hintChildren.find(hint => hint.align === 'start') : null;
        let endHint = this._hintChildren ?
            this._hintChildren.find(hint => hint.align === 'end') : null;

        if (startHint)
        {
            ids.push(startHint.id);
        }
        else if (this._hintLabel)
        {
            ids.push(this._hintLabelId);
        }

        if (endHint)
        {
            ids.push(endHint.id);
        }

        this._mdInputChildren ? this._mdInputChildren.forEach(child => child._ariaDescribedby = ids.join(' ')) : null;
    }

    _onFocussed()
    {
        if (this._focusChild)
        {
            this._focusChild.focused = true;
        }
    }

    isFocussed()
    {
        return this._mdInputChildren
                .filter(child => child.focused)
                .length > 0;
    }

    _shouldForward(prop: string): boolean
    {
        return this._mdInputChildren
                .map(child => child.ngControl ? child.ngControl : null)
                .filter(control => control && (control as any)[prop])
                .length > 0;
    }

    onKeypress(event: KeyboardEvent, source: string)
    {
        if(event.keyCode < 48 || event.keyCode > 57)
        {
            event.preventDefault();
        }
    }
}
