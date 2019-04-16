// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {TraverseClosure} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { TraverseClosureSubjectAccessor } from "./TraverseClosureSubjectAccessor";
import { TraverseClosureServiceHttp } from "./TraverseClosureServiceHttp";
import { CurrentTraverseClosureProvider } from "./../traverse-closure-service/TraverseClosureSimpleProvider";



@Injectable()
export class TraverseClosureSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<TraverseClosure[]>;
    private _TraverseClosureSummaries: Map<number, BehaviorSubject<TraverseClosure>>;

    constructor
    (
        private _TraverseClosureService : TraverseClosureSubjectAccessor
        , private _TraverseClosureHttp: TraverseClosureServiceHttp
        , private _TraverseClosureCurrent: CurrentTraverseClosureProvider

    )
    {
    }

    getTraverseClosureSummaries(): Observable<TraverseClosure[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<TraverseClosure[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getTraverseClosureSummary(): Observable<TraverseClosure>
    {
        if (this._TraverseClosureCurrent.TraverseClosure)
        {
            let key: number = this._TraverseClosureCurrent.TraverseClosure.ID;
            if (!this._TraverseClosureSummaries)
            {
                this._TraverseClosureSummaries = new Map<number, BehaviorSubject<TraverseClosure>>();
            }
            if (!this._TraverseClosureSummaries.has(key))
            {
                this._TraverseClosureSummaries.set(key, new BehaviorSubject<TraverseClosure>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._TraverseClosureSummaries.get(key).asObservable();
        }
        throw new Error("No TraverseClosure current context is provided");
    }


    update()
    {
        if
        (
            this._TraverseClosureSummaries
            &&
            (
                this._TraverseClosureCurrent.TraverseClosure
                &&
                this._TraverseClosureSummaries.has(this._TraverseClosureCurrent.TraverseClosure.ID)
            )
            ||
            (
                this._TraverseClosureCurrent.TraverseClosure_ID > 0
                &&
                this._TraverseClosureSummaries.has(this._TraverseClosureCurrent.TraverseClosure_ID)
            )
        )
        {
            let ID: number = this._TraverseClosureCurrent.TraverseClosure ? this._TraverseClosureCurrent.TraverseClosure.ID : this._TraverseClosureCurrent.TraverseClosure_ID;
            this._TraverseClosureHttp.loadTraverseClosureFromDatabase(ID)
                .subscribe(
                    result => this._TraverseClosureSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._TraverseClosureHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForTraverseClosure()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._TraverseClosureService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
