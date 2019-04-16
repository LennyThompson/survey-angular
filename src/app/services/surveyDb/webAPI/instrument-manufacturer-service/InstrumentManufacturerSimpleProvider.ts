// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Nov 20 20:54:20 AEST 2018

import {Injectable} from "@angular/core";
import {InstrumentManufacturer} from "./../../types";

// Declare injectable provider for simple objects of type InstrumentManufacturer

@Injectable()
export class CurrentInstrumentManufacturerProvider
{
    private _InstrumentManufacturer: InstrumentManufacturer;
    private _ID: number = -1;

    public get InstrumentManufacturer(): InstrumentManufacturer
    {
        if (!this._InstrumentManufacturer && this._ID <= 0)
        {
            this._InstrumentManufacturer = new InstrumentManufacturer();
        }
        return this._InstrumentManufacturer;
    }

    public set InstrumentManufacturer(value: InstrumentManufacturer)
    {
        this._InstrumentManufacturer = value;
        this._ID = this._InstrumentManufacturer.ID;
    }

    public get InstrumentManufacturer_ID(): number
    {
        if (this.InstrumentManufacturer)
        {
            return this.InstrumentManufacturer.ID;
        }
        return this._ID;
    }
    public set InstrumentManufacturer_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if (this.InstrumentManufacturer)
        {
            this._InstrumentManufacturer = null;
        }
        this._ID = -1;
    }

    hasExistingInstrumentManufacturer(): boolean
    {
        return !!this._InstrumentManufacturer;
    }
}

// Declare injectable provider for array of objects of type InstrumentManufacturer

@Injectable()
export class CurrentInstrumentManufacturerListProvider
{
    m_listInstrumentManufacturer: InstrumentManufacturer[];

    get InstrumentManufacturers(): InstrumentManufacturer[]
    {
        if (!this.m_listInstrumentManufacturer)
        {
            this.m_listInstrumentManufacturer = new Array<InstrumentManufacturer>();
        }
        return this.m_listInstrumentManufacturer;
    }

    set InstrumentManufacturers(value: InstrumentManufacturer[])
    {
        this.m_listInstrumentManufacturer = value;
    }
}
