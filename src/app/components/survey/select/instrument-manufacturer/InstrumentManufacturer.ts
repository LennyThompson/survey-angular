// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:29:21 AEST 2018

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy } from "@angular/core";
import {MatSelect, MatOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable, Subscription } from "rxjs/Rx";

import {InstrumentManufacturer} from "./../../../../services/surveyDb/types";
import {InstrumentManufacturerSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditInstrumentManufacturerProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "instrument-manufacturer-select",
        templateUrl: "./InstrumentManufacturer.html",
        styleUrls: ["./InstrumentManufacturer.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: InstrumentManufacturerSelectComponent,
                multi: true,
            }
        ]

    }
)
export class InstrumentManufacturerSelectComponent extends ElementBase<InstrumentManufacturer> implements OnInit, OnDestroy
{
    protected _listInstrumentManufacturer: InstrumentManufacturer[] = [];
    protected _listSubscribe: Subscription;
    protected _initialSelectComplete: boolean;
    @ViewChild(MatSelect) select: MatSelect;
    @ViewChildren(MatOption) options: QueryList<MatOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentInstrumentManufacturer: InstrumentManufacturer;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceInstrumentManufacturer: InstrumentManufacturerSubjectProvider
        , private _addInstrumentManufacturer: EditInstrumentManufacturerProvider

    )
    {
        super(validators, asyncValidators);
    }

    get InstrumentManufacturer(): InstrumentManufacturer[]
    {
        return this._listInstrumentManufacturer;
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            const summaries = this._serviceInstrumentManufacturer.getInstrumentManufacturerSummaries();
            this._listSubscribe = summaries
                    .takeUntil(summaries.filter(list => this._listInstrumentManufacturer.length > 0))
                    .subscribe
                    (
                        list =>
                        {
                            this._listInstrumentManufacturer = list;
                            console.log("InstrumentManufacturer list is ready...", list.length);
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

    writeValue(value: InstrumentManufacturer): void
    {
        super.writeValue(value);
        console.log("InstrumentManufacturer select model is ready...");
        this.updateSelectedValue();
    }

    private isSelectedOption(item: InstrumentManufacturer): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    private updateSelectedValue(): boolean
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listInstrumentManufacturer
            &&
            this._listInstrumentManufacturer.length
            &&
            this.value
        )
        {
            const currentType = lodash(this._listInstrumentManufacturer).filter(item => this.isSelectedOption(item)).first();
            console.log("InstrumentManufacturer selection is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
            return true;
        }
        return false;
    }

    public onAddNewInstrumentManufacturer()
    {
        this._addInstrumentManufacturer.addInstrumentManufacturer();
    }

}