// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {SurveyMeasurement} from "./../../../../services/surveyDb/types";
import {EditSurveyMeasurementComponent, AddSurveyMeasurementComponent} from "./../../form";
import {SurveyMeasurementServiceHttp, CurrentSurveyMeasurementProvider, CurrentSurveyProvider, CurrentTraverseProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyMeasurementProvider
{
    constructor(
        private _dialogService: MatDialog
        , private _SurveyMeasurementHttp: SurveyMeasurementServiceHttp
        , private _SurveyMeasurementProvider: CurrentSurveyMeasurementProvider
        , private _currentSurvey: CurrentSurveyProvider
        , private _currentTraverse: CurrentTraverseProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyMeasurementHttp.loadSurveyMeasurementFromDatabase(ID)
        .subscribe(
                (localSurveyMeasurement: SurveyMeasurement) => this.editSurveyMeasurement(localSurveyMeasurement)
        );
    }

    public editSurveyMeasurement(editSurveyMeasurement: SurveyMeasurement)
    {
        this._SurveyMeasurementProvider.SurveyMeasurement = editSurveyMeasurement;
        this._dialogService.open(EditSurveyMeasurementComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyMeasurementHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("SurveyMeasurementHttp.updateToDatabase", result);
                                }
                            );
                    }
                    else
                    {
                        console.log("Cancel");
                    }
                }
            );
    }

    public addSurveyMeasurement()
    {
        this._dialogService.open(AddSurveyMeasurementComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        let bSaved: boolean = false;
                        console.log(JSON.stringify(result));
                        result.SurveyID = this._currentSurvey.Survey_ID;

                        if
                        (
                            !bSaved
                            &&
                            (this._currentTraverse.Traverse !== null || this._currentTraverse.Traverse_ID > 0)
                        )
                        {
                            this._SurveyMeasurementHttp.saveSurveyMeasurementForTraverse(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("SurveyMeasurementHttp.saveToDatabase", result);
                                    }
                                );
                            bSaved = true;
                        }

                        if (!bSaved)
                        {
                            this._SurveyMeasurementHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("SurveyMeasurementHttp.saveToDatabase", result);
                                    }
                                );
                        }
                    }
                    else
                    {
                        console.log("Cancel");
                    }
                }
            );
    }

    public saveCurrent()
    {
        if
        (
            this._SurveyMeasurementProvider.SurveyMeasurement
            &&
            this._SurveyMeasurementProvider.SurveyMeasurement.ID < 1
        )
        {
            this._SurveyMeasurementHttp.saveToDatabase(this._SurveyMeasurementProvider.SurveyMeasurement)
                .subscribe(
                    (result) =>
                    {
                        this._SurveyMeasurementProvider.SurveyMeasurement = result;
                    }
                );
        }
    }
}