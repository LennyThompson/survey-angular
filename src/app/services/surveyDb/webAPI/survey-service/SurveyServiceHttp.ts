// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Survey} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { SurveySubjectAccessor } from "./SurveySubjectAccessor";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentSurveyProvider }from "./../survey-service/SurveySimpleProvider";



@Injectable()
export class SurveyServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _SurveySubject: SurveySubjectAccessor
        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectProvider
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurvey : Survey) : Observable<Survey>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        let strJsonBody : string = typeSurvey.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => Survey.fromJsonObject(resp.json()))
                         .map(obsSurvey => this.notifyObservers(obsSurvey))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurvey : Survey) : Observable<Survey>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        let strJsonBody : string = typeSurvey.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => Survey.fromJsonObject(resp.json()))
                         .map(obsSurvey => this.notifyObservers(obsSurvey))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurvey: Survey): Survey
    {
        this._SurveySubject.signalUpdate();
        this._SurveyPointSummarySubject.updateForSurvey();
        this._SurveySummarySubject.updateForSurvey();

        return updateSurvey;
    }

    loadAllFromDatabase() : Observable<Survey[]>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => Survey.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadSurveyFromDatabase(nID : number) : Observable<Survey>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => Survey.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Surveys";
        return strPath;
    }
}
