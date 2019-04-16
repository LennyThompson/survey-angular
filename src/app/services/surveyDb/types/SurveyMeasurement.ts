// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import {SurveyPoint} from "./SurveyPoint";

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class SurveyMeasurement
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_HorizDistance : number;
    private m_VertDistance : number;
    private m_Bearing : number;
    private m_PointFrom : SurveyPoint;
    private m_PointTo : SurveyPoint;
    private m_SurveyID : number;

    private m_bHorizDistanceUpdated : boolean;
    private m_bVertDistanceUpdated : boolean;
    private m_bBearingUpdated : boolean;
    private m_bPointFromUpdated : boolean;
    private m_bPointToUpdated : boolean;
    private m_bSurveyIDUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_HorizDistance = 0;
        this.m_VertDistance = 0;
        this.m_Bearing = 0;
        this.m_PointFrom = new SurveyPoint();
        this.m_PointTo = new SurveyPoint();
        this.m_SurveyID = 0;

        this.m_bHorizDistanceUpdated = true;
        this.m_bVertDistanceUpdated = true;
        this.m_bBearingUpdated = true;
        this.m_bPointFromUpdated = true;
        this.m_bPointToUpdated = true;
        this.m_bSurveyIDUpdated = true;
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
    get HorizDistance() : number
    {
        return this.m_HorizDistance;
    }
    get VertDistance() : number
    {
        return this.m_VertDistance;
    }
    get Bearing() : number
    {
        return this.m_Bearing;
    }
    get PointFrom() : SurveyPoint
    {
        return this.m_PointFrom;
    }
    get PointTo() : SurveyPoint
    {
        return this.m_PointTo;
    }
    get SurveyID() : number
    {
        return this.m_SurveyID;
    }

    set HorizDistance(HorizDistance : number)
    {
        this.m_HorizDistance = HorizDistance;
        this.m_bHorizDistanceUpdated = true;
    }
    set VertDistance(VertDistance : number)
    {
        this.m_VertDistance = VertDistance;
        this.m_bVertDistanceUpdated = true;
    }
    set Bearing(Bearing : number)
    {
        this.m_Bearing = Bearing;
        this.m_bBearingUpdated = true;
    }
    set PointFrom(PointFrom : SurveyPoint)
    {
        this.m_PointFrom = PointFrom;
        this.m_bPointFromUpdated = true;
    }
    set PointTo(PointTo : SurveyPoint)
    {
        this.m_PointTo = PointTo;
        this.m_bPointToUpdated = true;
    }
    set SurveyID(SurveyID : number)
    {
        this.m_SurveyID = SurveyID;
        this.m_bSurveyIDUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bHorizDistanceUpdated)
        {
            objUpdated["HorizDistance"] = lodash(this.HorizDistance).isNil() ? null : this.m_HorizDistance;
        }
        if (this.m_bVertDistanceUpdated)
        {
            objUpdated["VertDistance"] = lodash(this.VertDistance).isNil() ? null : this.m_VertDistance;
        }
        if (this.m_bBearingUpdated)
        {
            objUpdated["Bearing"] = lodash(this.Bearing).isNil() ? null : this.m_Bearing;
        }
        if (this.m_bPointFromUpdated)
        {
            objUpdated["FromPtID"] = lodash(this.PointFrom).isNil() ? null : this.m_PointFrom.toJsonObject();
        }
        if (this.m_bPointToUpdated)
        {
            objUpdated["ToPtID"] = lodash(this.PointTo).isNil() ? null : this.m_PointTo.toJsonObject();
        }
        if (this.m_bSurveyIDUpdated)
        {
            objUpdated["SurveyID"] = lodash(this.SurveyID).isNil() ? null : this.m_SurveyID;
        }

        return objUpdated;
    }


    setSaved() : void
    {
        this.m_bHorizDistanceUpdated = false;
        this.m_bVertDistanceUpdated = false;
        this.m_bBearingUpdated = false;
        this.m_bPointFromUpdated = false;
        this.m_bPointToUpdated = false;
        this.m_bSurveyIDUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            HorizDistance: lodash(this.HorizDistance).isNil() ? null : this.m_HorizDistance,
            VertDistance: lodash(this.VertDistance).isNil() ? null : this.m_VertDistance,
            Bearing: lodash(this.Bearing).isNil() ? null : this.m_Bearing,
            FromPtID: lodash(this.PointFrom).isNil() ? null : this.m_PointFrom.toFirebase(),
            ToPtID: lodash(this.PointTo).isNil() ? null : this.m_PointTo.toFirebase(),
            SurveyID: lodash(this.SurveyID).isNil() ? null : this.m_SurveyID

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : SurveyMeasurement
    {
        let objSurveyMeasurement = new SurveyMeasurement();
        objSurveyMeasurement.m_ID = firebaseObj.ID;
        objSurveyMeasurement.m_Created = TimeConversion.toDate(firebaseObj.created);
        objSurveyMeasurement.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objSurveyMeasurement.m_HorizDistance = firebaseObj.HorizDistance;
        objSurveyMeasurement.m_VertDistance = firebaseObj.VertDistance;
        objSurveyMeasurement.m_Bearing = firebaseObj.Bearing;
        objSurveyMeasurement.m_PointFrom = SurveyPoint.fromFirebase(firebaseObj.FromPtID);
        objSurveyMeasurement.m_PointTo = SurveyPoint.fromFirebase(firebaseObj.ToPtID);
        objSurveyMeasurement.m_SurveyID = firebaseObj.SurveyID;

        objSurveyMeasurement.setSaved();
        return objSurveyMeasurement;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : SurveyMeasurement[]
    {
        return lodash.map(objJson, (objSurveyMeasurementJson) => SurveyMeasurement.fromJsonObject(objSurveyMeasurementJson));
    }

    static fromJson(strJson) : SurveyMeasurement
    {
        let objJson = JSON.parse(strJson);
        return SurveyMeasurement.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveyMeasurement
    {
        let objSurveyMeasurement = new SurveyMeasurement();
        objSurveyMeasurement.m_ID = objJson.ID;
        objSurveyMeasurement.m_Created = TimeConversion.toDate(objJson.created);
        objSurveyMeasurement.m_Updated = TimeConversion.toDate(objJson.updated);
        objSurveyMeasurement.m_HorizDistance = objJson.HorizDistance;
        objSurveyMeasurement.m_VertDistance = objJson.VertDistance;
        objSurveyMeasurement.m_Bearing = objJson.Bearing;
        objSurveyMeasurement.m_PointFrom = SurveyPoint.fromJsonObject(objJson.FromPtID);
        objSurveyMeasurement.m_PointTo = SurveyPoint.fromJsonObject(objJson.ToPtID);
        objSurveyMeasurement.m_SurveyID = objJson.SurveyID;

        return objSurveyMeasurement;
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
            HorizDistance: lodash(this.HorizDistance).isNil() ? null : this.m_HorizDistance,
            VertDistance: lodash(this.VertDistance).isNil() ? null : this.m_VertDistance,
            Bearing: lodash(this.Bearing).isNil() ? null : this.m_Bearing,
            FromPtID: lodash(this.PointFrom).isNil() ? null : this.m_PointFrom.toJsonObject(),
            ToPtID: lodash(this.PointTo).isNil() ? null : this.m_PointTo.toJsonObject(),
            SurveyID: lodash(this.SurveyID).isNil() ? null : this.m_SurveyID

        };
    }
}