// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyPointType} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { SurveyPointTypeSubjectAccessor } from "./SurveyPointTypeSubjectAccessor";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentSurveyPointTypeProvider }from "./../survey-point-type-service/SurveyPointTypeSimpleProvider";



@Injectable()
export class SurveyPointTypeServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _SurveyPointTypeSubject: SurveyPointTypeSubjectAccessor
        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectProvider
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyPointType : SurveyPointType) : Observable<SurveyPointType>
    {
        let strPath : string = SurveyPointTypeServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyPointType.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyPointType.fromJsonObject(resp.json()))
                         .map(obsSurveyPointType => this.notifyObservers(obsSurveyPointType))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyPointType : SurveyPointType) : Observable<SurveyPointType>
    {
        let strPath : string = SurveyPointTypeServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyPointType.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyPointType.fromJsonObject(resp.json()))
                         .map(obsSurveyPointType => this.notifyObservers(obsSurveyPointType))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyPointType: SurveyPointType): SurveyPointType
    {
        this._SurveyPointTypeSubject.signalUpdate();
        this._SurveyPointSummarySubject.updateForSurveyPointType();
        this._SurveySummarySubject.updateForSurveyPointType();

        return updateSurveyPointType;
    }

    loadAllFromDatabase() : Observable<SurveyPointType[]>
    {
        let strPath : string = SurveyPointTypeServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPointType.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadSurveyPointTypeFromDatabase(nID : number) : Observable<SurveyPointType>
    {
        let strPath : string = SurveyPointTypeServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => SurveyPointType.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyPointTypes";
        return strPath;
    }
}
