// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class SurveyReference
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Name : string;
    private m_Description : string;
    private m_Date : Date;
    private m_Reference : string;

    private m_bNameUpdated : boolean;
    private m_bDescriptionUpdated : boolean;
    private m_bDateUpdated : boolean;
    private m_bReferenceUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_Date = new Date();
        this.m_Reference = "";

        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bDateUpdated = true;
        this.m_bReferenceUpdated = true;
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
    get Date() : Date
    {
        return this.m_Date;
    }
    get Reference() : string
    {
        return this.m_Reference;
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
    set Date(Date : Date)
    {
        this.m_Date = Date;
        this.m_bDateUpdated = true;
    }
    set Reference(Reference : string)
    {
        this.m_Reference = Reference;
        this.m_bReferenceUpdated = true;
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
        if (this.m_bDateUpdated)
        {
            objUpdated["Date"] = lodash(this.Date).isNil() ? null : this.m_Date.toISOString();
        }
        if (this.m_bReferenceUpdated)
        {
            objUpdated["Reference"] = lodash(this.Reference).isNil() ? null : this.m_Reference;
        }

        return objUpdated;
    }


    setSaved() : void
    {
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bDateUpdated = false;
        this.m_bReferenceUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            Date: lodash(this.Date).isNil() ? null : this.m_Date.toISOString(),
            Reference: lodash(this.Reference).isNil() ? null : this.m_Reference

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : SurveyReference
    {
        let objSurveyReference = new SurveyReference();
        objSurveyReference.m_ID = firebaseObj.ID;
        objSurveyReference.m_Created = TimeConversion.toDate(firebaseObj.created);
        objSurveyReference.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objSurveyReference.m_Name = firebaseObj.Name;
        objSurveyReference.m_Description = firebaseObj.Description;
        objSurveyReference.m_Date = TimeConversion.toDate(firebaseObj.Date);
        objSurveyReference.m_Reference = firebaseObj.Reference;

        objSurveyReference.setSaved();
        return objSurveyReference;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : SurveyReference[]
    {
        return lodash.map(objJson, (objSurveyReferenceJson) => SurveyReference.fromJsonObject(objSurveyReferenceJson));
    }

    static fromJson(strJson) : SurveyReference
    {
        let objJson = JSON.parse(strJson);
        return SurveyReference.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveyReference
    {
        let objSurveyReference = new SurveyReference();
        objSurveyReference.m_ID = objJson.ID;
        objSurveyReference.m_Created = TimeConversion.toDate(objJson.created);
        objSurveyReference.m_Updated = TimeConversion.toDate(objJson.updated);
        objSurveyReference.m_Name = objJson.Name;
        objSurveyReference.m_Description = objJson.Description;
        objSurveyReference.m_Date = TimeConversion.toDate(objJson.Date);
        objSurveyReference.m_Reference = objJson.Reference;

        return objSurveyReference;
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
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            Date: lodash(this.Date).isNil() ? null : this.m_Date.toISOString(),
            Reference: lodash(this.Reference).isNil() ? null : this.m_Reference

        };
    }
}