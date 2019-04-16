// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import {SurveyMeasurement} from "./SurveyMeasurement";

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class SurveyAdjustment
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_DeltaX : number;
    private m_DeltaY : number;
    private m_DeltaZ : number;
    private m_BearingAdj : number;
    private m_Measurement : SurveyMeasurement;

    private m_bDeltaXUpdated : boolean;
    private m_bDeltaYUpdated : boolean;
    private m_bDeltaZUpdated : boolean;
    private m_bBearingAdjUpdated : boolean;
    private m_bMeasurementUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_DeltaX = 0;
        this.m_DeltaY = 0;
        this.m_DeltaZ = 0;
        this.m_BearingAdj = 0;
        this.m_Measurement = new SurveyMeasurement();

        this.m_bDeltaXUpdated = true;
        this.m_bDeltaYUpdated = true;
        this.m_bDeltaZUpdated = true;
        this.m_bBearingAdjUpdated = true;
        this.m_bMeasurementUpdated = true;
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
    get DeltaX() : number
    {
        return this.m_DeltaX;
    }
    get DeltaY() : number
    {
        return this.m_DeltaY;
    }
    get DeltaZ() : number
    {
        return this.m_DeltaZ;
    }
    get BearingAdj() : number
    {
        return this.m_BearingAdj;
    }
    get Measurement() : SurveyMeasurement
    {
        return this.m_Measurement;
    }

    set DeltaX(DeltaX : number)
    {
        this.m_DeltaX = DeltaX;
        this.m_bDeltaXUpdated = true;
    }
    set DeltaY(DeltaY : number)
    {
        this.m_DeltaY = DeltaY;
        this.m_bDeltaYUpdated = true;
    }
    set DeltaZ(DeltaZ : number)
    {
        this.m_DeltaZ = DeltaZ;
        this.m_bDeltaZUpdated = true;
    }
    set BearingAdj(BearingAdj : number)
    {
        this.m_BearingAdj = BearingAdj;
        this.m_bBearingAdjUpdated = true;
    }
    set Measurement(Measurement : SurveyMeasurement)
    {
        this.m_Measurement = Measurement;
        this.m_bMeasurementUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bDeltaXUpdated)
        {
            objUpdated["DeltaX"] = lodash(this.DeltaX).isNil() ? null : this.m_DeltaX;
        }
        if (this.m_bDeltaYUpdated)
        {
            objUpdated["DeltaY"] = lodash(this.DeltaY).isNil() ? null : this.m_DeltaY;
        }
        if (this.m_bDeltaZUpdated)
        {
            objUpdated["DeltaZ"] = lodash(this.DeltaZ).isNil() ? null : this.m_DeltaZ;
        }
        if (this.m_bBearingAdjUpdated)
        {
            objUpdated["BearingAdj"] = lodash(this.BearingAdj).isNil() ? null : this.m_BearingAdj;
        }
        if (this.m_bMeasurementUpdated)
        {
            objUpdated["MeasurementID"] = lodash(this.Measurement).isNil() ? null : this.m_Measurement.toJsonObject();
        }

        return objUpdated;
    }


    setSaved() : void
    {
        this.m_bDeltaXUpdated = false;
        this.m_bDeltaYUpdated = false;
        this.m_bDeltaZUpdated = false;
        this.m_bBearingAdjUpdated = false;
        this.m_bMeasurementUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            DeltaX: lodash(this.DeltaX).isNil() ? null : this.m_DeltaX,
            DeltaY: lodash(this.DeltaY).isNil() ? null : this.m_DeltaY,
            DeltaZ: lodash(this.DeltaZ).isNil() ? null : this.m_DeltaZ,
            BearingAdj: lodash(this.BearingAdj).isNil() ? null : this.m_BearingAdj,
            MeasurementID: lodash(this.Measurement).isNil() ? null : this.m_Measurement.toFirebase()

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : SurveyAdjustment
    {
        let objSurveyAdjustment = new SurveyAdjustment();
        objSurveyAdjustment.m_ID = firebaseObj.ID;
        objSurveyAdjustment.m_Created = TimeConversion.toDate(firebaseObj.created);
        objSurveyAdjustment.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objSurveyAdjustment.m_DeltaX = firebaseObj.DeltaX;
        objSurveyAdjustment.m_DeltaY = firebaseObj.DeltaY;
        objSurveyAdjustment.m_DeltaZ = firebaseObj.DeltaZ;
        objSurveyAdjustment.m_BearingAdj = firebaseObj.BearingAdj;
        objSurveyAdjustment.m_Measurement = SurveyMeasurement.fromFirebase(firebaseObj.MeasurementID);

        objSurveyAdjustment.setSaved();
        return objSurveyAdjustment;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : SurveyAdjustment[]
    {
        return lodash.map(objJson, (objSurveyAdjustmentJson) => SurveyAdjustment.fromJsonObject(objSurveyAdjustmentJson));
    }

    static fromJson(strJson) : SurveyAdjustment
    {
        let objJson = JSON.parse(strJson);
        return SurveyAdjustment.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveyAdjustment
    {
        let objSurveyAdjustment = new SurveyAdjustment();
        objSurveyAdjustment.m_ID = objJson.ID;
        objSurveyAdjustment.m_Created = TimeConversion.toDate(objJson.created);
        objSurveyAdjustment.m_Updated = TimeConversion.toDate(objJson.updated);
        objSurveyAdjustment.m_DeltaX = objJson.DeltaX;
        objSurveyAdjustment.m_DeltaY = objJson.DeltaY;
        objSurveyAdjustment.m_DeltaZ = objJson.DeltaZ;
        objSurveyAdjustment.m_BearingAdj = objJson.BearingAdj;
        objSurveyAdjustment.m_Measurement = SurveyMeasurement.fromJsonObject(objJson.MeasurementID);

        return objSurveyAdjustment;
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
            DeltaX: lodash(this.DeltaX).isNil() ? null : this.m_DeltaX,
            DeltaY: lodash(this.DeltaY).isNil() ? null : this.m_DeltaY,
            DeltaZ: lodash(this.DeltaZ).isNil() ? null : this.m_DeltaZ,
            BearingAdj: lodash(this.BearingAdj).isNil() ? null : this.m_BearingAdj,
            MeasurementID: lodash(this.Measurement).isNil() ? null : this.m_Measurement.toJsonObject()

        };
    }
}