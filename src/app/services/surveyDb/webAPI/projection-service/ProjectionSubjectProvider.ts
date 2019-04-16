// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Projection} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { ProjectionSubjectAccessor } from "./ProjectionSubjectAccessor";
import { ProjectionServiceHttp } from "./ProjectionServiceHttp";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentProjectionProvider } from "./../projection-service/ProjectionSimpleProvider";



@Injectable()
export class ProjectionSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<Projection[]>;
    private _ProjectionSummaries: Map<number, BehaviorSubject<Projection>>;

    constructor
    (
        private _ProjectionService : ProjectionSubjectAccessor
        , private _ProjectionHttp: ProjectionServiceHttp
        , private _ProjectionCurrent: CurrentProjectionProvider

    )
    {
    }

    getProjectionSummaries(): Observable<Projection[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<Projection[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getProjectionSummary(): Observable<Projection>
    {
        if (this._ProjectionCurrent.Projection)
        {
            let key: number = this._ProjectionCurrent.Projection.ID;
            if (!this._ProjectionSummaries)
            {
                this._ProjectionSummaries = new Map<number, BehaviorSubject<Projection>>();
            }
            if (!this._ProjectionSummaries.has(key))
            {
                this._ProjectionSummaries.set(key, new BehaviorSubject<Projection>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._ProjectionSummaries.get(key).asObservable();
        }
        throw new Error("No Projection current context is provided");
    }


    update()
    {
        if
        (
            this._ProjectionSummaries
            &&
            (
                this._ProjectionCurrent.Projection
                &&
                this._ProjectionSummaries.has(this._ProjectionCurrent.Projection.ID)
            )
            ||
            (
                this._ProjectionCurrent.Projection_ID > 0
                &&
                this._ProjectionSummaries.has(this._ProjectionCurrent.Projection_ID)
            )
        )
        {
            let ID: number = this._ProjectionCurrent.Projection ? this._ProjectionCurrent.Projection.ID : this._ProjectionCurrent.Projection_ID;
            this._ProjectionHttp.loadProjectionFromDatabase(ID)
                .subscribe(
                    result => this._ProjectionSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._ProjectionHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForProjection()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._ProjectionService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
