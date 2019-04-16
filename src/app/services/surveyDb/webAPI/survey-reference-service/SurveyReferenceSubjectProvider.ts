// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyReference} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyReferenceSubjectAccessor } from "./SurveyReferenceSubjectAccessor";
import { SurveyReferenceServiceHttp } from "./SurveyReferenceServiceHttp";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentSurveyReferenceProvider } from "./../survey-reference-service/SurveyReferenceSimpleProvider";



@Injectable()
export class SurveyReferenceSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<SurveyReference[]>;
    private _SurveyReferenceSummaries: Map<number, BehaviorSubject<SurveyReference>>;

    constructor
    (
        private _SurveyReferenceService : SurveyReferenceSubjectAccessor
        , private _SurveyReferenceHttp: SurveyReferenceServiceHttp
        , private _SurveyReferenceCurrent: CurrentSurveyReferenceProvider

    )
    {
    }

    getSurveyReferenceSummaries(): Observable<SurveyReference[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyReference[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getSurveyReferenceSummary(): Observable<SurveyReference>
    {
        if (this._SurveyReferenceCurrent.SurveyReference)
        {
            let key: number = this._SurveyReferenceCurrent.SurveyReference.ID;
            if (!this._SurveyReferenceSummaries)
            {
                this._SurveyReferenceSummaries = new Map<number, BehaviorSubject<SurveyReference>>();
            }
            if (!this._SurveyReferenceSummaries.has(key))
            {
                this._SurveyReferenceSummaries.set(key, new BehaviorSubject<SurveyReference>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._SurveyReferenceSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyReference current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyReferenceSummaries
            &&
            (
                this._SurveyReferenceCurrent.SurveyReference
                &&
                this._SurveyReferenceSummaries.has(this._SurveyReferenceCurrent.SurveyReference.ID)
            )
            ||
            (
                this._SurveyReferenceCurrent.SurveyReference_ID > 0
                &&
                this._SurveyReferenceSummaries.has(this._SurveyReferenceCurrent.SurveyReference_ID)
            )
        )
        {
            let ID: number = this._SurveyReferenceCurrent.SurveyReference ? this._SurveyReferenceCurrent.SurveyReference.ID : this._SurveyReferenceCurrent.SurveyReference_ID;
            this._SurveyReferenceHttp.loadSurveyReferenceFromDatabase(ID)
                .subscribe(
                    result => this._SurveyReferenceSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._SurveyReferenceHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveyReference()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._SurveyReferenceService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
