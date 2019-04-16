// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {InstrumentManufacturer} from "./../../types";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {throwError as observableThrowError} from 'rxjs';

import { InstrumentManufacturerSubjectAccessor } from "./InstrumentManufacturerSubjectAccessor";
import { CurrentInstrumentManufacturerProvider }from "./../instrument-manufacturer-service/InstrumentManufacturerSimpleProvider";



@Injectable()
export class InstrumentManufacturerServiceHttp
{
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor
    (
        private httpService : HttpClient
        , private _InstrumentManufacturerSubject: InstrumentManufacturerSubjectAccessor
    )
    {
    }

    saveToDatabase(typeInstrumentManufacturer : InstrumentManufacturer) : Observable<InstrumentManufacturer>
    {
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath();
        let strJsonBody : string = typeInstrumentManufacturer.toJson();

        return this.httpService.post(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => InstrumentManufacturer.fromJsonObject(resp.json()))
                         .map(obsInstrumentManufacturer => this.notifyObservers(obsInstrumentManufacturer))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));

    }
    updateToDatabase(typeInstrumentManufacturer : InstrumentManufacturer) : Observable<InstrumentManufacturer>
    {
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath();
        let strJsonBody : string = typeInstrumentManufacturer.toJson();

        return this.httpService.put(strPath, strJsonBody, this.httpOptions)
                         .map((resp : Response) => InstrumentManufacturer.fromJsonObject(resp.json()))
                         .map(obsInstrumentManufacturer => this.notifyObservers(obsInstrumentManufacturer))
                         .catch((error : any) => observableThrowError(error.json().error || "Server error"));
    }
    private notifyObservers(updateInstrumentManufacturer: InstrumentManufacturer): InstrumentManufacturer
    {
        this._InstrumentManufacturerSubject.signalUpdate();
        return updateInstrumentManufacturer;
    }

    loadAllFromDatabase() : Observable<InstrumentManufacturer[]>
    {
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => InstrumentManufacturer.arrayFromJson(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }


    loadInstrumentManufacturerFromDatabase(nID : number) : Observable<InstrumentManufacturer>
    {
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath();
        const options = { params: new HttpParams().set('ID', nID.toString()) };
        return this.httpService.get(strPath, options)
            .map((resp : Response) => InstrumentManufacturer.fromJsonObject(resp.json()))
            .catch((error : any) => observableThrowError("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/InstrumentManufacturers";
        return strPath;
    }
}
