// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:29:21 AEST 2018

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy } from "@angular/core";
import {MatSelect, MatOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable, Subscription } from "rxjs/Rx";

import {Instrument} from "./../../../../services/surveyDb/types";
import {InstrumentSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditInstrumentProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "instrument-select",
        templateUrl: "./Instrument.html",
        styleUrls: ["./Instrument.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: InstrumentSelectComponent,
                multi: true,
            }
        ]

    }
)
export class InstrumentSelectComponent extends ElementBase<Instrument> implements OnInit, OnDestroy
{
    protected _listInstrument: Instrument[] = [];
    protected _listSubscribe: Subscription;
    protected _initialSelectComplete: boolean;
    @ViewChild(MatSelect) select: MatSelect;
    @ViewChildren(MatOption) options: QueryList<MatOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentInstrument: Instrument;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceInstrument: InstrumentSubjectProvider
        , private _addInstrument: EditInstrumentProvider

    )
    {
        super(validators, asyncValidators);
    }

    get Instrument(): Instrument[]
    {
        return this._listInstrument;
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            const summaries = this._serviceInstrument.getInstrumentSummaries();
            this._listSubscribe = summaries
                    .takeUntil(summaries.filter(list => this._listInstrument.length > 0))
                    .subscribe
                    (
                        list =>
                        {
                            this._listInstrument = list;
                            console.log("Instrument list is ready...", list.length);
                            this.updateSelectedValue();
                        }
                    );
        }
    }

    public ngOnDestroy(): void
    {
        if (this._listSubscribe)
        {
            this._listSubscribe.unsubscribe();
        }
    }

    writeValue(value: Instrument): void
    {
        super.writeValue(value);
        console.log("Instrument select model is ready...");
        this.updateSelectedValue();
    }

    private isSelectedOption(item: Instrument): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    private updateSelectedValue(): boolean
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listInstrument
            &&
            this._listInstrument.length
            &&
            this.value
        )
        {
            const currentType = lodash(this._listInstrument).filter(item => this.isSelectedOption(item)).first();
            console.log("Instrument selection is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
            return true;
        }
        return false;
    }

    public onAddNewInstrument()
    {
        this._addInstrument.addInstrument();
    }

}