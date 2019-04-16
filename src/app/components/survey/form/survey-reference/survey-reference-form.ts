// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component, OnInit, Input} from "@angular/core";

import {SurveyReference} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-reference-form",
        templateUrl: "./survey-reference-form.html",
        styleUrls: ["./survey-reference-form.scss"]
    }
)
export class SurveyReferenceComponent implements OnInit
{
    private _SurveyReference: SurveyReference;
    constructor
    (
    )
    {
        this._SurveyReference = new SurveyReference();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyReference(value: SurveyReference)
    {
        this._SurveyReference = value;
    }

    get SurveyReference(): SurveyReference
    {
        return this._SurveyReference;
    }

}