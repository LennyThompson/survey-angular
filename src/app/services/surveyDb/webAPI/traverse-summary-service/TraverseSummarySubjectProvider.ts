// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {TraverseSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { TraverseSummarySubjectAccessor } from "./TraverseSummarySubjectAccessor";
import { TraverseSummaryServiceHttp } from "./TraverseSummaryServiceHttp";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { SurveyPoint, Traverse } from "./../../types";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class TraverseSummarySubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<TraverseSummary[]>;
    _SurveySummaries: Map<number, BehaviorSubject<TraverseSummary[]>>;
    _TraverseSummary: Map<number, BehaviorSubject<TraverseSummary>>;

    constructor
    (
        private _TraverseSummaryService : TraverseSummarySubjectAccessor
        , private _TraverseSummaryHttp: TraverseSummaryServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider
        , private _TraverseCurrent: CurrentTraverseProvider

    )
    {
    }

    getTraverseSummarySummaries(): Observable<TraverseSummary[]>
    {
         if(this._SurveyCurrent.Survey)
        {
            let key: number = this._SurveyCurrent.Survey_ID;
            if (!this._SurveySummaries)
            {
                this._SurveySummaries = new Map<number, BehaviorSubject<TraverseSummary[]>>();
            }
            if (!this._SurveySummaries.has(key))
            {
                this._SurveySummaries.set(key, new BehaviorSubject<TraverseSummary[]>([]));
                this.update();
            }
            return this._SurveySummaries.get(key).asObservable();
        }


        if (!this._summary)
        {
            this._summary = new BehaviorSubject<TraverseSummary[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getTraverseSummarySummary(): Observable<TraverseSummary>
    {
        if(this._TraverseCurrent.Traverse)
        {
            let key: number = this._TraverseCurrent.Traverse_ID;
            if (!this._TraverseSummary)
            {
                this._TraverseSummary = new Map<number, BehaviorSubject<TraverseSummary>>();
            }
            if (!this._TraverseSummary.has(key))
            {
                this._TraverseSummary.set(key, new BehaviorSubject<TraverseSummary>(null));
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
            this._TraverseSummaryHttp.loadTraverseSummaryFromDatabase(this._TraverseCurrent.Traverse.ID)
                .subscribe(
                    result => this._TraverseSummary.get(this._TraverseCurrent.Traverse_ID).next(result)
                );
        }

        let updatePathKeys: boolean = false;
        if(this._SurveySummaries){ updatePathKeys = true; }

        if(updatePathKeys)
        {
            this._TraverseSummaryHttp.loadForPathFromDatabase(
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
            this._TraverseSummaryHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForTraverseSummary()
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
            this._accessSubscription = this._TraverseSummaryService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
