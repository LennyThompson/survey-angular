// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveySummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectAccessor } from "./SurveySummarySubjectAccessor";
import { SurveySummaryServiceHttp } from "./SurveySummaryServiceHttp";
import { Survey, SurveyPoint, Projection, SurveyReference, Traverse, SurveyPointType } from "./../../types";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentProjectionProvider } from "./../projection-service/ProjectionSimpleProvider";
import { CurrentSurveyReferenceProvider } from "./../survey-reference-service/SurveyReferenceSimpleProvider";
import { CurrentSurveyPointTypeProvider } from "./../survey-point-type-service/SurveyPointTypeSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class SurveySummarySubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<SurveySummary[]>;
    constructor
    (
        private _SurveySummaryService : SurveySummarySubjectAccessor
        , private _SurveySummaryHttp: SurveySummaryServiceHttp
    )
    {
    }

    getSurveySummarySummaries(): Observable<SurveySummary[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<SurveySummary[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    update()
    {
        if (this._summary)
        {
            this._SurveySummaryHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveySummary()
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
    public updateForProjection()
    {
        this.update();
    }
    public updateForSurveyReference()
    {
        this.update();
    }
    public updateForTraverse()
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
            this._accessSubscription = this._SurveySummaryService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
