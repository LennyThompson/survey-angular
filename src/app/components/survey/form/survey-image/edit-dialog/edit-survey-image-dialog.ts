// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {SurveyImage} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyImageProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-survey-image-dialog",
        templateUrl: "./edit-survey-image-dialog.html",
        styleUrls: ["./edit-survey-image-dialog.scss"]
    }
)
export class EditSurveyImageComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<EditSurveyImageComponent>,
        protected _SurveyImageProvider: CurrentSurveyImageProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit SurveyImage";
    }

    public get SurveyImage(): SurveyImage
    {
        return this._SurveyImageProvider.SurveyImage;
    }

    public set SurveyImage(value: SurveyImage)
    {
        this._SurveyImageProvider.SurveyImage = value;
    }

    public onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.SurveyImage : null);
    }
}
