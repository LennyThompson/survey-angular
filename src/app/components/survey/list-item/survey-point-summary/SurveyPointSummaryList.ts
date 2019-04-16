// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 21:03:25 AEST 2018

import {Component, OnInit, Input} from "@angular/core";
import {EditSurveyPointProvider} from "../../edit-providers/survey-point/SurveyPoint";
import {SurveyPointSummary} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-point-summary-list",
        templateUrl: "./survey-point-summary-list.html",
        styleUrls: ["./survey-point-summary-list.scss"]
    }
)
export class SurveyPointSummaryListComponent implements OnInit
{
    _SurveyPointSummary: SurveyPointSummary;
    constructor
    (
        private _addSurveyPoint: EditSurveyPointProvider
    )
    {
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyPointSummary(value: SurveyPointSummary)
    {
        this._SurveyPointSummary = value;
    }
    get SurveyPointSummary(): SurveyPointSummary
    {
        return this._SurveyPointSummary;
    }

    get hasValidList(): boolean
    {
        return this.SurveyPointSummary !== undefined && this.SurveyPointSummary !== null;
    }

    onAddSurveyPoint()
    {
        this._addSurveyPoint.addSurveyPoint();
    }

    onExpand()
    {
    }

}