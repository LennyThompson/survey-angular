// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyPointSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectAccessor } from "./SurveyPointSummarySubjectAccessor";
import { SurveyPointSummaryServiceHttp } from "./SurveyPointSummaryServiceHttp";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { Survey, SurveyPoint, SurveyReference, SurveyPointType } from "./../../types";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentSurveyReferenceProvider } from "./../survey-reference-service/SurveyReferenceSimpleProvider";
import { CurrentSurveyPointTypeProvider } from "./../survey-point-type-service/SurveyPointTypeSimpleProvider";



@Injectable()
export class SurveyPointSummarySubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<SurveyPointSummary[]>;
    constructor
    (
        private _SurveyPointSummaryService : SurveyPointSummarySubjectAccessor
        , private _SurveyPointSummaryHttp: SurveyPointSummaryServiceHttp
    )
    {
    }

    getSurveyPointSummarySummaries(): Observable<SurveyPointSummary[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyPointSummary[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    update()
    {
        if (this._summary)
        {
            this._SurveyPointSummaryHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveyPointSummary()
    {
        this.update();
    }

    public updateForSurvey()
    {
        this.update();
    }
    public updateForSurveyPoint()
    {
        this.update();
    }
    public updateForSurveyReference()
    {
        this.update();
    }
    public updateForSurveyPointType()
    {
        this.update();
    }


    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._SurveyPointSummaryService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
