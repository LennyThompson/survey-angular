// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyMeasurement} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { SurveyMeasurementSubjectAccessor } from "./SurveyMeasurementSubjectAccessor";
import { TraverseMeasurementSummarySubjectProvider } from "./../traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";

import { CurrentSurveyMeasurementProvider }from "./../survey-measurement-service/SurveyMeasurementSimpleProvider";

import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class SurveyMeasurementServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _TraverseProvider: CurrentTraverseProvider

        , private _SurveyMeasurementSubject: SurveyMeasurementSubjectAccessor
        , private _TraverseMeasurementSummarySubject: TraverseMeasurementSummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyMeasurement.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyMeasurement.fromJsonObject(resp.json()))
                         .map(obsSurveyMeasurement => this.notifyObservers(obsSurveyMeasurement))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyMeasurement.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyMeasurement.fromJsonObject(resp.json()))
                         .map(obsSurveyMeasurement => this.notifyObservers(obsSurveyMeasurement))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    saveSurveyMeasurementForTraverse(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        strPath += "/addSurveyMeasurementToTraverse";
        let parentID: number = this._TraverseProvider.Traverse ? this._TraverseProvider.Traverse.ID : this._TraverseProvider.Traverse_ID;
        if (parentID > 0)
        {
            let strJsonBody : string = "{ \"ID\": " + parentID + ", SurveyMeasurement: " + typeSurveyMeasurement.toJson() + " }";

            return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                             .map((resp : Response) => this.notifyObservers(SurveyMeasurement.fromJsonObject(resp.json())))
                             .catch((error : any) => observableThrowError(error.json().error || "Server error"));
        }
        throw new Error("Traverse not set for SurveyMeasurement, unable to save");
    }

    private notifyObservers(updateSurveyMeasurement: SurveyMeasurement): SurveyMeasurement
    {
        this._SurveyMeasurementSubject.signalUpdate();
        this._TraverseMeasurementSummarySubject.updateForSurveyMeasurement();

        return updateSurveyMeasurement;
    }

    loadAllFromDatabase() : Observable<SurveyMeasurement[]>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyMeasurement.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadSurveyMeasurementFromDatabase(nID : number) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => SurveyMeasurement.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyMeasurements";
        return strPath;
    }
}
