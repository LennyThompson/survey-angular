// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:29:21 AEST 2018

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy } from "@angular/core";
import {MatSelect, MatOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable, Subscription } from "rxjs/Rx";

import {SurveyPoint} from "./../../../../services/surveyDb/types";
import {SurveyPointSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditSurveyPointProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-point-select",
        templateUrl: "./SurveyPoint.html",
        styleUrls: ["./SurveyPoint.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveyPointSelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveyPointSelectComponent extends ElementBase<SurveyPoint> implements OnInit, OnDestroy
{
    protected _listSurveyPoint: SurveyPoint[] = [];
    protected _listSubscribe: Subscription;
    protected _initialSelectComplete: boolean;
    @ViewChild(MatSelect) select: MatSelect;
    @ViewChildren(MatOption) options: QueryList<MatOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurveyPoint: SurveyPoint;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurveyPoint: SurveyPointSubjectProvider
        , private _addSurveyPoint: EditSurveyPointProvider

    )
    {
        super(validators, asyncValidators);
    }

    get SurveyPoint(): SurveyPoint[]
    {
        return this._listSurveyPoint;
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            const summaries = this._serviceSurveyPoint.getSurveyPointSummaries();
            this._listSubscribe = summaries
                    .takeUntil(summaries.filter(list => this._listSurveyPoint.length > 0))
                    .subscribe
                    (
                        list =>
                        {
                            this._listSurveyPoint = list;
                            console.log("SurveyPoint list is ready...", list.length);
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

    writeValue(value: SurveyPoint): void
    {
        super.writeValue(value);
        console.log("SurveyPoint select model is ready...");
        this.updateSelectedValue();
    }

    private isSelectedOption(item: SurveyPoint): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    private updateSelectedValue(): boolean
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listSurveyPoint
            &&
            this._listSurveyPoint.length
            &&
            this.value
        )
        {
            const currentType = lodash(this._listSurveyPoint).filter(item => this.isSelectedOption(item)).first();
            console.log("SurveyPoint selection is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
            return true;
        }
        return false;
    }

    public onAddNewSurveyPoint()
    {
        this._addSurveyPoint.addSurveyPoint();
    }

}