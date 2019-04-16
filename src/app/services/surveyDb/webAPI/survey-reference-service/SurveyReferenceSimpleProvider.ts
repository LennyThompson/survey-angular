// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Injectable} from "@angular/core";
import {SurveyReference} from "./../../types";

// Declare injectable provider for simple objects of type SurveyReference

@Injectable()
export class CurrentSurveyReferenceProvider
{
    private _SurveyReference: SurveyReference;
    private _ID: number = -1;

    public get SurveyReference(): SurveyReference
    {
        if (!this._SurveyReference && this._ID <= 0)
        {
            this._SurveyReference = new SurveyReference();
        }
        return this._SurveyReference;
    }

    public set SurveyReference(value: SurveyReference)
    {
        this._SurveyReference = value;
        this._ID = this._SurveyReference.ID;
    }

    public get SurveyReference_ID(): number
    {
        if (this.SurveyReference)
        {
            return this.SurveyReference.ID;
        }
        return this._ID;
    }
    public set SurveyReference_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if (this.SurveyReference)
        {
            this._SurveyReference = null;
        }
        this._ID = -1;
    }

    hasExistingSurveyReference(): boolean
    {
        return !!this._SurveyReference;
    }
}

// Declare injectable provider for array of objects of type SurveyReference

@Injectable()
export class CurrentSurveyReferenceListProvider
{
    m_listSurveyReference: SurveyReference[];

    get SurveyReferences(): SurveyReference[]
    {
        if (!this.m_listSurveyReference)
        {
            this.m_listSurveyReference = new Array<SurveyReference>();
        }
        return this.m_listSurveyReference;
    }

    set SurveyReferences(value: SurveyReference[])
    {
        this.m_listSurveyReference = value;
    }
}
