// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class Pt_Ref
{
    private m_RefName : string;
    private m_RefDescription : string;

    constructor()
    {
        this.m_RefName = "";
        this.m_RefDescription = "";
    }

    get RefName() : string
    {
        return this.m_RefName;
    }
    get RefDescription() : string
    {
        return this.m_RefDescription;
    }


    static fromJson(strJson) : Pt_Ref
    {
        let objJson = JSON.parse(strJson);
        return Pt_Ref.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : Pt_Ref
    {
        let objPt_Ref = new Pt_Ref();
        objPt_Ref.m_RefName = objJson.refName;
        objPt_Ref.m_RefDescription = objJson.refDescription;

        return objPt_Ref;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            refName: lodash(this.RefName).isNil() ? null : this.m_RefName,
            refDescription: lodash(this.RefDescription).isNil() ? null : this.m_RefDescription

        };
    }
}


export class Pt_PtType
{
    private m_PtTypeName : string;
    private m_PtTypeAbbreviation : string;

    constructor()
    {
        this.m_PtTypeName = "";
        this.m_PtTypeAbbreviation = "";
    }

    get PtTypeName() : string
    {
        return this.m_PtTypeName;
    }
    get PtTypeAbbreviation() : string
    {
        return this.m_PtTypeAbbreviation;
    }


    static fromJson(strJson) : Pt_PtType
    {
        let objJson = JSON.parse(strJson);
        return Pt_PtType.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : Pt_PtType
    {
        let objPt_PtType = new Pt_PtType();
        objPt_PtType.m_PtTypeName = objJson.ptTypeName;
        objPt_PtType.m_PtTypeAbbreviation = objJson.ptTypeAbbreviation;

        return objPt_PtType;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ptTypeName: lodash(this.PtTypeName).isNil() ? null : this.m_PtTypeName,
            ptTypeAbbreviation: lodash(this.PtTypeAbbreviation).isNil() ? null : this.m_PtTypeAbbreviation

        };
    }
}


export class SurveyPointSummary_Pt
{
    private m_PtID : number;
    private m_PtName : string;
    private m_PtDesc : string;
    private m_X : number;
    private m_Y : number;
    private m_Z : number;
    private m_PtType : Pt_PtType;
    private m_Ref : Pt_Ref;

    constructor()
    {
        this.m_PtID = 0;
        this.m_PtName = "";
        this.m_PtDesc = "";
        this.m_X = 0;
        this.m_Y = 0;
        this.m_Z = 0;
        this.m_PtType = new Pt_PtType();
        this.m_Ref = new Pt_Ref();
    }

    get PtID() : number
    {
        return this.m_PtID;
    }
    get PtName() : string
    {
        return this.m_PtName;
    }
    get PtDesc() : string
    {
        return this.m_PtDesc;
    }
    get X() : number
    {
        return this.m_X;
    }
    get Y() : number
    {
        return this.m_Y;
    }
    get Z() : number
    {
        return this.m_Z;
    }
    get PtType() : Pt_PtType
    {
        return this.m_PtType;
    }
    get Ref() : Pt_Ref
    {
        return this.m_Ref;
    }


    static fromJson(strJson) : SurveyPointSummary_Pt
    {
        let objJson = JSON.parse(strJson);
        return SurveyPointSummary_Pt.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveyPointSummary_Pt
    {
        let objSurveyPointSummary_Pt = new SurveyPointSummary_Pt();
        objSurveyPointSummary_Pt.m_PtID = objJson.ptID;
        objSurveyPointSummary_Pt.m_PtName = objJson.ptName;
        objSurveyPointSummary_Pt.m_PtDesc = objJson.ptDesc;
        objSurveyPointSummary_Pt.m_X = objJson.X;
        objSurveyPointSummary_Pt.m_Y = objJson.Y;
        objSurveyPointSummary_Pt.m_Z = objJson.Z;
        objSurveyPointSummary_Pt.m_PtType = Pt_PtType.fromJsonObject(objJson.ptType);
        objSurveyPointSummary_Pt.m_Ref = Pt_Ref.fromJsonObject(objJson.ref);

        return objSurveyPointSummary_Pt;
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
            ptDesc: lodash(this.PtDesc).isNil() ? null : this.m_PtDesc,
            X: lodash(this.X).isNil() ? null : this.m_X,
            Y: lodash(this.Y).isNil() ? null : this.m_Y,
            Z: lodash(this.Z).isNil() ? null : this.m_Z,
            ptType: lodash(this.PtType).isNil() ? null : this.m_PtType.toJsonObject(),
            ref: lodash(this.Ref).isNil() ? null : this.m_Ref.toJsonObject()

        };
    }
}


export class SurveyPointSummary
{
    private m_ID : number;
    private m_Pts : SurveyPointSummary_Pt[];


    constructor()
    {
        this.m_ID = 0;
        this.m_Pts = [];
    }

    get ID() : number
    {
        return this.m_ID;
    }
    get Pts() : SurveyPointSummary_Pt[]
    {
        return this.m_Pts;
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

    static arrayFromJson(objJson) : SurveyPointSummary[]
    {
        return lodash.map(objJson, (objSurveyPointSummaryJson) => SurveyPointSummary.fromJsonObject(objSurveyPointSummaryJson));
    }

    static fromJson(strJson) : SurveyPointSummary
    {
        let objJson = JSON.parse(strJson);
        return SurveyPointSummary.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveyPointSummary
    {
        let objSurveyPointSummary = new SurveyPointSummary();
        objSurveyPointSummary.m_ID = objJson.ID;
        objSurveyPointSummary.m_Pts = lodash.map(
                objJson.pt,
                (arrayMember) =>
                {
                    return SurveyPointSummary_Pt.fromJsonObject(arrayMember);
                }
            );

        return objSurveyPointSummary;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            pt: lodash(this.Pts).isNil() ? null : lodash(this.m_Pts).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                )

        };
    }
}