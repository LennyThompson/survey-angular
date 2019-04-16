// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 21:03:25 AEST 2018

import { Component, OnInit, Input } from "@angular/core";

import { CurrentSurveyPointProvider } from "./../../../../services/surveyDb/webAPI";
import { SurveyPointSummary_Pt } from "./../../../../services/surveyDb/types/SurveyPointSummary";
import { EditSurveyPointProvider } from "./../../edit-providers";


@Component (
    {
        selector: "survey-point-summary",
        templateUrl: "./survey-point-summary-list-row.html",
        styleUrls: ["./survey-point-summary-list-row.scss"]
    }
)
export class SurveyPointSummaryListRowComponent implements OnInit
{
    private _Pts: SurveyPointSummary_Pt;
    constructor(
        protected _editProvider: EditSurveyPointProvider
    )
    {
    }

    ngOnInit(): void
    {
    }

    @Input()
    set Pts(value: SurveyPointSummary_Pt)
    {
        this._Pts = value;
    }

    get Pts(): SurveyPointSummary_Pt
    {
        return this._Pts;
    }
    onEdit()
    {
        this._editProvider.editID(this._Pts.PtID);
    }
    onDelete()
    {
        //this._deleteProvider.delete(this.Pts.PtID);
    }

    get isExpanded(): boolean
    {
        return false;
    }

    setExpanded()
    {
    }

}