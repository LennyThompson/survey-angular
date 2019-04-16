// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyMeasurement} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyMeasurementSubjectAccessor } from "./SurveyMeasurementSubjectAccessor";
import { SurveyMeasurementServiceHttp } from "./SurveyMeasurementServiceHttp";
import { TraverseMeasurementSummarySubjectProvider } from "./../traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";

import { CurrentSurveyMeasurementProvider } from "./../survey-measurement-service/SurveyMeasurementSimpleProvider";

import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class SurveyMeasurementSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<SurveyMeasurement[]>;
    private _SurveyMeasurementSummaries: Map<number, BehaviorSubject<SurveyMeasurement>>;

    constructor
    (
        private _SurveyMeasurementService : SurveyMeasurementSubjectAccessor
        , private _SurveyMeasurementHttp: SurveyMeasurementServiceHttp
        , private _SurveyMeasurementCurrent: CurrentSurveyMeasurementProvider

    )
    {
    }

    getSurveyMeasurementSummaries(): Observable<SurveyMeasurement[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyMeasurement[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getSurveyMeasurementSummary(): Observable<SurveyMeasurement>
    {
        if (this._SurveyMeasurementCurrent.SurveyMeasurement)
        {
            let key: number = this._SurveyMeasurementCurrent.SurveyMeasurement.ID;
            if (!this._SurveyMeasurementSummaries)
            {
                this._SurveyMeasurementSummaries = new Map<number, BehaviorSubject<SurveyMeasurement>>();
            }
            if (!this._SurveyMeasurementSummaries.has(key))
            {
                this._SurveyMeasurementSummaries.set(key, new BehaviorSubject<SurveyMeasurement>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._SurveyMeasurementSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyMeasurement current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyMeasurementSummaries
            &&
            (
                this._SurveyMeasurementCurrent.SurveyMeasurement
                &&
                this._SurveyMeasurementSummaries.has(this._SurveyMeasurementCurrent.SurveyMeasurement.ID)
            )
            ||
            (
                this._SurveyMeasurementCurrent.SurveyMeasurement_ID > 0
                &&
                this._SurveyMeasurementSummaries.has(this._SurveyMeasurementCurrent.SurveyMeasurement_ID)
            )
        )
        {
            let ID: number = this._SurveyMeasurementCurrent.SurveyMeasurement ? this._SurveyMeasurementCurrent.SurveyMeasurement.ID : this._SurveyMeasurementCurrent.SurveyMeasurement_ID;
            this._SurveyMeasurementHttp.loadSurveyMeasurementFromDatabase(ID)
                .subscribe(
                    result => this._SurveyMeasurementSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._SurveyMeasurementHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveyMeasurement()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._SurveyMeasurementService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
