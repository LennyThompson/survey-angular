// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {TraverseSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { TraverseSummarySubjectAccessor } from "./TraverseSummarySubjectAccessor";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { SurveyPoint, Traverse } from "./../../types";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class TraverseSummaryServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _TraverseSummarySubject: TraverseSummarySubjectAccessor
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    loadAllFromDatabase() : Observable<TraverseSummary[]>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseSummary.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    loadForPathFromDatabase(surveyID: number, travID: number) : Observable<TraverseSummary[]>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
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
            .map((resp : Response) => TraverseSummary.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }



    loadTraverseSummaryFromDatabase(nID : number) : Observable<TraverseSummary>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => TraverseSummary.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseSummarys";
        return strPath;
    }
}
