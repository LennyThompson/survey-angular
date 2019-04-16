// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import {SurveyPoint} from "./SurveyPoint";
import {TraverseClosure} from "./TraverseClosure";
import {SurveyMeasurement} from "./SurveyMeasurement";

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class Traverse
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Name : string;
    private m_Description : string;
    private m_StartPoint : SurveyPoint;
    private m_EndPoint : SurveyPoint;
    private m_SurveyID : number;
    private m_TraverseClosure : TraverseClosure[];
    private m_SurveyMeasurement : SurveyMeasurement[];

    private m_bNameUpdated : boolean;
    private m_bDescriptionUpdated : boolean;
    private m_bStartPointUpdated : boolean;
    private m_bEndPointUpdated : boolean;
    private m_bSurveyIDUpdated : boolean;
    private m_bTraverseClosureUpdated : boolean;
    private m_bSurveyMeasurementUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_StartPoint = new SurveyPoint();
        this.m_EndPoint = new SurveyPoint();
        this.m_SurveyID = 0;
        this.m_TraverseClosure = [];
        this.m_SurveyMeasurement = [];

        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bStartPointUpdated = true;
        this.m_bEndPointUpdated = true;
        this.m_bSurveyIDUpdated = true;
        this.m_bTraverseClosureUpdated = true;
        this.m_bSurveyMeasurementUpdated = true;
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
    get StartPoint() : SurveyPoint
    {
        return this.m_StartPoint;
    }
    get EndPoint() : SurveyPoint
    {
        return this.m_EndPoint;
    }
    get SurveyID() : number
    {
        return this.m_SurveyID;
    }
    get TraverseClosure() : TraverseClosure[]
    {
        return this.m_TraverseClosure;
    }
    get SurveyMeasurement() : SurveyMeasurement[]
    {
        return this.m_SurveyMeasurement;
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
    set StartPoint(StartPoint : SurveyPoint)
    {
        this.m_StartPoint = StartPoint;
        this.m_bStartPointUpdated = true;
    }
    set EndPoint(EndPoint : SurveyPoint)
    {
        this.m_EndPoint = EndPoint;
        this.m_bEndPointUpdated = true;
    }
    set SurveyID(SurveyID : number)
    {
        this.m_SurveyID = SurveyID;
        this.m_bSurveyIDUpdated = true;
    }

    addTraverseClosure(addTraverseClosure : TraverseClosure)
    {
        this.m_TraverseClosure.push(addTraverseClosure);
        this.m_bTraverseClosureUpdated = true;
    }
    addSurveyMeasurement(addSurveyMeasurement : SurveyMeasurement)
    {
        this.m_SurveyMeasurement.push(addSurveyMeasurement);
        this.m_bSurveyMeasurementUpdated = true;
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
        if (this.m_bStartPointUpdated)
        {
            objUpdated["StartPointID"] = lodash(this.StartPoint).isNil() ? null : this.m_StartPoint.toJsonObject();
        }
        if (this.m_bEndPointUpdated)
        {
            objUpdated["EndPointID"] = lodash(this.EndPoint).isNil() ? null : this.m_EndPoint.toJsonObject();
        }
        if (this.m_bSurveyIDUpdated)
        {
            objUpdated["SurveyID"] = lodash(this.SurveyID).isNil() ? null : this.m_SurveyID;
        }
        if (this.m_bTraverseClosureUpdated)
        {
            objUpdated["TraverseClosure"] = lodash(this.TraverseClosure).isNil() ? null : lodash(this.m_TraverseClosure).map(
                (arrayMember) =>
                {
                    return arrayMember.toJsonObject();
                }
            );
        }
        if (this.m_bSurveyMeasurementUpdated)
        {
            objUpdated["Traverse_SurveyMeasurement"] = lodash(this.SurveyMeasurement).isNil() ? null : lodash(this.m_SurveyMeasurement).map(
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
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bStartPointUpdated = false;
        this.m_bEndPointUpdated = false;
        this.m_bSurveyIDUpdated = false;
        this.m_bTraverseClosureUpdated = false;
        this.m_bSurveyMeasurementUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            StartPointID: lodash(this.StartPoint).isNil() ? null : this.m_StartPoint.toFirebase(),
            EndPointID: lodash(this.EndPoint).isNil() ? null : this.m_EndPoint.toFirebase(),
            SurveyID: lodash(this.SurveyID).isNil() ? null : this.m_SurveyID,
            TraverseClosure: lodash(this.TraverseClosure).isNil() ? null : lodash(this.m_TraverseClosure).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                ),
            Traverse_SurveyMeasurement: lodash(this.SurveyMeasurement).isNil() ? null : lodash(this.m_SurveyMeasurement).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                )

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : Traverse
    {
        let objTraverse = new Traverse();
        objTraverse.m_ID = firebaseObj.ID;
        objTraverse.m_Created = TimeConversion.toDate(firebaseObj.created);
        objTraverse.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objTraverse.m_Name = firebaseObj.Name;
        objTraverse.m_Description = firebaseObj.Description;
        objTraverse.m_StartPoint = SurveyPoint.fromFirebase(firebaseObj.StartPointID);
        objTraverse.m_EndPoint = SurveyPoint.fromFirebase(firebaseObj.EndPointID);
        objTraverse.m_SurveyID = firebaseObj.SurveyID;
        objTraverse.m_TraverseClosure = lodash.map(
                firebaseObj.TraverseClosure,
                (arrayMember) =>
                {
                    return TraverseClosure.fromFirebase(arrayMember);
                }
            );
        objTraverse.m_SurveyMeasurement = lodash.map(
                firebaseObj.Traverse_SurveyMeasurement,
                (arrayMember) =>
                {
                    return SurveyMeasurement.fromFirebase(arrayMember);
                }
            );

        objTraverse.setSaved();
        return objTraverse;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : Traverse[]
    {
        return lodash.map(objJson, (objTraverseJson) => Traverse.fromJsonObject(objTraverseJson));
    }

    static fromJson(strJson) : Traverse
    {
        let objJson = JSON.parse(strJson);
        return Traverse.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : Traverse
    {
        let objTraverse = new Traverse();
        objTraverse.m_ID = objJson.ID;
        objTraverse.m_Created = TimeConversion.toDate(objJson.created);
        objTraverse.m_Updated = TimeConversion.toDate(objJson.updated);
        objTraverse.m_Name = objJson.Name;
        objTraverse.m_Description = objJson.Description;
        objTraverse.m_StartPoint = SurveyPoint.fromJsonObject(objJson.StartPointID);
        objTraverse.m_EndPoint = SurveyPoint.fromJsonObject(objJson.EndPointID);
        objTraverse.m_SurveyID = objJson.SurveyID;
        objTraverse.m_TraverseClosure = lodash.map(
                objJson.TraverseClosure,
                (arrayMember) =>
                {
                    return TraverseClosure.fromJsonObject(arrayMember);
                }
            );
        objTraverse.m_SurveyMeasurement = lodash.map(
                objJson.Traverse_SurveyMeasurement,
                (arrayMember) =>
                {
                    return SurveyMeasurement.fromJsonObject(arrayMember);
                }
            );

        return objTraverse;
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
            StartPointID: lodash(this.StartPoint).isNil() ? null : this.m_StartPoint.toJsonObject(),
            EndPointID: lodash(this.EndPoint).isNil() ? null : this.m_EndPoint.toJsonObject(),
            SurveyID: lodash(this.SurveyID).isNil() ? null : this.m_SurveyID,
            TraverseClosure: lodash(this.TraverseClosure).isNil() ? null : lodash(this.m_TraverseClosure).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                ),
            Traverse_SurveyMeasurement: lodash(this.SurveyMeasurement).isNil() ? null : lodash(this.m_SurveyMeasurement).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                )

        };
    }
}