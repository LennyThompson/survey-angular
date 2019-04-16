// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 21:03:25 AEST 2018

import {Component, OnInit, Input} from "@angular/core";
import {EditSurveyMeasurementProvider} from "../../edit-providers/survey-measurement/SurveyMeasurement";
import {TraverseMeasurementSummary} from "./../../../../services/surveyDb/types";
import { CurrentSurveyPointProvider } from "./../../../../services/surveyDb/webAPI";
import * as lodash from "lodash";

// Class generated from declareAngularUiRowListTypescriptTraverseMeasurementSummary specifically

@Component (
    {
        selector: "traverse-measurement-summary-list",
        templateUrl: "./traverse-measurement-summary-list.html",
        styleUrls: ["./traverse-measurement-summary-list.scss"]
    }
)
export class TraverseMeasurementSummaryListComponent implements OnInit
{
    _TraverseMeasurementSummary: TraverseMeasurementSummary;
    constructor
    (
        private _addSurveyMeasurement: EditSurveyMeasurementProvider
        , private _currentSurveyPoint: CurrentSurveyPointProvider
    )
    {
    }

    ngOnInit(): void
    {
    }

    @Input()
    set TraverseMeasurementSummary(value: TraverseMeasurementSummary)
    {
        this._TraverseMeasurementSummary = value;
    }
    get TraverseMeasurementSummary(): TraverseMeasurementSummary
    {
        return this._TraverseMeasurementSummary;
    }

    get hasValidList(): boolean
    {
        return this.TraverseMeasurementSummary !== undefined && this.TraverseMeasurementSummary !== null;
    }

    // Special implementation setting the current survey point

    onAddSurveyMeasurement()
    {
        if(this.TraverseMeasurementSummary.SurvMeass && this.TraverseMeasurementSummary.SurvMeass.length)
        {
            this._currentSurveyPoint.SurveyPoint_ID = lodash(this.TraverseMeasurementSummary.SurvMeass).last().value().PtTo.PtToID;
        }
        this._addSurveyMeasurement.addSurveyMeasurement();
    }
}