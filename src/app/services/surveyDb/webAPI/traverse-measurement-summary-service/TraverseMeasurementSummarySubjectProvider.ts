// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {TraverseMeasurementSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { TraverseMeasurementSummarySubjectAccessor } from "./TraverseMeasurementSummarySubjectAccessor";
import { TraverseMeasurementSummaryServiceHttp } from "./TraverseMeasurementSummaryServiceHttp";
import { SurveyMeasurement, SurveyPoint, Traverse } from "./../../types";

import { CurrentSurveyMeasurementProvider } from "./../survey-measurement-service/SurveyMeasurementSimpleProvider";
import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class TraverseMeasurementSummarySubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<TraverseMeasurementSummary[]>;
    _SurveySummaries: Map<number, BehaviorSubject<TraverseMeasurementSummary[]>>;
    _TraverseSummary: Map<number, BehaviorSubject<TraverseMeasurementSummary>>;

    constructor
    (
        private _TraverseMeasurementSummaryService : TraverseMeasurementSummarySubjectAccessor
        , private _TraverseMeasurementSummaryHttp: TraverseMeasurementSummaryServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider
        , private _TraverseCurrent: CurrentTraverseProvider

    )
    {
    }

    getTraverseMeasurementSummarySummaries(): Observable<TraverseMeasurementSummary[]>
    {
         if(this._SurveyCurrent.Survey)
        {
            let key: number = this._SurveyCurrent.Survey_ID;
            if (!this._SurveySummaries)
            {
                this._SurveySummaries = new Map<number, BehaviorSubject<TraverseMeasurementSummary[]>>();
            }
            if (!this._SurveySummaries.has(key))
            {
                this._SurveySummaries.set(key, new BehaviorSubject<TraverseMeasurementSummary[]>([]));
                this.update();
            }
            return this._SurveySummaries.get(key).asObservable();
        }


        if (!this._summary)
        {
            this._summary = new BehaviorSubject<TraverseMeasurementSummary[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getTraverseMeasurementSummarySummary(): Observable<TraverseMeasurementSummary>
    {
        if(this._TraverseCurrent.Traverse)
        {
            let key: number = this._TraverseCurrent.Traverse_ID;
            if (!this._TraverseSummary)
            {
                this._TraverseSummary = new Map<number, BehaviorSubject<TraverseMeasurementSummary>>();
            }
            if (!this._TraverseSummary.has(key))
            {
                this._TraverseSummary.set(key, new BehaviorSubject<TraverseMeasurementSummary>(null));
                this.update();
            }

            return this._TraverseSummary.get(key).asObservable();
        }
        throw new Error("No Traverse current context is provided");
    }

    update()
    {
        if
        (
            this._TraverseSummary
            &&
            this._TraverseCurrent.Traverse
            &&
            this._TraverseSummary.has(this._TraverseCurrent.Traverse_ID)
        )
        {
            this._TraverseMeasurementSummaryHttp.loadTraverseMeasurementSummaryFromDatabase(this._TraverseCurrent.Traverse.ID)
                .subscribe(
                    result => this._TraverseSummary.get(this._TraverseCurrent.Traverse_ID).next(result)
                );
        }

        let updatePathKeys: boolean = false;
        if(this._SurveySummaries){ updatePathKeys = true; }

        if(updatePathKeys)
        {
            this._TraverseMeasurementSummaryHttp.loadForPathFromDatabase(
                    this._SurveyCurrent.Survey ? this._SurveyCurrent.Survey_ID : -1,
                    -1
                )
                .subscribe(
                    result => {
                        if(this._SurveySummaries){ this._SurveySummaries.get(this._SurveyCurrent.Survey_ID).next(result); }

                    }
                );
        }

        if (this._summary)
        {
            this._TraverseMeasurementSummaryHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForTraverseMeasurementSummary()
    {
        this.update();
    }

    public updateForSurveyMeasurement()
    {
        this.update();
    }
    public updateForSurveyPoint()
    {
        this.update();
    }
    public updateForTraverse()
    {
        this.update();
    }


    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._TraverseMeasurementSummaryService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
