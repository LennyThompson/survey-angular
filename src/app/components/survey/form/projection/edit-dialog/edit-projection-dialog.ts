// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {Projection} from "./../../../../../services/surveyDb/types";
import {CurrentProjectionProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-projection-dialog",
        templateUrl: "./edit-projection-dialog.html",
        styleUrls: ["./edit-projection-dialog.scss"]
    }
)
export class EditProjectionComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<EditProjectionComponent>,
        protected _ProjectionProvider: CurrentProjectionProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit Projection";
    }

    public get Projection(): Projection
    {
        return this._ProjectionProvider.Projection;
    }

    public set Projection(value: Projection)
    {
        this._ProjectionProvider.Projection = value;
    }

    public onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.Projection : null);
    }
}
