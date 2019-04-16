// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import {SurveyPointType} from "./SurveyPointType";
import {SurveyReference} from "./SurveyReference";
import {SurveyImage} from "./SurveyImage";

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class SurveyPoint
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_X : number;
    private m_Y : number;
    private m_Z : number;
    private m_Name : string;
    private m_Description : string;
    private m_PointType : SurveyPointType;
    private m_Reference : SurveyReference;
    private m_SurveyImage : SurveyImage[];

    private m_bXUpdated : boolean;
    private m_bYUpdated : boolean;
    private m_bZUpdated : boolean;
    private m_bNameUpdated : boolean;
    private m_bDescriptionUpdated : boolean;
    private m_bPointTypeUpdated : boolean;
    private m_bReferenceUpdated : boolean;
    private m_bSurveyImageUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_X = 0;
        this.m_Y = 0;
        this.m_Z = 0;
        this.m_Name = "";
        this.m_Description = "";
        this.m_PointType = new SurveyPointType();
        this.m_Reference = new SurveyReference();
        this.m_SurveyImage = [];

        this.m_bXUpdated = true;
        this.m_bYUpdated = true;
        this.m_bZUpdated = true;
        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bPointTypeUpdated = true;
        this.m_bReferenceUpdated = true;
        this.m_bSurveyImageUpdated = true;
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
    get Name() : string
    {
        return this.m_Name;
    }
    get Description() : string
    {
        return this.m_Description;
    }
    get PointType() : SurveyPointType
    {
        return this.m_PointType;
    }
    get Reference() : SurveyReference
    {
        return this.m_Reference;
    }
    get SurveyImage() : SurveyImage[]
    {
        return this.m_SurveyImage;
    }

    set X(X : number)
    {
        this.m_X = X;
        this.m_bXUpdated = true;
    }
    set Y(Y : number)
    {
        this.m_Y = Y;
        this.m_bYUpdated = true;
    }
    set Z(Z : number)
    {
        this.m_Z = Z;
        this.m_bZUpdated = true;
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
    set PointType(PointType : SurveyPointType)
    {
        this.m_PointType = PointType;
        this.m_bPointTypeUpdated = true;
    }
    set Reference(Reference : SurveyReference)
    {
        this.m_Reference = Reference;
        this.m_bReferenceUpdated = true;
    }

    addSurveyImage(addSurveyImage : SurveyImage)
    {
        this.m_SurveyImage.push(addSurveyImage);
        this.m_bSurveyImageUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bXUpdated)
        {
            objUpdated["X"] = lodash(this.X).isNil() ? null : this.m_X;
        }
        if (this.m_bYUpdated)
        {
            objUpdated["Y"] = lodash(this.Y).isNil() ? null : this.m_Y;
        }
        if (this.m_bZUpdated)
        {
            objUpdated["Z"] = lodash(this.Z).isNil() ? null : this.m_Z;
        }
        if (this.m_bNameUpdated)
        {
            objUpdated["Name"] = lodash(this.Name).isNil() ? null : this.m_Name;
        }
        if (this.m_bDescriptionUpdated)
        {
            objUpdated["Description"] = lodash(this.Description).isNil() ? null : this.m_Description;
        }
        if (this.m_bPointTypeUpdated)
        {
            objUpdated["PointTypeID"] = lodash(this.PointType).isNil() ? null : this.m_PointType.toJsonObject();
        }
        if (this.m_bReferenceUpdated)
        {
            objUpdated["RefID"] = lodash(this.Reference).isNil() ? null : this.m_Reference.toJsonObject();
        }
        if (this.m_bSurveyImageUpdated)
        {
            objUpdated["Images"] = lodash(this.SurveyImage).isNil() ? null : lodash(this.m_SurveyImage).map(
                (arrayMember) =>
                {
                    return arrayMember.toJsonObject();
                }
            );
        }

        return objUpdated;
    }


    setSaved() : void
    {
        this.m_bXUpdated = false;
        this.m_bYUpdated = false;
        this.m_bZUpdated = false;
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bPointTypeUpdated = false;
        this.m_bReferenceUpdated = false;
        this.m_bSurveyImageUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            X: lodash(this.X).isNil() ? null : this.m_X,
            Y: lodash(this.Y).isNil() ? null : this.m_Y,
            Z: lodash(this.Z).isNil() ? null : this.m_Z,
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            PointTypeID: lodash(this.PointType).isNil() ? null : this.m_PointType.toFirebase(),
            RefID: lodash(this.Reference).isNil() ? null : this.m_Reference.toFirebase(),
            Images: lodash(this.SurveyImage).isNil() ? null : lodash(this.m_SurveyImage).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                )

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : SurveyPoint
    {
        let objSurveyPoint = new SurveyPoint();
        objSurveyPoint.m_ID = firebaseObj.ID;
        objSurveyPoint.m_Created = TimeConversion.toDate(firebaseObj.created);
        objSurveyPoint.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objSurveyPoint.m_X = firebaseObj.X;
        objSurveyPoint.m_Y = firebaseObj.Y;
        objSurveyPoint.m_Z = firebaseObj.Z;
        objSurveyPoint.m_Name = firebaseObj.Name;
        objSurveyPoint.m_Description = firebaseObj.Description;
        objSurveyPoint.m_PointType = SurveyPointType.fromFirebase(firebaseObj.PointTypeID);
        objSurveyPoint.m_Reference = SurveyReference.fromFirebase(firebaseObj.RefID);
        objSurveyPoint.m_SurveyImage = lodash.map(
                firebaseObj.Images,
                (arrayMember) =>
                {
                    return SurveyImage.fromFirebase(arrayMember);
                }
            );

        objSurveyPoint.setSaved();
        return objSurveyPoint;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : SurveyPoint[]
    {
        return lodash.map(objJson, (objSurveyPointJson) => SurveyPoint.fromJsonObject(objSurveyPointJson));
    }

    static fromJson(strJson) : SurveyPoint
    {
        let objJson = JSON.parse(strJson);
        return SurveyPoint.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveyPoint
    {
        let objSurveyPoint = new SurveyPoint();
        objSurveyPoint.m_ID = objJson.ID;
        objSurveyPoint.m_Created = TimeConversion.toDate(objJson.created);
        objSurveyPoint.m_Updated = TimeConversion.toDate(objJson.updated);
        objSurveyPoint.m_X = objJson.X;
        objSurveyPoint.m_Y = objJson.Y;
        objSurveyPoint.m_Z = objJson.Z;
        objSurveyPoint.m_Name = objJson.Name;
        objSurveyPoint.m_Description = objJson.Description;
        objSurveyPoint.m_PointType = SurveyPointType.fromJsonObject(objJson.PointTypeID);
        objSurveyPoint.m_Reference = SurveyReference.fromJsonObject(objJson.RefID);
        objSurveyPoint.m_SurveyImage = lodash.map(
                objJson.Images,
                (arrayMember) =>
                {
                    return SurveyImage.fromJsonObject(arrayMember);
                }
            );

        return objSurveyPoint;
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
            X: lodash(this.X).isNil() ? null : this.m_X,
            Y: lodash(this.Y).isNil() ? null : this.m_Y,
            Z: lodash(this.Z).isNil() ? null : this.m_Z,
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            PointTypeID: lodash(this.PointType).isNil() ? null : this.m_PointType.toJsonObject(),
            RefID: lodash(this.Reference).isNil() ? null : this.m_Reference.toJsonObject(),
            Images: lodash(this.SurveyImage).isNil() ? null : lodash(this.m_SurveyImage).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                )

        };
    }
}