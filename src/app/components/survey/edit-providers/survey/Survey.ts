// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {Survey} from "./../../../../services/surveyDb/types";
import {EditSurveyComponent, AddSurveyComponent} from "./../../form";
import {SurveyServiceHttp, CurrentSurveyProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyProvider
{
    constructor(
        private _dialogService: MatDialog
        , private _SurveyHttp: SurveyServiceHttp
        , private _SurveyProvider: CurrentSurveyProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyHttp.loadSurveyFromDatabase(ID)
        .subscribe(
                (localSurvey: Survey) => this.editSurvey(localSurvey)
        );
    }

    public editSurvey(editSurvey: Survey)
    {
        this._SurveyProvider.Survey = editSurvey;
        this._dialogService.open(EditSurveyComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("SurveyHttp.updateToDatabase", result);
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

    public addSurvey()
    {
        this._dialogService.open(AddSurveyComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        let bSaved: boolean = false;
                        console.log(JSON.stringify(result));
                        if (!bSaved)
                        {
                            this._SurveyHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("SurveyHttp.saveToDatabase", result);
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
            this._SurveyProvider.Survey
            &&
            this._SurveyProvider.Survey.ID < 1
        )
        {
            this._SurveyHttp.saveToDatabase(this._SurveyProvider.Survey)
                .subscribe(
                    (result) =>
                    {
                        this._SurveyProvider.Survey = result;
                    }
                );
        }
    }
}