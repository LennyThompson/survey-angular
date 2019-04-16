// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Injectable} from "@angular/core";
import {Traverse} from "./../../types";

// Declare injectable provider for simple objects of type Traverse

@Injectable()
export class CurrentTraverseProvider
{
    private _Traverse: Traverse;
    private _ID: number = -1;

    public get Traverse(): Traverse
    {
        if (!this._Traverse && this._ID <= 0)
        {
            this._Traverse = new Traverse();
        }
        return this._Traverse;
    }

    public set Traverse(value: Traverse)
    {
        this._Traverse = value;
        this._ID = this._Traverse.ID;
    }

    public get Traverse_ID(): number
    {
        if (this.Traverse)
        {
            return this.Traverse.ID;
        }
        return this._ID;
    }
    public set Traverse_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if (this.Traverse)
        {
            this._Traverse = null;
        }
        this._ID = -1;
    }

    hasExistingTraverse(): boolean
    {
        return !!this._Traverse;
    }
}

// Declare injectable provider for array of objects of type Traverse

@Injectable()
export class CurrentTraverseListProvider
{
    m_listTraverse: Traverse[];

    get Traverses(): Traverse[]
    {
        if (!this.m_listTraverse)
        {
            this.m_listTraverse = new Array<Traverse>();
        }
        return this.m_listTraverse;
    }

    set Traverses(value: Traverse[])
    {
        this.m_listTraverse = value;
    }
}
