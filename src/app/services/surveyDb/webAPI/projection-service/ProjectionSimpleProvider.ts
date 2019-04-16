// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Injectable} from "@angular/core";
import {Projection} from "./../../types";

// Declare injectable provider for simple objects of type Projection

@Injectable()
export class CurrentProjectionProvider
{
    private _Projection: Projection;
    private _ID: number = -1;

    public get Projection(): Projection
    {
        if (!this._Projection && this._ID <= 0)
        {
            this._Projection = new Projection();
        }
        return this._Projection;
    }

    public set Projection(value: Projection)
    {
        this._Projection = value;
        this._ID = this._Projection.ID;
    }

    public get Projection_ID(): number
    {
        if (this.Projection)
        {
            return this.Projection.ID;
        }
        return this._ID;
    }
    public set Projection_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if (this.Projection)
        {
            this._Projection = null;
        }
        this._ID = -1;
    }

    hasExistingProjection(): boolean
    {
        return !!this._Projection;
    }
}

// Declare injectable provider for array of objects of type Projection

@Injectable()
export class CurrentProjectionListProvider
{
    m_listProjection: Projection[];

    get Projections(): Projection[]
    {
        if (!this.m_listProjection)
        {
            this.m_listProjection = new Array<Projection>();
        }
        return this.m_listProjection;
    }

    set Projections(value: Projection[])
    {
        this.m_listProjection = value;
    }
}
