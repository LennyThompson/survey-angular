// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {Traverse} from "./../../../../../services/surveyDb/types";
import {CurrentTraverseProvider, CurrentSurveyProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-traverse-dialog",
        templateUrl: "add-traverse-dialog.html",
        styleUrls: ["./add-traverse-dialog.scss"]
    }
)
export class AddTraverseComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<AddTraverseComponent>
        , protected _TraverseProvider: CurrentTraverseProvider
        , protected _SurveyProvider: CurrentSurveyProvider


    )
    {
        this._TraverseProvider.Traverse = new Traverse();
        // TODO: Determine where this should really go, as this is also covered in the EditTraverseProvider, which can potentially add more context.
        //       Left here so that this component can be used independently of the EditTraverseProvider
        this._TraverseProvider.Traverse.SurveyID = this._SurveyProvider.Survey ? this._SurveyProvider.Survey.ID : this._SurveyProvider.Survey_ID;


    }

    public get title(): string
    {
        return "Add Traverse";
    }

    public get Traverse(): Traverse
    {
        return this._TraverseProvider.Traverse;
    }

    public set Traverse(value: Traverse)
    {
        this._TraverseProvider.Traverse = value;
    }

    public onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.Traverse : null);
    }
}
