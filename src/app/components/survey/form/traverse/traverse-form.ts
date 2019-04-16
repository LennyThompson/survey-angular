// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component, OnInit, Input} from "@angular/core";

import {Traverse} from "./../../../../services/surveyDb/types";
import { Observable } from "rxjs/Rx";
import { TraverseMeasurementSummary } from "./../../../../services/surveyDb/types";
import { CurrentTraverseProvider, TraverseMeasurementSummarySubjectProvider } from "./../../../../services/surveyDb/webAPI";


@Component (
    {
        selector: "traverse-form",
        templateUrl: "./traverse-form.html",
        styleUrls: ["./traverse-form.scss"]
    }
)
export class TraverseComponent implements OnInit
{
    private _Traverse: Traverse;
    constructor
    (
        private _currentTraverse: CurrentTraverseProvider
        , private _TraverseMeasurementSummary: TraverseMeasurementSummarySubjectProvider


    )
    {
        this._Traverse = new Traverse();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set Traverse(value: Traverse)
    {
        this._Traverse = value;
    }

    get Traverse(): Traverse
    {
        return this._Traverse;
    }

    public get TraverseMeasurementSummary(): Observable<TraverseMeasurementSummary>
    {
        this._currentTraverse.Traverse = this.Traverse;
        return this._TraverseMeasurementSummary.getTraverseMeasurementSummarySummary();
    }


}