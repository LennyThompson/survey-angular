// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {TraverseMeasurementSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { TraverseMeasurementSummarySubjectAccessor } from "./TraverseMeasurementSummarySubjectAccessor";
import { SurveyMeasurement, SurveyPoint, Traverse } from "./../../types";

import { CurrentSurveyMeasurementProvider } from "./../survey-measurement-service/SurveyMeasurementSimpleProvider";
import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class TraverseMeasurementSummaryServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _TraverseMeasurementSummarySubject: TraverseMeasurementSummarySubjectAccessor
    )
    {
    }

    loadAllFromDatabase() : Observable<TraverseMeasurementSummary[]>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseMeasurementSummary.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    loadForPathFromDatabase(surveyID: number, travID: number) : Observable<TraverseMeasurementSummary[]>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
        let params = new HttpParams();
        if (surveyID > 0)
        {
            params.set('surveyID', surveyID.toString());
        }
        if (travID > 0)
        {
            params.set('travID', travID.toString());
        }

        const options = { params: params };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => TraverseMeasurementSummary.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }



    loadTraverseMeasurementSummaryFromDatabase(nID : number) : Observable<TraverseMeasurementSummary>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => TraverseMeasurementSummary.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseMeasurementSummarys";
        return strPath;
    }
}
