// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {Instrument} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-instrument-dialog",
        templateUrl: "add-instrument-dialog.html",
        styleUrls: ["./add-instrument-dialog.scss"]
    }
)
export class AddInstrumentComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<AddInstrumentComponent>
        , protected _InstrumentProvider: CurrentInstrumentProvider
    )
    {
        this._InstrumentProvider.Instrument = new Instrument();
    }

    public get title(): string
    {
        return "Add Instrument";
    }

    public get Instrument(): Instrument
    {
        return this._InstrumentProvider.Instrument;
    }

    public set Instrument(value: Instrument)
    {
        this._InstrumentProvider.Instrument = value;
    }

    public onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.Instrument : null);
    }
}
