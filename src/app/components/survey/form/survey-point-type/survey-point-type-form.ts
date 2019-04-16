// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component, OnInit, Input} from "@angular/core";

import {SurveyPointType} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-point-type-form",
        templateUrl: "./survey-point-type-form.html",
        styleUrls: ["./survey-point-type-form.scss"]
    }
)
export class SurveyPointTypeComponent implements OnInit
{
    private _SurveyPointType: SurveyPointType;
    constructor
    (
    )
    {
        this._SurveyPointType = new SurveyPointType();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyPointType(value: SurveyPointType)
    {
        this._SurveyPointType = value;
    }

    get SurveyPointType(): SurveyPointType
    {
        return this._SurveyPointType;
    }

}