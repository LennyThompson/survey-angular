// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyImage} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { SurveyImageSubjectAccessor } from "./SurveyImageSubjectAccessor";
import { CurrentSurveyImageProvider }from "./../survey-image-service/SurveyImageSimpleProvider";



@Injectable()
export class SurveyImageServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _SurveyImageSubject: SurveyImageSubjectAccessor
    )
    {
    }

    saveToDatabase(typeSurveyImage : SurveyImage) : Observable<SurveyImage>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyImage.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyImage.fromJsonObject(resp.json()))
                         .map(obsSurveyImage => this.notifyObservers(obsSurveyImage))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyImage : SurveyImage) : Observable<SurveyImage>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyImage.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => SurveyImage.fromJsonObject(resp.json()))
                         .map(obsSurveyImage => this.notifyObservers(obsSurveyImage))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyImage: SurveyImage): SurveyImage
    {
        this._SurveyImageSubject.signalUpdate();
        return updateSurveyImage;
    }

    loadAllFromDatabase() : Observable<SurveyImage[]>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyImage.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadSurveyImageFromDatabase(nID : number) : Observable<SurveyImage>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => SurveyImage.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyImages";
        return strPath;
    }
}
