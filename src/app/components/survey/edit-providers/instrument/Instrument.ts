// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MatDialogConfig, MatDialog} from "@angular/material";
import {Instrument} from "./../../../../services/surveyDb/types";
import {EditInstrumentComponent, AddInstrumentComponent} from "./../../form";
import {InstrumentServiceHttp, CurrentInstrumentProvider, CurrentSurveyProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditInstrumentProvider
{
    constructor(
        private _dialogService: MatDialog
        , private _InstrumentHttp: InstrumentServiceHttp
        , private _InstrumentProvider: CurrentInstrumentProvider
        , private _currentSurvey: CurrentSurveyProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._InstrumentHttp.loadInstrumentFromDatabase(ID)
        .subscribe(
                (localInstrument: Instrument) => this.editInstrument(localInstrument)
        );
    }

    public editInstrument(editInstrument: Instrument)
    {
        this._InstrumentProvider.Instrument = editInstrument;
        this._dialogService.open(EditInstrumentComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        console.log(JSON.stringify(result));
                        this._InstrumentHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("InstrumentHttp.updateToDatabase", result);
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

    public addInstrument()
    {
        this._dialogService.open(AddInstrumentComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if (result)
                    {
                        let bSaved: boolean = false;
                        console.log(JSON.stringify(result));
                        if
                        (
                            !bSaved
                            &&
                            (this._currentSurvey.Survey !== null || this._currentSurvey.Survey_ID > 0)
                        )
                        {
                            this._InstrumentHttp.saveInstrumentForSurvey(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("InstrumentHttp.saveToDatabase", result);
                                    }
                                );
                            bSaved = true;
                        }

                        if (!bSaved)
                        {
                            this._InstrumentHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("InstrumentHttp.saveToDatabase", result);
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
            this._InstrumentProvider.Instrument
            &&
            this._InstrumentProvider.Instrument.ID < 1
        )
        {
            this._InstrumentHttp.saveToDatabase(this._InstrumentProvider.Instrument)
                .subscribe(
                    (result) =>
                    {
                        this._InstrumentProvider.Instrument = result;
                    }
                );
        }
    }
}