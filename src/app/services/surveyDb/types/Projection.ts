// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class Projection
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Name : string;
    private m_Date : Date;
    private m_Description : string;

    private m_bIDUpdated : boolean;
    private m_bNameUpdated : boolean;
    private m_bDateUpdated : boolean;
    private m_bDescriptionUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Date = new Date();
        this.m_Description = "";

        this.m_bIDUpdated = true;
        this.m_bNameUpdated = true;
        this.m_bDateUpdated = true;
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
    get Date() : Date
    {
        return this.m_Date;
    }
    get Description() : string
    {
        return this.m_Description;
    }

    set ID(ID : number)
    {
        this.m_ID = ID;
        this.m_bIDUpdated = true;
    }
    set Name(Name : string)
    {
        this.m_Name = Name;
        this.m_bNameUpdated = true;
    }
    set Date(Date : Date)
    {
        this.m_Date = Date;
        this.m_bDateUpdated = true;
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
        if (this.m_bIDUpdated)
        {
            objUpdated["ID"] = lodash(this.ID).isNil() ? null : this.m_ID;
        }
        if (this.m_bNameUpdated)
        {
            objUpdated["Name"] = lodash(this.Name).isNil() ? null : this.m_Name;
        }
        if (this.m_bDateUpdated)
        {
            objUpdated["Date"] = lodash(this.Date).isNil() ? null : this.m_Date.toISOString();
        }
        if (this.m_bDescriptionUpdated)
        {
            objUpdated["Description"] = lodash(this.Description).isNil() ? null : this.m_Description;
        }

        return objUpdated;
    }


    setSaved() : void
    {
        this.m_bIDUpdated = false;
        this.m_bNameUpdated = false;
        this.m_bDateUpdated = false;
        this.m_bDescriptionUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Date: lodash(this.Date).isNil() ? null : this.m_Date.toISOString(),
            Description: lodash(this.Description).isNil() ? null : this.m_Description

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : Projection
    {
        let objProjection = new Projection();
        objProjection.m_ID = firebaseObj.ID;
        objProjection.m_Created = TimeConversion.toDate(firebaseObj.created);
        objProjection.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objProjection.m_Name = firebaseObj.Name;
        objProjection.m_Date = TimeConversion.toDate(firebaseObj.Date);
        objProjection.m_Description = firebaseObj.Description;

        objProjection.setSaved();
        return objProjection;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : Projection[]
    {
        return lodash.map(objJson, (objProjectionJson) => Projection.fromJsonObject(objProjectionJson));
    }

    static fromJson(strJson) : Projection
    {
        let objJson = JSON.parse(strJson);
        return Projection.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : Projection
    {
        let objProjection = new Projection();
        objProjection.m_ID = objJson.ID;
        objProjection.m_Created = TimeConversion.toDate(objJson.created);
        objProjection.m_Updated = TimeConversion.toDate(objJson.updated);
        objProjection.m_Name = objJson.Name;
        objProjection.m_Date = TimeConversion.toDate(objJson.Date);
        objProjection.m_Description = objJson.Description;

        return objProjection;
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
            Date: lodash(this.Date).isNil() ? null : this.m_Date.toISOString(),
            Description: lodash(this.Description).isNil() ? null : this.m_Description

        };
    }
}