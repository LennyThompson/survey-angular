// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Injectable} from "@angular/core";
import {TraverseClosure} from "./../../types";

// Declare injectable provider for simple objects of type TraverseClosure

@Injectable()
export class CurrentTraverseClosureProvider
{
    private _TraverseClosure: TraverseClosure;
    private _ID: number = -1;

    public get TraverseClosure(): TraverseClosure
    {
        if (!this._TraverseClosure && this._ID <= 0)
        {
            this._TraverseClosure = new TraverseClosure();
        }
        return this._TraverseClosure;
    }

    public set TraverseClosure(value: TraverseClosure)
    {
        this._TraverseClosure = value;
        this._ID = this._TraverseClosure.ID;
    }

    public get TraverseClosure_ID(): number
    {
        if (this.TraverseClosure)
        {
            return this.TraverseClosure.ID;
        }
        return this._ID;
    }
    public set TraverseClosure_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if (this.TraverseClosure)
        {
            this._TraverseClosure = null;
        }
        this._ID = -1;
    }

    hasExistingTraverseClosure(): boolean
    {
        return !!this._TraverseClosure;
    }
}

// Declare injectable provider for array of objects of type TraverseClosure

@Injectable()
export class CurrentTraverseClosureListProvider
{
    m_listTraverseClosure: TraverseClosure[];

    get TraverseClosures(): TraverseClosure[]
    {
        if (!this.m_listTraverseClosure)
        {
            this.m_listTraverseClosure = new Array<TraverseClosure>();
        }
        return this.m_listTraverseClosure;
    }

    set TraverseClosures(value: TraverseClosure[])
    {
        this.m_listTraverseClosure = value;
    }
}
