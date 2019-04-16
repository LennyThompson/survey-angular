// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {InstrumentManufacturer} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentManufacturerProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-instrument-manufacturer-dialog",
        templateUrl: "./edit-instrument-manufacturer-dialog.html",
        styleUrls: ["./edit-instrument-manufacturer-dialog.scss"]
    }
)
export class EditInstrumentManufacturerComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<EditInstrumentManufacturerComponent>,
        protected _InstrumentManufacturerProvider: CurrentInstrumentManufacturerProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit InstrumentManufacturer";
    }

    public get InstrumentManufacturer(): InstrumentManufacturer
    {
        return this._InstrumentManufacturerProvider.InstrumentManufacturer;
    }

    public set InstrumentManufacturer(value: InstrumentManufacturer)
    {
        this._InstrumentManufacturerProvider.InstrumentManufacturer = value;
    }

    public onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.InstrumentManufacturer : null);
    }
}
