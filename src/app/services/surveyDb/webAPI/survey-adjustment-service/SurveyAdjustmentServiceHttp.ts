// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyAdjustment} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { SurveyAdjustmentSubjectAccessor } from "./SurveyAdjustmentSubjectAccessor";
import { CurrentSurveyAdjustmentProvider }from "./../survey-adjustment-service/SurveyAdjustmentSimpleProvider";



@Injectable()
export class SurveyAdjustmentServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _SurveyAdjustmentSubject: SurveyAdjustmentSubjectAccessor
    )
    {
    }

    saveToDatabase(typeSurveyAdjustment : SurveyAdjustment) : Observable<SurveyAdjustment>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyAdjustment.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
                         .map(obsSurveyAdjustment => this.notifyObservers(obsSurveyAdjustment))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyAdjustment : SurveyAdjustment) : Observable<SurveyAdjustment>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyAdjustment.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
                         .map(obsSurveyAdjustment => this.notifyObservers(obsSurveyAdjustment))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyAdjustment: SurveyAdjustment): SurveyAdjustment
    {
        this._SurveyAdjustmentSubject.signalUpdate();
        return updateSurveyAdjustment;
    }

    loadAllFromDatabase() : Observable<SurveyAdjustment[]>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyAdjustment.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadSurveyAdjustmentFromDatabase(nID : number) : Observable<SurveyAdjustment>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyAdjustments";
        return strPath;
    }
}
