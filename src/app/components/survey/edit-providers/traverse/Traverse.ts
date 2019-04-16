// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {Traverse} from "./../../../../services/surveyDb/types";
import {EditTraverseComponent, AddTraverseComponent} from "./../../form";
import {TraverseServiceHttp, CurrentTraverseProvider, CurrentSurveyProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditTraverseProvider
{
    constructor(
        private _dialogService: MatDialog
        , private _TraverseHttp: TraverseServiceHttp
        , private _TraverseProvider: CurrentTraverseProvider
        , private _currentSurvey: CurrentSurveyProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._TraverseHttp.loadTraverseFromDatabase(ID)
        .subscribe(
                (localTraverse: Traverse) => this.editTraverse(localTraverse)
        );
    }

    public editTraverse(editTraverse: Traverse)
    {
        this._TraverseProvider.Traverse = editTraverse;
        this._dialogService.open(EditTraverseComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        console.log(JSON.stringify(result));
                        this._TraverseHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("TraverseHttp.updateToDatabase", result);
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

    public addTraverse()
    {
        this._dialogService.open(AddTraverseComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        let bSaved: boolean = false;
                        console.log(JSON.stringify(result));
                        result.SurveyID = this._currentSurvey.Survey_ID;

                        if (!bSaved)
                        {
                            this._TraverseHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("TraverseHttp.saveToDatabase", result);
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
            this._TraverseProvider.Traverse
            &&
            this._TraverseProvider.Traverse.ID < 1
        )
        {
            this._TraverseHttp.saveToDatabase(this._TraverseProvider.Traverse)
                .subscribe(
                    (result) =>
                    {
                        this._TraverseProvider.Traverse = result;
                    }
                );
        }
    }
}