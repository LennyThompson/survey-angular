// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {SurveyMeasurement} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyMeasurementProvider, CurrentSurveyProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-survey-measurement-dialog",
        templateUrl: "add-survey-measurement-dialog.html",
        styleUrls: ["./add-survey-measurement-dialog.scss"]
    }
)
export class AddSurveyMeasurementComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<AddSurveyMeasurementComponent>
        , protected _SurveyMeasurementProvider: CurrentSurveyMeasurementProvider
        , protected _SurveyProvider: CurrentSurveyProvider


    )
    {
        this._SurveyMeasurementProvider.SurveyMeasurement = new SurveyMeasurement();
        // TODO: Determine where this should really go, as this is also covered in the EditSurveyMeasurementProvider, which can potentially add more context.
        //       Left here so that this component can be used independently of the EditSurveyMeasurementProvider
        this._SurveyMeasurementProvider.SurveyMeasurement.SurveyID = this._SurveyProvider.Survey ? this._SurveyProvider.Survey.ID : this._SurveyProvider.Survey_ID;


    }

    public get title(): string
    {
        return "Add SurveyMeasurement";
    }

    public get SurveyMeasurement(): SurveyMeasurement
    {
        return this._SurveyMeasurementProvider.SurveyMeasurement;
    }

    public set SurveyMeasurement(value: SurveyMeasurement)
    {
        this._SurveyMeasurementProvider.SurveyMeasurement = value;
    }

    public onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.SurveyMeasurement : null);
    }
}
