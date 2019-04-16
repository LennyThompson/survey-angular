// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Instrument} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { InstrumentSubjectAccessor } from "./InstrumentSubjectAccessor";
import { CurrentInstrumentProvider }from "./../instrument-service/InstrumentSimpleProvider";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";



@Injectable()
export class InstrumentServiceHttp
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

        , private _InstrumentSubject: InstrumentSubjectAccessor
    )
    {
    }

    saveToDatabase(typeInstrument : Instrument) : Observable<Instrument>
    {
        let strPath : string = InstrumentServiceHttp.buildPath();
        let strJsonBody : string = typeInstrument.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => Instrument.fromJsonObject(resp.json()))
                         .map(obsInstrument => this.notifyObservers(obsInstrument))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeInstrument : Instrument) : Observable<Instrument>
    {
        let strPath : string = InstrumentServiceHttp.buildPath();
        let strJsonBody : string = typeInstrument.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => Instrument.fromJsonObject(resp.json()))
                         .map(obsInstrument => this.notifyObservers(obsInstrument))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    saveInstrumentForSurvey(typeInstrument : Instrument) : Observable<Instrument>
    {
        let strPath : string = InstrumentServiceHttp.buildPath();
        strPath += "/addInstrumentToSurvey";
        let parentID: number = this._SurveyProvider.Survey ? this._SurveyProvider.Survey.ID : this._SurveyProvider.Survey_ID;
        if (parentID > 0)
        {
            let strJsonBody : string = "{ \"ID\": " + parentID + ", Instrument: " + typeInstrument.toJson() + " }";

            return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                             .map((resp : Response) => this.notifyObservers(Instrument.fromJsonObject(resp.json())))
                             .catch((error : any) => observableThrowError(error.json().error || "Server error"));
        }
        throw new Error("Survey not set for Instrument, unable to save");
    }

    private notifyObservers(updateInstrument: Instrument): Instrument
    {
        this._InstrumentSubject.signalUpdate();
        return updateInstrument;
    }

    loadAllFromDatabase() : Observable<Instrument[]>
    {
        let strPath : string = InstrumentServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => Instrument.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadInstrumentFromDatabase(nID : number) : Observable<Instrument>
    {
        let strPath : string = InstrumentServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => Instrument.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Instruments";
        return strPath;
    }
}
