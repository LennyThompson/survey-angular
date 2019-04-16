// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Traverse} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { TraverseSubjectAccessor } from "./TraverseSubjectAccessor";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";
import { TraverseSummarySubjectProvider } from "./../traverse-summary-service/TraverseSummarySubjectProvider";
import { TraverseMeasurementSummarySubjectProvider } from "./../traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";

import { CurrentTraverseProvider }from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class TraverseServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _TraverseSubject: TraverseSubjectAccessor
        , private _SurveySummarySubject: SurveySummarySubjectProvider
        , private _TraverseSummarySubject: TraverseSummarySubjectProvider
        , private _TraverseMeasurementSummarySubject: TraverseMeasurementSummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeTraverse : Traverse) : Observable<Traverse>
    {
        let strPath : string = TraverseServiceHttp.buildPath();
        let strJsonBody : string = typeTraverse.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => Traverse.fromJsonObject(resp.json()))
                         .map(obsTraverse => this.notifyObservers(obsTraverse))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeTraverse : Traverse) : Observable<Traverse>
    {
        let strPath : string = TraverseServiceHttp.buildPath();
        let strJsonBody : string = typeTraverse.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => Traverse.fromJsonObject(resp.json()))
                         .map(obsTraverse => this.notifyObservers(obsTraverse))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    private notifyObservers(updateTraverse: Traverse): Traverse
    {
        this._TraverseSubject.signalUpdate();
        this._SurveySummarySubject.updateForTraverse();
        this._TraverseSummarySubject.updateForTraverse();
        this._TraverseMeasurementSummarySubject.updateForTraverse();

        return updateTraverse;
    }

    loadAllFromDatabase() : Observable<Traverse[]>
    {
        let strPath : string = TraverseServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => Traverse.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadTraverseFromDatabase(nID : number) : Observable<Traverse>
    {
        let strPath : string = TraverseServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => Traverse.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Traverses";
        return strPath;
    }
}
