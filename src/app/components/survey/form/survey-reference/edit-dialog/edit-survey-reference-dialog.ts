// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {SurveyReference} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyReferenceProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-survey-reference-dialog",
        templateUrl: "./edit-survey-reference-dialog.html",
        styleUrls: ["./edit-survey-reference-dialog.scss"]
    }
)
export class EditSurveyReferenceComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<EditSurveyReferenceComponent>,
        protected _SurveyReferenceProvider: CurrentSurveyReferenceProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit SurveyReference";
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
