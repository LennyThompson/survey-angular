// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {SurveyImage} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyImageSubjectAccessor } from "./SurveyImageSubjectAccessor";
import { SurveyImageServiceHttp } from "./SurveyImageServiceHttp";
import { CurrentSurveyImageProvider } from "./../survey-image-service/SurveyImageSimpleProvider";



@Injectable()
export class SurveyImageSubjectProvider
{
    private _accessSubscription = null;
    private _summary: BehaviorSubject<SurveyImage[]>;
    private _SurveyImageSummaries: Map<number, BehaviorSubject<SurveyImage>>;

    constructor
    (
        private _SurveyImageService : SurveyImageSubjectAccessor
        , private _SurveyImageHttp: SurveyImageServiceHttp
        , private _SurveyImageCurrent: CurrentSurveyImageProvider

    )
    {
    }

    getSurveyImageSummaries(): Observable<SurveyImage[]>
    {
        if (!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyImage[]>([]);
            this.beginUpdateSubscription();
            this.update();
        }
        return this._summary.asObservable();
    }

    getSurveyImageSummary(): Observable<SurveyImage>
    {
        if (this._SurveyImageCurrent.SurveyImage)
        {
            let key: number = this._SurveyImageCurrent.SurveyImage.ID;
            if (!this._SurveyImageSummaries)
            {
                this._SurveyImageSummaries = new Map<number, BehaviorSubject<SurveyImage>>();
            }
            if (!this._SurveyImageSummaries.has(key))
            {
                this._SurveyImageSummaries.set(key, new BehaviorSubject<SurveyImage>(null));
                this.beginUpdateSubscription();
                this.update();
            }

            return this._SurveyImageSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyImage current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyImageSummaries
            &&
            (
                this._SurveyImageCurrent.SurveyImage
                &&
                this._SurveyImageSummaries.has(this._SurveyImageCurrent.SurveyImage.ID)
            )
            ||
            (
                this._SurveyImageCurrent.SurveyImage_ID > 0
                &&
                this._SurveyImageSummaries.has(this._SurveyImageCurrent.SurveyImage_ID)
            )
        )
        {
            let ID: number = this._SurveyImageCurrent.SurveyImage ? this._SurveyImageCurrent.SurveyImage.ID : this._SurveyImageCurrent.SurveyImage_ID;
            this._SurveyImageHttp.loadSurveyImageFromDatabase(ID)
                .subscribe(
                    result => this._SurveyImageSummaries.get(ID).next(result)
                );
        }
        if (this._summary)
        {
            this._SurveyImageHttp.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveyImage()
    {
        this.update();
    }

    private beginUpdateSubscription()
    {
        if (!this._accessSubscription)
        {
            this._accessSubscription = this._SurveyImageService.updateSubject.subscribe(
                (next) => this.update()
            );
        }
    }
}
