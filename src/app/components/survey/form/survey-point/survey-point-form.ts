// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component, OnInit, Input} from "@angular/core";

import {SurveyPoint} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-point-form",
        templateUrl: "./survey-point-form.html",
        styleUrls: ["./survey-point-form.scss"]
    }
)
export class SurveyPointComponent implements OnInit
{
    private _SurveyPoint: SurveyPoint;
    constructor
    (
    )
    {
        this._SurveyPoint = new SurveyPoint();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyPoint(value: SurveyPoint)
    {
        this._SurveyPoint = value;
    }

    get SurveyPoint(): SurveyPoint
    {
        return this._SurveyPoint;
    }

}