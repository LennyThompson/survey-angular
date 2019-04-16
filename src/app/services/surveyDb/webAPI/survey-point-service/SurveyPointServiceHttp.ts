// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyPoint} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { SurveyPointSubjectAccessor } from "./SurveyPointSubjectAccessor";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";
import { TraverseSummarySubjectProvider } from "./../traverse-summary-service/TraverseSummarySubjectProvider";
import { TraverseMeasurementSummarySubjectProvider } from "./../traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";

import { CurrentSurveyPointProvider }from "./../survey-point-service/SurveyPointSimpleProvider";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";



@Injectable()
export class SurveyPointServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _SurveyProvider: CurrentSurveyProvider

        , private _SurveyPointSubject: SurveyPointSubjectAccessor
        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectProvider
        , private _SurveySummarySubject: SurveySummarySubjectProvider
        , private _TraverseSummarySubject: TraverseSummarySubjectProvider
        , private _TraverseMeasurementSummarySubject: TraverseMeasurementSummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyPoint : SurveyPoint) : Observable<SurveyPoint>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyPoint.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyPoint.fromJsonObject(resp.json()))
                         .map(obsSurveyPoint => this.notifyObservers(obsSurveyPoint))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyPoint : SurveyPoint) : Observable<SurveyPoint>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyPoint.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyPoint.fromJsonObject(resp.json()))
                         .map(obsSurveyPoint => this.notifyObservers(obsSurveyPoint))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    saveSurveyPointForSurvey(typeSurveyPoint : SurveyPoint) : Observable<SurveyPoint>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        strPath += "/addSurveyPointToSurvey";
        let parentID: number = this._SurveyProvider.Survey ? this._SurveyProvider.Survey.ID : this._SurveyProvider.Survey_ID;
        if (parentID > 0)
        {
            let strJsonBody : string = "{ \"ID\": " + parentID + ", SurveyPoint: " + typeSurveyPoint.toJson() + " }";

            return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                             .map((resp : Response) => this.notifyObservers(SurveyPoint.fromJsonObject(resp.json())))
                             .catch((error : any) => observableThrowError(error.json().error || "Server error"));
        }
        throw new Error("Survey not set for SurveyPoint, unable to save");
    }

    private notifyObservers(updateSurveyPoint: SurveyPoint): SurveyPoint
    {
        this._SurveyPointSubject.signalUpdate();
        this._SurveyPointSummarySubject.updateForSurveyPoint();
        this._SurveySummarySubject.updateForSurveyPoint();
        this._TraverseSummarySubject.updateForSurveyPoint();
        this._TraverseMeasurementSummarySubject.updateForSurveyPoint();

        return updateSurveyPoint;
    }

    loadAllFromDatabase() : Observable<SurveyPoint[]>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPoint.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadSurveyPointFromDatabase(nID : number) : Observable<SurveyPoint>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => SurveyPoint.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyPoints";
        return strPath;
    }
}
