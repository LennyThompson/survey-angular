// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {InstrumentManufacturer} from "./../../../../services/surveyDb/types";
import {EditInstrumentManufacturerComponent, AddInstrumentManufacturerComponent} from "./../../form";
import {InstrumentManufacturerServiceHttp, CurrentInstrumentManufacturerProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditInstrumentManufacturerProvider
{
    constructor(
        private _dialogService: MatDialog
        , private _InstrumentManufacturerHttp: InstrumentManufacturerServiceHttp
        , private _InstrumentManufacturerProvider: CurrentInstrumentManufacturerProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._InstrumentManufacturerHttp.loadInstrumentManufacturerFromDatabase(ID)
        .subscribe(
                (localInstrumentManufacturer: InstrumentManufacturer) => this.editInstrumentManufacturer(localInstrumentManufacturer)
        );
    }

    public editInstrumentManufacturer(editInstrumentManufacturer: InstrumentManufacturer)
    {
        this._InstrumentManufacturerProvider.InstrumentManufacturer = editInstrumentManufacturer;
        this._dialogService.open(EditInstrumentManufacturerComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        console.log(JSON.stringify(result));
                        this._InstrumentManufacturerHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("InstrumentManufacturerHttp.updateToDatabase", result);
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

    public addInstrumentManufacturer()
    {
        this._dialogService.open(AddInstrumentManufacturerComponent)
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
                            this._InstrumentManufacturerHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("InstrumentManufacturerHttp.saveToDatabase", result);
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
            this._InstrumentManufacturerProvider.InstrumentManufacturer
            &&
            this._InstrumentManufacturerProvider.InstrumentManufacturer.ID < 1
        )
        {
            this._InstrumentManufacturerHttp.saveToDatabase(this._InstrumentManufacturerProvider.InstrumentManufacturer)
                .subscribe(
                    (result) =>
                    {
                        this._InstrumentManufacturerProvider.InstrumentManufacturer = result;
                    }
                );
        }
    }
}