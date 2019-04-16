// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {SurveyPoint} from "./../../../../services/surveyDb/types";
import {EditSurveyPointComponent, AddSurveyPointComponent} from "./../../form";
import {SurveyPointServiceHttp, CurrentSurveyPointProvider, CurrentSurveyProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyPointProvider
{
    constructor(
        private _dialogService: MatDialog
        , private _SurveyPointHttp: SurveyPointServiceHttp
        , private _SurveyPointProvider: CurrentSurveyPointProvider
        , private _currentSurvey: CurrentSurveyProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyPointHttp.loadSurveyPointFromDatabase(ID)
        .subscribe(
                (localSurveyPoint: SurveyPoint) => this.editSurveyPoint(localSurveyPoint)
        );
    }

    public editSurveyPoint(editSurveyPoint: SurveyPoint)
    {
        this._SurveyPointProvider.SurveyPoint = editSurveyPoint;
        this._dialogService.open(EditSurveyPointComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyPointHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("SurveyPointHttp.updateToDatabase", result);
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

    public addSurveyPoint()
    {
        this._dialogService.open(AddSurveyPointComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        let bSaved: boolean = false;
                        console.log(JSON.stringify(result));
                        if
                        (
                            !bSaved
                            &&
                            (this._currentSurvey.Survey !== null || this._currentSurvey.Survey_ID > 0)
                        )
                        {
                            this._SurveyPointHttp.saveSurveyPointForSurvey(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("SurveyPointHttp.saveToDatabase", result);
                                    }
                                );
                            bSaved = true;
                        }

                        if (!bSaved)
                        {
                            this._SurveyPointHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("SurveyPointHttp.saveToDatabase", result);
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
            this._SurveyPointProvider.SurveyPoint
            &&
            this._SurveyPointProvider.SurveyPoint.ID < 1
        )
        {
            this._SurveyPointHttp.saveToDatabase(this._SurveyPointProvider.SurveyPoint)
                .subscribe(
                    (result) =>
                    {
                        this._SurveyPointProvider.SurveyPoint = result;
                    }
                );
        }
    }
}