// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyReference} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { SurveyReferenceSubjectAccessor } from "./SurveyReferenceSubjectAccessor";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentSurveyReferenceProvider }from "./../survey-reference-service/SurveyReferenceSimpleProvider";



@Injectable()
export class SurveyReferenceServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _SurveyReferenceSubject: SurveyReferenceSubjectAccessor
        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectProvider
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyReference : SurveyReference) : Observable<SurveyReference>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyReference.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyReference.fromJsonObject(resp.json()))
                         .map(obsSurveyReference => this.notifyObservers(obsSurveyReference))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyReference : SurveyReference) : Observable<SurveyReference>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyReference.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyReference.fromJsonObject(resp.json()))
                         .map(obsSurveyReference => this.notifyObservers(obsSurveyReference))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyReference: SurveyReference): SurveyReference
    {
        this._SurveyReferenceSubject.signalUpdate();
        this._SurveyPointSummarySubject.updateForSurveyReference();
        this._SurveySummarySubject.updateForSurveyReference();

        return updateSurveyReference;
    }

    loadAllFromDatabase() : Observable<SurveyReference[]>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyReference.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadSurveyReferenceFromDatabase(nID : number) : Observable<SurveyReference>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => SurveyReference.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyReferences";
        return strPath;
    }
}
