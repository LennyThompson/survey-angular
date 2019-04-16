// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class SurveyPointType
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Name : string;
    private m_Abbreviation : string;
    private m_UserDefined : number;

    private m_bNameUpdated : boolean;
    private m_bAbbreviationUpdated : boolean;
    private m_bUserDefinedUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Abbreviation = "";
        this.m_UserDefined = 0;

        this.m_bNameUpdated = true;
        this.m_bAbbreviationUpdated = true;
        this.m_bUserDefinedUpdated = true;
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
    get Abbreviation() : string
    {
        return this.m_Abbreviation;
    }
    get UserDefined() : number
    {
        return this.m_UserDefined;
    }

    set Name(Name : string)
    {
        this.m_Name = Name;
        this.m_bNameUpdated = true;
    }
    set Abbreviation(Abbreviation : string)
    {
        this.m_Abbreviation = Abbreviation;
        this.m_bAbbreviationUpdated = true;
    }
    set UserDefined(UserDefined : number)
    {
        this.m_UserDefined = UserDefined;
        this.m_bUserDefinedUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bNameUpdated)
        {
            objUpdated["Name"] = lodash(this.Name).isNil() ? null : this.m_Name;
        }
        if (this.m_bAbbreviationUpdated)
        {
            objUpdated["Abbreviation"] = lodash(this.Abbreviation).isNil() ? null : this.m_Abbreviation;
        }
        if (this.m_bUserDefinedUpdated)
        {
            objUpdated["UserDefined"] = lodash(this.UserDefined).isNil() ? null : this.m_UserDefined;
        }

        return objUpdated;
    }


    setSaved() : void
    {
        this.m_bNameUpdated = false;
        this.m_bAbbreviationUpdated = false;
        this.m_bUserDefinedUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Abbreviation: lodash(this.Abbreviation).isNil() ? null : this.m_Abbreviation,
            UserDefined: lodash(this.UserDefined).isNil() ? null : this.m_UserDefined

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : SurveyPointType
    {
        let objSurveyPointType = new SurveyPointType();
        objSurveyPointType.m_ID = firebaseObj.ID;
        objSurveyPointType.m_Created = TimeConversion.toDate(firebaseObj.created);
        objSurveyPointType.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objSurveyPointType.m_Name = firebaseObj.Name;
        objSurveyPointType.m_Abbreviation = firebaseObj.Abbreviation;
        objSurveyPointType.m_UserDefined = firebaseObj.UserDefined;

        objSurveyPointType.setSaved();
        return objSurveyPointType;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : SurveyPointType[]
    {
        return lodash.map(objJson, (objSurveyPointTypeJson) => SurveyPointType.fromJsonObject(objSurveyPointTypeJson));
    }

    static fromJson(strJson) : SurveyPointType
    {
        let objJson = JSON.parse(strJson);
        return SurveyPointType.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveyPointType
    {
        let objSurveyPointType = new SurveyPointType();
        objSurveyPointType.m_ID = objJson.ID;
        objSurveyPointType.m_Created = TimeConversion.toDate(objJson.created);
        objSurveyPointType.m_Updated = TimeConversion.toDate(objJson.updated);
        objSurveyPointType.m_Name = objJson.Name;
        objSurveyPointType.m_Abbreviation = objJson.Abbreviation;
        objSurveyPointType.m_UserDefined = objJson.UserDefined;

        return objSurveyPointType;
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
            Abbreviation: lodash(this.Abbreviation).isNil() ? null : this.m_Abbreviation,
            UserDefined: lodash(this.UserDefined).isNil() ? null : this.m_UserDefined

        };
    }
}