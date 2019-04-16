// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {TraverseClosure} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { TraverseClosureSubjectAccessor } from "./TraverseClosureSubjectAccessor";
import { CurrentTraverseClosureProvider }from "./../traverse-closure-service/TraverseClosureSimpleProvider";



@Injectable()
export class TraverseClosureServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _TraverseClosureSubject: TraverseClosureSubjectAccessor
    )
    {
    }

    saveToDatabase(typeTraverseClosure : TraverseClosure) : Observable<TraverseClosure>
    {
        let strPath : string = TraverseClosureServiceHttp.buildPath();
        let strJsonBody : string = typeTraverseClosure.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => TraverseClosure.fromJsonObject(resp.json()))
                         .map(obsTraverseClosure => this.notifyObservers(obsTraverseClosure))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeTraverseClosure : TraverseClosure) : Observable<TraverseClosure>
    {
        let strPath : string = TraverseClosureServiceHttp.buildPath();
        let strJsonBody : string = typeTraverseClosure.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => TraverseClosure.fromJsonObject(resp.json()))
                         .map(obsTraverseClosure => this.notifyObservers(obsTraverseClosure))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    private notifyObservers(updateTraverseClosure: TraverseClosure): TraverseClosure
    {
        this._TraverseClosureSubject.signalUpdate();
        return updateTraverseClosure;
    }

    loadAllFromDatabase() : Observable<TraverseClosure[]>
    {
        let strPath : string = TraverseClosureServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseClosure.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadTraverseClosureFromDatabase(nID : number) : Observable<TraverseClosure>
    {
        let strPath : string = TraverseClosureServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => TraverseClosure.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseClosures";
        return strPath;
    }
}
