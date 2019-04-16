// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {Projection} from "./../../../../services/surveyDb/types";
import {EditProjectionComponent, AddProjectionComponent} from "./../../form";
import {ProjectionServiceHttp, CurrentProjectionProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditProjectionProvider
{
    constructor(
        private _dialogService: MatDialog
        , private _ProjectionHttp: ProjectionServiceHttp
        , private _ProjectionProvider: CurrentProjectionProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._ProjectionHttp.loadProjectionFromDatabase(ID)
        .subscribe(
                (localProjection: Projection) => this.editProjection(localProjection)
        );
    }

    public editProjection(editProjection: Projection)
    {
        this._ProjectionProvider.Projection = editProjection;
        this._dialogService.open(EditProjectionComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        console.log(JSON.stringify(result));
                        this._ProjectionHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("ProjectionHttp.updateToDatabase", result);
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

    public addProjection()
    {
        this._dialogService.open(AddProjectionComponent)
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
                            this._ProjectionHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("ProjectionHttp.saveToDatabase", result);
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
            this._ProjectionProvider.Projection
            &&
            this._ProjectionProvider.Projection.ID < 1
        )
        {
            this._ProjectionHttp.saveToDatabase(this._ProjectionProvider.Projection)
                .subscribe(
                    (result) =>
                    {
                        this._ProjectionProvider.Projection = result;
                    }
                );
        }
    }
}