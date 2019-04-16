// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {InstrumentManufacturer} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { InstrumentManufacturerSubjectAccessor } from "./InstrumentManufacturerSubjectAccessor";
import { InstrumentManufacturerServiceHttp } from "./InstrumentManufacturerServiceHttp";
import { CurrentInstrumentManufacturerProvider } from "./../instrument-manufacturer-service/InstrumentManufacturerSimpleProvider";



@Injectable()
export class InstrumentManufacturerSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<InstrumentManufacturer[]>;
    private _InstrumentManufacturerSummaries: Map<number, BehaviorSubject<InstrumentManufacturer>>;

    constructor
    (
        private _InstrumentManufacturerService : InstrumentManufacturerSubjectAccessor
        , private _InstrumentManufacturerHttp: InstrumentManufacturerServiceHttp
        , private _InstrumentManufacturerCurrent: CurrentInstrumentManufacturerProvider

    )
    {
    }

    getInstrumentManufacturerSummaries(): Observable<InstrumentManufacturer[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<InstrumentManufacturer[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getInstrumentManufacturerSummary(): Observable<InstrumentManufacturer>
    {
        if (this._InstrumentManufacturerCurrent.InstrumentManufacturer)
        {
            let key: number = this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID;
            if (!this._InstrumentManufacturerSummaries)
            {
                this._InstrumentManufacturerSummaries = new Map<number, BehaviorSubject<InstrumentManufacturer>>();
            }
            if (!this._InstrumentManufacturerSummaries.has(key))
            {
                this._InstrumentManufacturerSummaries.set(key, new BehaviorSubject<InstrumentManufacturer>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._InstrumentManufacturerSummaries.get(key).asObservable();
        }
        throw new Error("No InstrumentManufacturer current context is provided");
    }


    update()
    {
        if
        (
            this._InstrumentManufacturerSummaries
            &&
            (
                this._InstrumentManufacturerCurrent.InstrumentManufacturer
                &&
                this._InstrumentManufacturerSummaries.has(this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID)
            )
            ||
            (
                this._InstrumentManufacturerCurrent.InstrumentManufacturer_ID > 0
                &&
                this._InstrumentManufacturerSummaries.has(this._InstrumentManufacturerCurrent.InstrumentManufacturer_ID)
            )
        )
        {
            let ID: number = this._InstrumentManufacturerCurrent.InstrumentManufacturer ? this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID : this._InstrumentManufacturerCurrent.InstrumentManufacturer_ID;
            this._InstrumentManufacturerHttp.loadInstrumentManufacturerFromDatabase(ID)
                .subscribe(
                    result => this._InstrumentManufacturerSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._InstrumentManufacturerHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForInstrumentManufacturer()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._InstrumentManufacturerService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
