// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Injectable} from "@angular/core";
import {Survey} from "./../../types";

// Declare injectable provider for simple objects of type Survey

@Injectable()
export class CurrentSurveyProvider
{
    private _Survey: Survey;
    private _ID: number = -1;

    public get Survey(): Survey
    {
        if (!this._Survey && this._ID <= 0)
        {
            this._Survey = new Survey();
        }
        return this._Survey;
    }

    public set Survey(value: Survey)
    {
        this._Survey = value;
        this._ID = this._Survey.ID;
    }

    public get Survey_ID(): number
    {
        if (this.Survey)
        {
            return this.Survey.ID;
        }
        return this._ID;
    }
    public set Survey_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if (this.Survey)
        {
            this._Survey = null;
        }
        this._ID = -1;
    }

    hasExistingSurvey(): boolean
    {
        return !!this._Survey;
    }
}

// Declare injectable provider for array of objects of type Survey

@Injectable()
export class CurrentSurveyListProvider
{
    m_listSurvey: Survey[];

    get Surveys(): Survey[]
    {
        if (!this.m_listSurvey)
        {
            this.m_listSurvey = new Array<Survey>();
        }
        return this.m_listSurvey;
    }

    set Surveys(value: Survey[])
    {
        this.m_listSurvey = value;
    }
}
