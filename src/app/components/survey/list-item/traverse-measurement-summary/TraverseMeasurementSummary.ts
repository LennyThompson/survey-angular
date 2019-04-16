// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 21:03:25 AEST 2018

import { Component, OnInit, Input } from "@angular/core";

import { CurrentSurveyMeasurementProvider } from "./../../../../services/surveyDb/webAPI";
import { TraverseMeasurementSummary_SurvMeas } from "./../../../../services/surveyDb/types/TraverseMeasurementSummary";
import { EditSurveyMeasurementProvider } from "./../../edit-providers";


@Component (
    {
        selector: "traverse-measurement-summary",
        templateUrl: "./traverse-measurement-summary-list-row.html",
        styleUrls: ["./traverse-measurement-summary-list-row.scss"]
    }
)
export class TraverseMeasurementSummaryListRowComponent implements OnInit
{
    private _SurvMeass: TraverseMeasurementSummary_SurvMeas;
    constructor(
        protected _editProvider: EditSurveyMeasurementProvider
    )
    {
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurvMeass(value: TraverseMeasurementSummary_SurvMeas)
    {
        this._SurvMeass = value;
    }

    get SurvMeass(): TraverseMeasurementSummary_SurvMeas
    {
        return this._SurvMeass;
    }
    onEdit()
    {
        this._editProvider.editID(this._SurvMeass.MeasID);
    }
    onDelete()
    {
        //this._deleteProvider.delete(this.SurvMeass.MeasID);
    }

    get isExpanded(): boolean
    {
        return false;
    }

    setExpanded()
    {
    }

}