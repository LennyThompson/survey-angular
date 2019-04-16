// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {Survey} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-survey-dialog",
        templateUrl: "add-survey-dialog.html",
        styleUrls: ["./add-survey-dialog.scss"]
    }
)
export class AddSurveyComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<AddSurveyComponent>
        , protected _SurveyProvider: CurrentSurveyProvider
    )
    {
        this._SurveyProvider.Survey = new Survey();
    }

    public get title(): string
    {
        return "Add Survey";
    }

    public get Survey(): Survey
    {
        return this._SurveyProvider.Survey;
    }

    public set Survey(value: Survey)
    {
        this._SurveyProvider.Survey = value;
    }

    public onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.Survey : null);
    }
}
