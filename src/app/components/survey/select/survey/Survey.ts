// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:29:21 AEST 2018

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy } from "@angular/core";
import {MatSelect, MatOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable, Subscription } from "rxjs/Rx";

import {Survey} from "./../../../../services/surveyDb/types";
import {SurveySubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-select",
        templateUrl: "./Survey.html",
        styleUrls: ["./Survey.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveySelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveySelectComponent extends ElementBase<Survey> implements OnInit, OnDestroy
{
    protected _listSurvey: Survey[] = [];
    protected _listSubscribe: Subscription;
    protected _initialSelectComplete: boolean;
    @ViewChild(MatSelect) select: MatSelect;
    @ViewChildren(MatOption) options: QueryList<MatOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurvey: Survey;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurvey: SurveySubjectProvider
    )
    {
        super(validators, asyncValidators);
    }

    get Survey(): Survey[]
    {
        return this._listSurvey;
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            const summaries = this._serviceSurvey.getSurveySummaries();
            this._listSubscribe = summaries
                    .takeUntil(summaries.filter(list => this._listSurvey.length > 0))
                    .subscribe
                    (
                        list =>
                        {
                            this._listSurvey = list;
                            console.log("Survey list is ready...", list.length);
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

    writeValue(value: Survey): void
    {
        super.writeValue(value);
        console.log("Survey select model is ready...");
        this.updateSelectedValue();
    }

    private isSelectedOption(item: Survey): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    private updateSelectedValue(): boolean
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listSurvey
            &&
            this._listSurvey.length
            &&
            this.value
        )
        {
            const currentType = lodash(this._listSurvey).filter(item => this.isSelectedOption(item)).first();
            console.log("Survey selection is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
            return true;
        }
        return false;
    }

}