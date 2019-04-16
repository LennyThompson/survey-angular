// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {InstrumentManufacturer} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentManufacturerProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-instrument-manufacturer-dialog",
        templateUrl: "add-instrument-manufacturer-dialog.html",
        styleUrls: ["./add-instrument-manufacturer-dialog.scss"]
    }
)
export class AddInstrumentManufacturerComponent
{
    constructor
    (
        protected _dialog: MatDialogRef<AddInstrumentManufacturerComponent>
        , protected _InstrumentManufacturerProvider: CurrentInstrumentManufacturerProvider
    )
    {
        this._InstrumentManufacturerProvider.InstrumentManufacturer = new InstrumentManufacturer();
    }

    public get title(): string
    {
        return "Add InstrumentManufacturer";
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
