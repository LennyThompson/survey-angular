// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyAdjustment} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyAdjustmentSubjectAccessor } from "./SurveyAdjustmentSubjectAccessor";
import { SurveyAdjustmentServiceHttp } from "./SurveyAdjustmentServiceHttp";
import { CurrentSurveyAdjustmentProvider } from "./../survey-adjustment-service/SurveyAdjustmentSimpleProvider";



@Injectable()
export class SurveyAdjustmentSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<SurveyAdjustment[]>;
    private _SurveyAdjustmentSummaries: Map<number, BehaviorSubject<SurveyAdjustment>>;

    constructor
    (
        private _SurveyAdjustmentService : SurveyAdjustmentSubjectAccessor
        , private _SurveyAdjustmentHttp: SurveyAdjustmentServiceHttp
        , private _SurveyAdjustmentCurrent: CurrentSurveyAdjustmentProvider

    )
    {
    }

    getSurveyAdjustmentSummaries(): Observable<SurveyAdjustment[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyAdjustment[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getSurveyAdjustmentSummary(): Observable<SurveyAdjustment>
    {
        if (this._SurveyAdjustmentCurrent.SurveyAdjustment)
        {
            let key: number = this._SurveyAdjustmentCurrent.SurveyAdjustment.ID;
            if (!this._SurveyAdjustmentSummaries)
            {
                this._SurveyAdjustmentSummaries = new Map<number, BehaviorSubject<SurveyAdjustment>>();
            }
            if (!this._SurveyAdjustmentSummaries.has(key))
            {
                this._SurveyAdjustmentSummaries.set(key, new BehaviorSubject<SurveyAdjustment>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._SurveyAdjustmentSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyAdjustment current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyAdjustmentSummaries
            &&
            (
                this._SurveyAdjustmentCurrent.SurveyAdjustment
                &&
                this._SurveyAdjustmentSummaries.has(this._SurveyAdjustmentCurrent.SurveyAdjustment.ID)
            )
            ||
            (
                this._SurveyAdjustmentCurrent.SurveyAdjustment_ID > 0
                &&
                this._SurveyAdjustmentSummaries.has(this._SurveyAdjustmentCurrent.SurveyAdjustment_ID)
            )
        )
        {
            let ID: number = this._SurveyAdjustmentCurrent.SurveyAdjustment ? this._SurveyAdjustmentCurrent.SurveyAdjustment.ID : this._SurveyAdjustmentCurrent.SurveyAdjustment_ID;
            this._SurveyAdjustmentHttp.loadSurveyAdjustmentFromDatabase(ID)
                .subscribe(
                    result => this._SurveyAdjustmentSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._SurveyAdjustmentHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveyAdjustment()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._SurveyAdjustmentService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
