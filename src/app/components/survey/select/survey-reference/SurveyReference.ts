// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:29:21 AEST 2018

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy } from "@angular/core";
import {MatSelect, MatOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable, Subscription } from "rxjs/Rx";

import {SurveyReference} from "./../../../../services/surveyDb/types";
import {SurveyReferenceSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditSurveyReferenceProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-reference-select",
        templateUrl: "./SurveyReference.html",
        styleUrls: ["./SurveyReference.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveyReferenceSelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveyReferenceSelectComponent extends ElementBase<SurveyReference> implements OnInit, OnDestroy
{
    protected _listSurveyReference: SurveyReference[] = [];
    protected _listSubscribe: Subscription;
    protected _initialSelectComplete: boolean;
    @ViewChild(MatSelect) select: MatSelect;
    @ViewChildren(MatOption) options: QueryList<MatOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurveyReference: SurveyReference;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurveyReference: SurveyReferenceSubjectProvider
        , private _addSurveyReference: EditSurveyReferenceProvider

    )
    {
        super(validators, asyncValidators);
    }

    get SurveyReference(): SurveyReference[]
    {
        return this._listSurveyReference;
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            const summaries = this._serviceSurveyReference.getSurveyReferenceSummaries();
            this._listSubscribe = summaries
                    .takeUntil(summaries.filter(list => this._listSurveyReference.length > 0))
                    .subscribe
                    (
                        list =>
                        {
                            this._listSurveyReference = list;
                            console.log("SurveyReference list is ready...", list.length);
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

    writeValue(value: SurveyReference): void
    {
        super.writeValue(value);
        console.log("SurveyReference select model is ready...");
        this.updateSelectedValue();
    }

    private isSelectedOption(item: SurveyReference): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    private updateSelectedValue(): boolean
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listSurveyReference
            &&
            this._listSurveyReference.length
            &&
            this.value
        )
        {
            const currentType = lodash(this._listSurveyReference).filter(item => this.isSelectedOption(item)).first();
            console.log("SurveyReference selection is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
            return true;
        }
        return false;
    }

    public onAddNewSurveyReference()
    {
        this._addSurveyReference.addSurveyReference();
    }

}