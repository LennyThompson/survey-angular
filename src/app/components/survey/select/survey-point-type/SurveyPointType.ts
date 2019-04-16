// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:29:21 AEST 2018

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy } from "@angular/core";
import {MatSelect, MatOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable, Subscription } from "rxjs/Rx";

import {SurveyPointType} from "./../../../../services/surveyDb/types";
import {SurveyPointTypeSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditSurveyPointTypeProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-point-type-select",
        templateUrl: "./SurveyPointType.html",
        styleUrls: ["./SurveyPointType.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveyPointTypeSelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveyPointTypeSelectComponent extends ElementBase<SurveyPointType> implements OnInit, OnDestroy
{
    protected _listSurveyPointType: SurveyPointType[] = [];
    protected _listSubscribe: Subscription;
    protected _initialSelectComplete: boolean;
    @ViewChild(MatSelect) select: MatSelect;
    @ViewChildren(MatOption) options: QueryList<MatOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurveyPointType: SurveyPointType;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurveyPointType: SurveyPointTypeSubjectProvider
        , private _addSurveyPointType: EditSurveyPointTypeProvider

    )
    {
        super(validators, asyncValidators);
    }

    get SurveyPointType(): SurveyPointType[]
    {
        return this._listSurveyPointType;
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            const summaries = this._serviceSurveyPointType.getSurveyPointTypeSummaries();
            this._listSubscribe = summaries
                    .takeUntil(summaries.filter(list => this._listSurveyPointType.length > 0))
                    .subscribe
                    (
                        list =>
                        {
                            this._listSurveyPointType = list;
                            console.log("SurveyPointType list is ready...", list.length);
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

    writeValue(value: SurveyPointType): void
    {
        super.writeValue(value);
        console.log("SurveyPointType select model is ready...");
        this.updateSelectedValue();
    }

    private isSelectedOption(item: SurveyPointType): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    private updateSelectedValue(): boolean
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listSurveyPointType
            &&
            this._listSurveyPointType.length
            &&
            this.value
        )
        {
            const currentType = lodash(this._listSurveyPointType).filter(item => this.isSelectedOption(item)).first();
            console.log("SurveyPointType selection is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
            return true;
        }
        return false;
    }

    public onAddNewSurveyPointType()
    {
        this._addSurveyPointType.addSurveyPointType();
    }

}