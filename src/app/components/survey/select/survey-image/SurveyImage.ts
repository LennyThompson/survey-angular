// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:29:21 AEST 2018

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy } from "@angular/core";
import {MatSelect, MatOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable, Subscription } from "rxjs/Rx";

import {SurveyImage} from "./../../../../services/surveyDb/types";
import {SurveyImageSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditSurveyImageProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-image-select",
        templateUrl: "./SurveyImage.html",
        styleUrls: ["./SurveyImage.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveyImageSelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveyImageSelectComponent extends ElementBase<SurveyImage> implements OnInit, OnDestroy
{
    protected _listSurveyImage: SurveyImage[] = [];
    protected _listSubscribe: Subscription;
    protected _initialSelectComplete: boolean;
    @ViewChild(MatSelect) select: MatSelect;
    @ViewChildren(MatOption) options: QueryList<MatOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurveyImage: SurveyImage;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurveyImage: SurveyImageSubjectProvider
        , private _addSurveyImage: EditSurveyImageProvider

    )
    {
        super(validators, asyncValidators);
    }

    get SurveyImage(): SurveyImage[]
    {
        return this._listSurveyImage;
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            const summaries = this._serviceSurveyImage.getSurveyImageSummaries();
            this._listSubscribe = summaries
                    .takeUntil(summaries.filter(list => this._listSurveyImage.length > 0))
                    .subscribe
                    (
                        list =>
                        {
                            this._listSurveyImage = list;
                            console.log("SurveyImage list is ready...", list.length);
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

    writeValue(value: SurveyImage): void
    {
        super.writeValue(value);
        console.log("SurveyImage select model is ready...");
        this.updateSelectedValue();
    }

    private isSelectedOption(item: SurveyImage): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    private updateSelectedValue(): boolean
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listSurveyImage
            &&
            this._listSurveyImage.length
            &&
            this.value
        )
        {
            const currentType = lodash(this._listSurveyImage).filter(item => this.isSelectedOption(item)).first();
            console.log("SurveyImage selection is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
            return true;
        }
        return false;
    }

    public onAddNewSurveyImage()
    {
        this._addSurveyImage.addSurveyImage();
    }

}