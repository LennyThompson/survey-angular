// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyPoint} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSubjectAccessor } from "./SurveyPointSubjectAccessor";
import { SurveyPointServiceHttp } from "./SurveyPointServiceHttp";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";
import { TraverseSummarySubjectProvider } from "./../traverse-summary-service/TraverseSummarySubjectProvider";
import { TraverseMeasurementSummarySubjectProvider } from "./../traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";

import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";



@Injectable()
export class SurveyPointSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<SurveyPoint[]>;
    private _SurveyPointSummaries: Map<number, BehaviorSubject<SurveyPoint>>;

    constructor
    (
        private _SurveyPointService : SurveyPointSubjectAccessor
        , private _SurveyPointHttp: SurveyPointServiceHttp
        , private _SurveyPointCurrent: CurrentSurveyPointProvider

    )
    {
    }

    getSurveyPointSummaries(): Observable<SurveyPoint[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyPoint[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getSurveyPointSummary(): Observable<SurveyPoint>
    {
        if (this._SurveyPointCurrent.SurveyPoint)
        {
            let key: number = this._SurveyPointCurrent.SurveyPoint.ID;
            if (!this._SurveyPointSummaries)
            {
                this._SurveyPointSummaries = new Map<number, BehaviorSubject<SurveyPoint>>();
            }
            if (!this._SurveyPointSummaries.has(key))
            {
                this._SurveyPointSummaries.set(key, new BehaviorSubject<SurveyPoint>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._SurveyPointSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyPoint current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyPointSummaries
            &&
            (
                this._SurveyPointCurrent.SurveyPoint
                &&
                this._SurveyPointSummaries.has(this._SurveyPointCurrent.SurveyPoint.ID)
            )
            ||
            (
                this._SurveyPointCurrent.SurveyPoint_ID > 0
                &&
                this._SurveyPointSummaries.has(this._SurveyPointCurrent.SurveyPoint_ID)
            )
        )
        {
            let ID: number = this._SurveyPointCurrent.SurveyPoint ? this._SurveyPointCurrent.SurveyPoint.ID : this._SurveyPointCurrent.SurveyPoint_ID;
            this._SurveyPointHttp.loadSurveyPointFromDatabase(ID)
                .subscribe(
                    result => this._SurveyPointSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._SurveyPointHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveyPoint()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._SurveyPointService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
