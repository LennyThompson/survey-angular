// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {SurveyReference} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyReferenceProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-survey-reference-dialog",
        templateUrl: "add-survey-reference-dialog.html",
        styleUrls: ["./add-survey-reference-dialog.scss"]
    }
)
export class AddSurveyReferenceComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<AddSurveyReferenceComponent>
        , protected _SurveyReferenceProvider: CurrentSurveyReferenceProvider
    )
    {
        this._SurveyReferenceProvider.SurveyReference = new SurveyReference();
    }

    public get title(): string
    {
        return "Add SurveyReference";
    }

    public get SurveyReference(): SurveyReference
    {
        return this._SurveyReferenceProvider.SurveyReference;
    }

    public set SurveyReference(value: SurveyReference)
    {
        this._SurveyReferenceProvider.SurveyReference = value;
    }

    public onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.SurveyReference : null);
    }
}
