// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Survey} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySubjectAccessor } from "./SurveySubjectAccessor";
import { SurveyServiceHttp } from "./SurveyServiceHttp";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";



@Injectable()
export class SurveySubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<Survey[]>;
    private _SurveySummaries: Map<number, BehaviorSubject<Survey>>;

    constructor
    (
        private _SurveyService : SurveySubjectAccessor
        , private _SurveyHttp: SurveyServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider

    )
    {
    }

    getSurveySummaries(): Observable<Survey[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<Survey[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getSurveySummary(): Observable<Survey>
    {
        if (this._SurveyCurrent.Survey)
        {
            let key: number = this._SurveyCurrent.Survey.ID;
            if (!this._SurveySummaries)
            {
                this._SurveySummaries = new Map<number, BehaviorSubject<Survey>>();
            }
            if (!this._SurveySummaries.has(key))
            {
                this._SurveySummaries.set(key, new BehaviorSubject<Survey>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._SurveySummaries.get(key).asObservable();
        }
        throw new Error("No Survey current context is provided");
    }


    update()
    {
        if
        (
            this._SurveySummaries
            &&
            (
                this._SurveyCurrent.Survey
                &&
                this._SurveySummaries.has(this._SurveyCurrent.Survey.ID)
            )
            ||
            (
                this._SurveyCurrent.Survey_ID > 0
                &&
                this._SurveySummaries.has(this._SurveyCurrent.Survey_ID)
            )
        )
        {
            let ID: number = this._SurveyCurrent.Survey ? this._SurveyCurrent.Survey.ID : this._SurveyCurrent.Survey_ID;
            this._SurveyHttp.loadSurveyFromDatabase(ID)
                .subscribe(
                    result => this._SurveySummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._SurveyHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurvey()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._SurveyService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
