// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Traverse} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { TraverseSubjectAccessor } from "./TraverseSubjectAccessor";
import { TraverseServiceHttp } from "./TraverseServiceHttp";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";
import { TraverseSummarySubjectProvider } from "./../traverse-summary-service/TraverseSummarySubjectProvider";
import { TraverseMeasurementSummarySubjectProvider } from "./../traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";

import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class TraverseSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<Traverse[]>;
    private _TraverseSummaries: Map<number, BehaviorSubject<Traverse>>;

    constructor
    (
        private _TraverseService : TraverseSubjectAccessor
        , private _TraverseHttp: TraverseServiceHttp
        , private _TraverseCurrent: CurrentTraverseProvider

    )
    {
    }

    getTraverseSummaries(): Observable<Traverse[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<Traverse[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getTraverseSummary(): Observable<Traverse>
    {
        if (this._TraverseCurrent.Traverse)
        {
            let key: number = this._TraverseCurrent.Traverse.ID;
            if (!this._TraverseSummaries)
            {
                this._TraverseSummaries = new Map<number, BehaviorSubject<Traverse>>();
            }
            if (!this._TraverseSummaries.has(key))
            {
                this._TraverseSummaries.set(key, new BehaviorSubject<Traverse>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._TraverseSummaries.get(key).asObservable();
        }
        throw new Error("No Traverse current context is provided");
    }


    update()
    {
        if
        (
            this._TraverseSummaries
            &&
            (
                this._TraverseCurrent.Traverse
                &&
                this._TraverseSummaries.has(this._TraverseCurrent.Traverse.ID)
            )
            ||
            (
                this._TraverseCurrent.Traverse_ID > 0
                &&
                this._TraverseSummaries.has(this._TraverseCurrent.Traverse_ID)
            )
        )
        {
            let ID: number = this._TraverseCurrent.Traverse ? this._TraverseCurrent.Traverse.ID : this._TraverseCurrent.Traverse_ID;
            this._TraverseHttp.loadTraverseFromDatabase(ID)
                .subscribe(
                    result => this._TraverseSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._TraverseHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForTraverse()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._TraverseService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
