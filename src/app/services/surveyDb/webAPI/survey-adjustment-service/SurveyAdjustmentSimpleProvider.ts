// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Injectable} from "@angular/core";
import {SurveyAdjustment} from "./../../types";

// Declare injectable provider for simple objects of type SurveyAdjustment

@Injectable()
export class CurrentSurveyAdjustmentProvider
{
    private _SurveyAdjustment: SurveyAdjustment;
    private _ID: number = -1;

    public get SurveyAdjustment(): SurveyAdjustment
    {
        if (!this._SurveyAdjustment && this._ID <= 0)
        {
            this._SurveyAdjustment = new SurveyAdjustment();
        }
        return this._SurveyAdjustment;
    }

    public set SurveyAdjustment(value: SurveyAdjustment)
    {
        this._SurveyAdjustment = value;
        this._ID = this._SurveyAdjustment.ID;
    }

    public get SurveyAdjustment_ID(): number
    {
        if (this.SurveyAdjustment)
        {
            return this.SurveyAdjustment.ID;
        }
        return this._ID;
    }
    public set SurveyAdjustment_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if (this.SurveyAdjustment)
        {
            this._SurveyAdjustment = null;
        }
        this._ID = -1;
    }

    hasExistingSurveyAdjustment(): boolean
    {
        return !!this._SurveyAdjustment;
    }
}

// Declare injectable provider for array of objects of type SurveyAdjustment

@Injectable()
export class CurrentSurveyAdjustmentListProvider
{
    m_listSurveyAdjustment: SurveyAdjustment[];

    get SurveyAdjustments(): SurveyAdjustment[]
    {
        if (!this.m_listSurveyAdjustment)
        {
            this.m_listSurveyAdjustment = new Array<SurveyAdjustment>();
        }
        return this.m_listSurveyAdjustment;
    }

    set SurveyAdjustments(value: SurveyAdjustment[])
    {
        this.m_listSurveyAdjustment = value;
    }
}
