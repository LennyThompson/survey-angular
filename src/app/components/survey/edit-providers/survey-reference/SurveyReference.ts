// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {SurveyReference} from "./../../../../services/surveyDb/types";
import {EditSurveyReferenceComponent, AddSurveyReferenceComponent} from "./../../form";
import {SurveyReferenceServiceHttp, CurrentSurveyReferenceProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyReferenceProvider
{
    constructor(
        private _dialogService: MatDialog
        , private _SurveyReferenceHttp: SurveyReferenceServiceHttp
        , private _SurveyReferenceProvider: CurrentSurveyReferenceProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyReferenceHttp.loadSurveyReferenceFromDatabase(ID)
        .subscribe(
                (localSurveyReference: SurveyReference) => this.editSurveyReference(localSurveyReference)
        );
    }

    public editSurveyReference(editSurveyReference: SurveyReference)
    {
        this._SurveyReferenceProvider.SurveyReference = editSurveyReference;
        this._dialogService.open(EditSurveyReferenceComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyReferenceHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("SurveyReferenceHttp.updateToDatabase", result);
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

    public addSurveyReference()
    {
        this._dialogService.open(AddSurveyReferenceComponent)
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
                            this._SurveyReferenceHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("SurveyReferenceHttp.saveToDatabase", result);
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
            this._SurveyReferenceProvider.SurveyReference
            &&
            this._SurveyReferenceProvider.SurveyReference.ID < 1
        )
        {
            this._SurveyReferenceHttp.saveToDatabase(this._SurveyReferenceProvider.SurveyReference)
                .subscribe(
                    (result) =>
                    {
                        this._SurveyReferenceProvider.SurveyReference = result;
                    }
                );
        }
    }
}