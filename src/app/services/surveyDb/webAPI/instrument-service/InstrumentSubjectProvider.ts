// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Instrument} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { InstrumentSubjectAccessor } from "./InstrumentSubjectAccessor";
import { InstrumentServiceHttp } from "./InstrumentServiceHttp";
import { CurrentInstrumentProvider } from "./../instrument-service/InstrumentSimpleProvider";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";



@Injectable()
export class InstrumentSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<Instrument[]>;
    private _InstrumentSummaries: Map<number, BehaviorSubject<Instrument>>;

    constructor
    (
        private _InstrumentService : InstrumentSubjectAccessor
        , private _InstrumentHttp: InstrumentServiceHttp
        , private _InstrumentCurrent: CurrentInstrumentProvider

    )
    {
    }

    getInstrumentSummaries(): Observable<Instrument[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<Instrument[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getInstrumentSummary(): Observable<Instrument>
    {
        if (this._InstrumentCurrent.Instrument)
        {
            let key: number = this._InstrumentCurrent.Instrument.ID;
            if (!this._InstrumentSummaries)
            {
                this._InstrumentSummaries = new Map<number, BehaviorSubject<Instrument>>();
            }
            if (!this._InstrumentSummaries.has(key))
            {
                this._InstrumentSummaries.set(key, new BehaviorSubject<Instrument>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._InstrumentSummaries.get(key).asObservable();
        }
        throw new Error("No Instrument current context is provided");
    }


    update()
    {
        if
        (
            this._InstrumentSummaries
            &&
            (
                this._InstrumentCurrent.Instrument
                &&
                this._InstrumentSummaries.has(this._InstrumentCurrent.Instrument.ID)
            )
            ||
            (
                this._InstrumentCurrent.Instrument_ID > 0
                &&
                this._InstrumentSummaries.has(this._InstrumentCurrent.Instrument_ID)
            )
        )
        {
            let ID: number = this._InstrumentCurrent.Instrument ? this._InstrumentCurrent.Instrument.ID : this._InstrumentCurrent.Instrument_ID;
            this._InstrumentHttp.loadInstrumentFromDatabase(ID)
                .subscribe(
                    result => this._InstrumentSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._InstrumentHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForInstrument()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._InstrumentService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
