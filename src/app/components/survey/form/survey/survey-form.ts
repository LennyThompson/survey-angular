// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:32:23 AEST 2018

import {Component, OnInit, Input} from "@angular/core";

import {Survey} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-form",
        templateUrl: "./survey-form.html",
        styleUrls: ["./survey-form.scss"]
    }
)
export class SurveyComponent implements OnInit
{
    private _Survey: Survey;
    constructor
    (
    )
    {
        this._Survey = new Survey();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set Survey(value: Survey)
    {
        this._Survey = value;
    }

    get Survey(): Survey
    {
        return this._Survey;
    }

}