// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class SurveySummary_Trav
{
    private m_TravID : number;
    private m_TravName : string;
    private m_TravUpdated : Date;
    private m_PtTravStart : string;
    private m_PtTravEnd : string;

    constructor()
    {
        this.m_TravID = 0;
        this.m_TravName = "";
        this.m_TravUpdated = new Date();
        this.m_PtTravStart = "";
        this.m_PtTravEnd = "";
    }

    get TravID() : number
    {
        return this.m_TravID;
    }
    get TravName() : string
    {
        return this.m_TravName;
    }
    get TravUpdated() : Date
    {
        return this.m_TravUpdated;
    }
    get PtTravStart() : string
    {
        return this.m_PtTravStart;
    }
    get PtTravEnd() : string
    {
        return this.m_PtTravEnd;
    }


    static fromJson(strJson) : SurveySummary_Trav
    {
        let objJson = JSON.parse(strJson);
        return SurveySummary_Trav.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveySummary_Trav
    {
        let objSurveySummary_Trav = new SurveySummary_Trav();
        objSurveySummary_Trav.m_TravID = objJson.travID;
        objSurveySummary_Trav.m_TravName = objJson.travName;
        objSurveySummary_Trav.m_TravUpdated = TimeConversion.toDate(objJson.travUpdated);
        objSurveySummary_Trav.m_PtTravStart = objJson.ptTravStart;
        objSurveySummary_Trav.m_PtTravEnd = objJson.ptTravEnd;

        return objSurveySummary_Trav;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            travID: lodash(this.TravID).isNil() ? null : this.m_TravID,
            travName: lodash(this.TravName).isNil() ? null : this.m_TravName,
            travUpdated: lodash(this.TravUpdated).isNil() ? null : this.m_TravUpdated.toISOString(),
            ptTravStart: lodash(this.PtTravStart).isNil() ? null : this.m_PtTravStart,
            ptTravEnd: lodash(this.PtTravEnd).isNil() ? null : this.m_PtTravEnd

        };
    }
}


export class SurveySummary_PtSurv
{
    private m_PtID : number;
    private m_PtName : string;
    private m_PtX : number;
    private m_PtY : number;
    private m_PtZ : number;

    constructor()
    {
        this.m_PtID = 0;
        this.m_PtName = "";
        this.m_PtX = 0;
        this.m_PtY = 0;
        this.m_PtZ = 0;
    }

    get PtID() : number
    {
        return this.m_PtID;
    }
    get PtName() : string
    {
        return this.m_PtName;
    }
    get PtX() : number
    {
        return this.m_PtX;
    }
    get PtY() : number
    {
        return this.m_PtY;
    }
    get PtZ() : number
    {
        return this.m_PtZ;
    }


    static fromJson(strJson) : SurveySummary_PtSurv
    {
        let objJson = JSON.parse(strJson);
        return SurveySummary_PtSurv.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveySummary_PtSurv
    {
        let objSurveySummary_PtSurv = new SurveySummary_PtSurv();
        objSurveySummary_PtSurv.m_PtID = objJson.ptID;
        objSurveySummary_PtSurv.m_PtName = objJson.ptName;
        objSurveySummary_PtSurv.m_PtX = objJson.ptX;
        objSurveySummary_PtSurv.m_PtY = objJson.ptY;
        objSurveySummary_PtSurv.m_PtZ = objJson.ptZ;

        return objSurveySummary_PtSurv;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ptID: lodash(this.PtID).isNil() ? null : this.m_PtID,
            ptName: lodash(this.PtName).isNil() ? null : this.m_PtName,
            ptX: lodash(this.PtX).isNil() ? null : this.m_PtX,
            ptY: lodash(this.PtY).isNil() ? null : this.m_PtY,
            ptZ: lodash(this.PtZ).isNil() ? null : this.m_PtZ

        };
    }
}


export class SurveySummary_Proj
{
    private m_ProjID : number;
    private m_ProjName : string;

    constructor()
    {
        this.m_ProjID = 0;
        this.m_ProjName = "";
    }

    get ProjID() : number
    {
        return this.m_ProjID;
    }
    get ProjName() : string
    {
        return this.m_ProjName;
    }


    static fromJson(strJson) : SurveySummary_Proj
    {
        let objJson = JSON.parse(strJson);
        return SurveySummary_Proj.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveySummary_Proj
    {
        let objSurveySummary_Proj = new SurveySummary_Proj();
        objSurveySummary_Proj.m_ProjID = objJson.projID;
        objSurveySummary_Proj.m_ProjName = objJson.projName;

        return objSurveySummary_Proj;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            projID: lodash(this.ProjID).isNil() ? null : this.m_ProjID,
            projName: lodash(this.ProjName).isNil() ? null : this.m_ProjName

        };
    }
}


export class SurveySummary
{
    private m_ID : number;
    private m_Name : string;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Description : string;
    private m_Proj : SurveySummary_Proj;
    private m_Travs : SurveySummary_Trav[];
    private m_PtSurvs : SurveySummary_PtSurv[];


    constructor()
    {
        this.m_ID = 0;
        this.m_Name = "";
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Description = "";
        this.m_Proj = new SurveySummary_Proj();
        this.m_Travs = [];
        this.m_PtSurvs = [];
    }

    get ID() : number
    {
        return this.m_ID;
    }
    get Name() : string
    {
        return this.m_Name;
    }
    get Created() : Date
    {
        return this.m_Created;
    }
    get Updated() : Date
    {
        return this.m_Updated;
    }
    get Description() : string
    {
        return this.m_Description;
    }
    get Proj() : SurveySummary_Proj
    {
        return this.m_Proj;
    }
    get Travs() : SurveySummary_Trav[]
    {
        return this.m_Travs;
    }
    get PtSurvs() : SurveySummary_PtSurv[]
    {
        return this.m_PtSurvs;
    }


    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        return objUpdated;
    }


    setSaved() : void
    {
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : SurveySummary[]
    {
        return lodash.map(objJson, (objSurveySummaryJson) => SurveySummary.fromJsonObject(objSurveySummaryJson));
    }

    static fromJson(strJson) : SurveySummary
    {
        let objJson = JSON.parse(strJson);
        return SurveySummary.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveySummary
    {
        let objSurveySummary = new SurveySummary();
        objSurveySummary.m_ID = objJson.ID;
        objSurveySummary.m_Name = objJson.Name;
        objSurveySummary.m_Created = TimeConversion.toDate(objJson.created);
        objSurveySummary.m_Updated = TimeConversion.toDate(objJson.updated);
        objSurveySummary.m_Description = objJson.Description;
        objSurveySummary.m_Proj = SurveySummary_Proj.fromJsonObject(objJson.proj);
        objSurveySummary.m_Travs = lodash.map(
                objJson.trav,
                (arrayMember) =>
                {
                    return SurveySummary_Trav.fromJsonObject(arrayMember);
                }
            );
        objSurveySummary.m_PtSurvs = lodash.map(
                objJson.ptSurv,
                (arrayMember) =>
                {
                    return SurveySummary_PtSurv.fromJsonObject(arrayMember);
                }
            );

        return objSurveySummary;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            proj: lodash(this.Proj).isNil() ? null : this.m_Proj.toJsonObject(),
            trav: lodash(this.Travs).isNil() ? null : lodash(this.m_Travs).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                ),
            ptSurv: lodash(this.PtSurvs).isNil() ? null : lodash(this.m_PtSurvs).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                )

        };
    }
}