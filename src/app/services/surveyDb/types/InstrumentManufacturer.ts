// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class InstrumentManufacturer
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Name : string;
    private m_Description : string;

    private m_bNameUpdated : boolean;
    private m_bDescriptionUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";

        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
    }

    get ID() : number
    {
        return this.m_ID;
    }
    get Created() : Date
    {
        return this.m_Created;
    }
    get Updated() : Date
    {
        return this.m_Updated;
    }
    get Name() : string
    {
        return this.m_Name;
    }
    get Description() : string
    {
        return this.m_Description;
    }

    set Name(Name : string)
    {
        this.m_Name = Name;
        this.m_bNameUpdated = true;
    }
    set Description(Description : string)
    {
        this.m_Description = Description;
        this.m_bDescriptionUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bNameUpdated)
        {
            objUpdated["Name"] = lodash(this.Name).isNil() ? null : this.m_Name;
        }
        if (this.m_bDescriptionUpdated)
        {
            objUpdated["Description"] = lodash(this.Description).isNil() ? null : this.m_Description;
        }

        return objUpdated;
    }


    setSaved() : void
    {
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : InstrumentManufacturer
    {
        let objInstrumentManufacturer = new InstrumentManufacturer();
        objInstrumentManufacturer.m_ID = firebaseObj.ID;
        objInstrumentManufacturer.m_Created = TimeConversion.toDate(firebaseObj.created);
        objInstrumentManufacturer.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objInstrumentManufacturer.m_Name = firebaseObj.Name;
        objInstrumentManufacturer.m_Description = firebaseObj.Description;

        objInstrumentManufacturer.setSaved();
        return objInstrumentManufacturer;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : InstrumentManufacturer[]
    {
        return lodash.map(objJson, (objInstrumentManufacturerJson) => InstrumentManufacturer.fromJsonObject(objInstrumentManufacturerJson));
    }

    static fromJson(strJson) : InstrumentManufacturer
    {
        let objJson = JSON.parse(strJson);
        return InstrumentManufacturer.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : InstrumentManufacturer
    {
        let objInstrumentManufacturer = new InstrumentManufacturer();
        objInstrumentManufacturer.m_ID = objJson.ID;
        objInstrumentManufacturer.m_Created = TimeConversion.toDate(objJson.created);
        objInstrumentManufacturer.m_Updated = TimeConversion.toDate(objJson.updated);
        objInstrumentManufacturer.m_Name = objJson.Name;
        objInstrumentManufacturer.m_Description = objJson.Description;

        return objInstrumentManufacturer;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description

        };
    }
}