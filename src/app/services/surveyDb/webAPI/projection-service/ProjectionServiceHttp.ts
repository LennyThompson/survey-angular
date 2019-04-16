// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Projection} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { ProjectionSubjectAccessor } from "./ProjectionSubjectAccessor";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentProjectionProvider }from "./../projection-service/ProjectionSimpleProvider";



@Injectable()
export class ProjectionServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _ProjectionSubject: ProjectionSubjectAccessor
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeProjection : Projection) : Observable<Projection>
    {
        let strPath : string = ProjectionServiceHttp.buildPath();
        let strJsonBody : string = typeProjection.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => Projection.fromJsonObject(resp.json()))
                         .map(obsProjection => this.notifyObservers(obsProjection))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeProjection : Projection) : Observable<Projection>
    {
        let strPath : string = ProjectionServiceHttp.buildPath();
        let strJsonBody : string = typeProjection.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => Projection.fromJsonObject(resp.json()))
                         .map(obsProjection => this.notifyObservers(obsProjection))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    private notifyObservers(updateProjection: Projection): Projection
    {
        this._ProjectionSubject.signalUpdate();
        this._SurveySummarySubject.updateForProjection();

        return updateProjection;
    }

    loadAllFromDatabase() : Observable<Projection[]>
    {
        let strPath : string = ProjectionServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => Projection.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadProjectionFromDatabase(nID : number) : Observable<Projection>
    {
        let strPath : string = ProjectionServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => Projection.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Projections";
        return strPath;
    }
}
