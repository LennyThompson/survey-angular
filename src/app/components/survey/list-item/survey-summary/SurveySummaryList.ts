// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 21:03:25 AEST 2018

import {Component, OnInit, Input} from "@angular/core";
import {EditSurveyProvider} from "../../edit-providers/survey/Survey";
import {SurveySummary} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-summary-list",
        templateUrl: "./survey-summary-list.html",
        styleUrls: ["./survey-summary-list.scss"]
    }
)
export class SurveySummaryListComponent implements OnInit
{
    _SurveySummaryList: SurveySummary[];
    constructor
    (
        private _addSurvey: EditSurveyProvider
    )
    {
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveySummaryList(value: SurveySummary[])
    {
        this._SurveySummaryList = value;
    }
    get SurveySummaryList(): SurveySummary[]
    {
        return this._SurveySummaryList;
    }

    get hasValidList(): boolean
    {
        return this.SurveySummaryList !== undefined && this.SurveySummaryList !== null;
    }

    onAddSurvey()
    {
        this._addSurvey.addSurvey();
    }

    onExpand()
    {
    }

}