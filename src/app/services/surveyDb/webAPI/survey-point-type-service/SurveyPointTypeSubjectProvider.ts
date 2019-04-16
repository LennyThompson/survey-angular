// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyPointType} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointTypeSubjectAccessor } from "./SurveyPointTypeSubjectAccessor";
import { SurveyPointTypeServiceHttp } from "./SurveyPointTypeServiceHttp";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentSurveyPointTypeProvider } from "./../survey-point-type-service/SurveyPointTypeSimpleProvider";



@Injectable()
export class SurveyPointTypeSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<SurveyPointType[]>;
    private _SurveyPointTypeSummaries: Map<number, BehaviorSubject<SurveyPointType>>;

    constructor
    (
        private _SurveyPointTypeService : SurveyPointTypeSubjectAccessor
        , private _SurveyPointTypeHttp: SurveyPointTypeServiceHttp
        , private _SurveyPointTypeCurrent: CurrentSurveyPointTypeProvider

    )
    {
    }

    getSurveyPointTypeSummaries(): Observable<SurveyPointType[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyPointType[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getSurveyPointTypeSummary(): Observable<SurveyPointType>
    {
        if (this._SurveyPointTypeCurrent.SurveyPointType)
        {
            let key: number = this._SurveyPointTypeCurrent.SurveyPointType.ID;
            if (!this._SurveyPointTypeSummaries)
            {
                this._SurveyPointTypeSummaries = new Map<number, BehaviorSubject<SurveyPointType>>();
            }
            if (!this._SurveyPointTypeSummaries.has(key))
            {
                this._SurveyPointTypeSummaries.set(key, new BehaviorSubject<SurveyPointType>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._SurveyPointTypeSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyPointType current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyPointTypeSummaries
            &&
            (
                this._SurveyPointTypeCurrent.SurveyPointType
                &&
                this._SurveyPointTypeSummaries.has(this._SurveyPointTypeCurrent.SurveyPointType.ID)
            )
            ||
            (
                this._SurveyPointTypeCurrent.SurveyPointType_ID > 0
                &&
                this._SurveyPointTypeSummaries.has(this._SurveyPointTypeCurrent.SurveyPointType_ID)
            )
        )
        {
            let ID: number = this._SurveyPointTypeCurrent.SurveyPointType ? this._SurveyPointTypeCurrent.SurveyPointType.ID : this._SurveyPointTypeCurrent.SurveyPointType_ID;
            this._SurveyPointTypeHttp.loadSurveyPointTypeFromDatabase(ID)
                .subscribe(
                    result => this._SurveyPointTypeSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._SurveyPointTypeHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveyPointType()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._SurveyPointTypeService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
