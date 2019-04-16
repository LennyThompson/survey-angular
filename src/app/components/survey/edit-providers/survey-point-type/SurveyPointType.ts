// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {SurveyPointType} from "./../../../../services/surveyDb/types";
import {EditSurveyPointTypeComponent, AddSurveyPointTypeComponent} from "./../../form";
import {SurveyPointTypeServiceHttp, CurrentSurveyPointTypeProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyPointTypeProvider
{
    constructor(
        private _dialogService: MatDialog
        , private _SurveyPointTypeHttp: SurveyPointTypeServiceHttp
        , private _SurveyPointTypeProvider: CurrentSurveyPointTypeProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyPointTypeHttp.loadSurveyPointTypeFromDatabase(ID)
        .subscribe(
                (localSurveyPointType: SurveyPointType) => this.editSurveyPointType(localSurveyPointType)
        );
    }

    public editSurveyPointType(editSurveyPointType: SurveyPointType)
    {
        this._SurveyPointTypeProvider.SurveyPointType = editSurveyPointType;
        this._dialogService.open(EditSurveyPointTypeComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyPointTypeHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("SurveyPointTypeHttp.updateToDatabase", result);
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

    public addSurveyPointType()
    {
        this._dialogService.open(AddSurveyPointTypeComponent)
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
                            this._SurveyPointTypeHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("SurveyPointTypeHttp.saveToDatabase", result);
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
            this._SurveyPointTypeProvider.SurveyPointType
            &&
            this._SurveyPointTypeProvider.SurveyPointType.ID < 1
        )
        {
            this._SurveyPointTypeHttp.saveToDatabase(this._SurveyPointTypeProvider.SurveyPointType)
                .subscribe(
                    (result) =>
                    {
                        this._SurveyPointTypeProvider.SurveyPointType = result;
                    }
                );
        }
    }
}