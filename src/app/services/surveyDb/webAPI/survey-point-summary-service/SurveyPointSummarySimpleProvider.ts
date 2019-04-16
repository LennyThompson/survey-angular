// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Injectable} from "@angular/core";
import {SurveyPointSummary} from "./../../types";

// Declare injectable provider for simple objects of type SurveyPointSummary

@Injectable()
export class CurrentSurveyPointSummaryProvider
{
    private _SurveyPointSummary: SurveyPointSummary;
    private _ID: number = -1;

    public get SurveyPointSummary(): SurveyPointSummary
    {
        return this._SurveyPointSummary;
    }

    public set SurveyPointSummary(value: SurveyPointSummary)
    {
        this._SurveyPointSummary = value;
        this._ID = this._SurveyPointSummary.ID;
    }

    public get SurveyPointSummary_ID(): number
    {
        if (this.SurveyPointSummary)
        {
            return this.SurveyPointSummary.ID;
        }
        return this._ID;
    }
    public set SurveyPointSummary_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if (this.SurveyPointSummary)
        {
            this._SurveyPointSummary = null;
        }
        this._ID = -1;
    }

    hasExistingSurveyPointSummary(): boolean
    {
        return !!this._SurveyPointSummary;
    }
}

// Declare injectable provider for array of objects of type SurveyPointSummary

@Injectable()
export class CurrentSurveyPointSummaryListProvider
{
    m_listSurveyPointSummary: SurveyPointSummary[];

    get SurveyPointSummarys(): SurveyPointSummary[]
    {
        return this.m_listSurveyPointSummary;
    }

    set SurveyPointSummarys(value: SurveyPointSummary[])
    {
        this.m_listSurveyPointSummary = value;
    }
}
