// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Injectable} from "@angular/core";
import {Instrument} from "./../../types";

// Declare injectable provider for simple objects of type Instrument

@Injectable()
export class CurrentInstrumentProvider
{
    private _Instrument: Instrument;
    private _ID: number = -1;

    public get Instrument(): Instrument
    {
        if (!this._Instrument && this._ID <= 0)
        {
            this._Instrument = new Instrument();
        }
        return this._Instrument;
    }

    public set Instrument(value: Instrument)
    {
        this._Instrument = value;
        this._ID = this._Instrument.ID;
    }

    public get Instrument_ID(): number
    {
        if (this.Instrument)
        {
            return this.Instrument.ID;
        }
        return this._ID;
    }
    public set Instrument_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if (this.Instrument)
        {
            this._Instrument = null;
        }
        this._ID = -1;
    }

    hasExistingInstrument(): boolean
    {
        return !!this._Instrument;
    }
}

// Declare injectable provider for array of objects of type Instrument

@Injectable()
export class CurrentInstrumentListProvider
{
    m_listInstrument: Instrument[];

    get Instruments(): Instrument[]
    {
        if (!this.m_listInstrument)
        {
            this.m_listInstrument = new Array<Instrument>();
        }
        return this.m_listInstrument;
    }

    set Instruments(value: Instrument[])
    {
        this.m_listInstrument = value;
    }
}
