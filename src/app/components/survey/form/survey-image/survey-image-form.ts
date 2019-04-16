// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component, OnInit, Input} from "@angular/core";

import {SurveyImage} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-image-form",
        templateUrl: "./survey-image-form.html",
        styleUrls: ["./survey-image-form.scss"]
    }
)
export class SurveyImageComponent implements OnInit
{
    private _SurveyImage: SurveyImage;
    constructor
    (
    )
    {
        this._SurveyImage = new SurveyImage();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyImage(value: SurveyImage)
    {
        this._SurveyImage = value;
    }

    get SurveyImage(): SurveyImage
    {
        return this._SurveyImage;
    }

}