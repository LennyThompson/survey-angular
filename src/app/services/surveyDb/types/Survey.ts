// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import {Projection} from "./Projection";
import {SurveyMeasurement} from "./SurveyMeasurement";
import {SurveyImage} from "./SurveyImage";
import {Traverse} from "./Traverse";
import {Instrument} from "./Instrument";
import {SurveyPoint} from "./SurveyPoint";

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class Survey
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Name : string;
    private m_Description : string;
    private m_Projection : Projection;
    private m_SurveyMeasurement : SurveyMeasurement[];
    private m_SurveyImage : SurveyImage[];
    private m_Traverse : Traverse[];
    private m_Instrument : Instrument[];
    private m_SurveyPoint : SurveyPoint[];

    private m_bNameUpdated : boolean;
    private m_bDescriptionUpdated : boolean;
    private m_bProjectionUpdated : boolean;
    private m_bSurveyMeasurementUpdated : boolean;
    private m_bSurveyImageUpdated : boolean;
    private m_bTraverseUpdated : boolean;
    private m_bInstrumentUpdated : boolean;
    private m_bSurveyPointUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_Projection = new Projection();
        this.m_SurveyMeasurement = [];
        this.m_SurveyImage = [];
        this.m_Traverse = [];
        this.m_Instrument = [];
        this.m_SurveyPoint = [];

        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bProjectionUpdated = true;
        this.m_bSurveyMeasurementUpdated = true;
        this.m_bSurveyImageUpdated = true;
        this.m_bTraverseUpdated = true;
        this.m_bInstrumentUpdated = true;
        this.m_bSurveyPointUpdated = true;
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
    get Projection() : Projection
    {
        return this.m_Projection;
    }
    get SurveyMeasurement() : SurveyMeasurement[]
    {
        return this.m_SurveyMeasurement;
    }
    get SurveyImage() : SurveyImage[]
    {
        return this.m_SurveyImage;
    }
    get Traverse() : Traverse[]
    {
        return this.m_Traverse;
    }
    get Instrument() : Instrument[]
    {
        return this.m_Instrument;
    }
    get SurveyPoint() : SurveyPoint[]
    {
        return this.m_SurveyPoint;
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
    set Projection(Projection : Projection)
    {
        this.m_Projection = Projection;
        this.m_bProjectionUpdated = true;
    }

    addSurveyMeasurement(addSurveyMeasurement : SurveyMeasurement)
    {
        this.m_SurveyMeasurement.push(addSurveyMeasurement);
        this.m_bSurveyMeasurementUpdated = true;
    }
    addSurveyImage(addSurveyImage : SurveyImage)
    {
        this.m_SurveyImage.push(addSurveyImage);
        this.m_bSurveyImageUpdated = true;
    }
    addTraverse(addTraverse : Traverse)
    {
        this.m_Traverse.push(addTraverse);
        this.m_bTraverseUpdated = true;
    }
    addInstrument(addInstrument : Instrument)
    {
        this.m_Instrument.push(addInstrument);
        this.m_bInstrumentUpdated = true;
    }
    addSurveyPoint(addSurveyPoint : SurveyPoint)
    {
        this.m_SurveyPoint.push(addSurveyPoint);
        this.m_bSurveyPointUpdated = true;
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
        if (this.m_bProjectionUpdated)
        {
            objUpdated["ProjectionID"] = lodash(this.Projection).isNil() ? null : this.m_Projection.toJsonObject();
        }
        if (this.m_bSurveyMeasurementUpdated)
        {
            objUpdated["Measurements"] = lodash(this.SurveyMeasurement).isNil() ? null : lodash(this.m_SurveyMeasurement).map(
                (arrayMember) =>
                {
                    return arrayMember.toJsonObject();
                }
            );
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
        if (this.m_bTraverseUpdated)
        {
            objUpdated["Traverses"] = lodash(this.Traverse).isNil() ? null : lodash(this.m_Traverse).map(
                (arrayMember) =>
                {
                    return arrayMember.toJsonObject();
                }
            );
        }
        if (this.m_bInstrumentUpdated)
        {
            objUpdated["Survey_Instrument"] = lodash(this.Instrument).isNil() ? null : lodash(this.m_Instrument).map(
                (arrayMember) =>
                {
                    return arrayMember.toJsonObject();
                }
            );
        }
        if (this.m_bSurveyPointUpdated)
        {
            objUpdated["Survey_SurveyPoint"] = lodash(this.SurveyPoint).isNil() ? null : lodash(this.m_SurveyPoint).map(
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
        this.m_bProjectionUpdated = false;
        this.m_bSurveyMeasurementUpdated = false;
        this.m_bSurveyImageUpdated = false;
        this.m_bTraverseUpdated = false;
        this.m_bInstrumentUpdated = false;
        this.m_bSurveyPointUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            ProjectionID: lodash(this.Projection).isNil() ? null : this.m_Projection.toFirebase(),
            Measurements: lodash(this.SurveyMeasurement).isNil() ? null : lodash(this.m_SurveyMeasurement).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                ),
            Images: lodash(this.SurveyImage).isNil() ? null : lodash(this.m_SurveyImage).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                ),
            Traverses: lodash(this.Traverse).isNil() ? null : lodash(this.m_Traverse).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                ),
            Survey_Instrument: lodash(this.Instrument).isNil() ? null : lodash(this.m_Instrument).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                ),
            Survey_SurveyPoint: lodash(this.SurveyPoint).isNil() ? null : lodash(this.m_SurveyPoint).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                )

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : Survey
    {
        let objSurvey = new Survey();
        objSurvey.m_ID = firebaseObj.ID;
        objSurvey.m_Created = TimeConversion.toDate(firebaseObj.created);
        objSurvey.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objSurvey.m_Name = firebaseObj.Name;
        objSurvey.m_Description = firebaseObj.Description;
        objSurvey.m_Projection = Projection.fromFirebase(firebaseObj.ProjectionID);
        objSurvey.m_SurveyMeasurement = lodash.map(
                firebaseObj.Measurements,
                (arrayMember) =>
                {
                    return SurveyMeasurement.fromFirebase(arrayMember);
                }
            );
        objSurvey.m_SurveyImage = lodash.map(
                firebaseObj.Images,
                (arrayMember) =>
                {
                    return SurveyImage.fromFirebase(arrayMember);
                }
            );
        objSurvey.m_Traverse = lodash.map(
                firebaseObj.Traverses,
                (arrayMember) =>
                {
                    return Traverse.fromFirebase(arrayMember);
                }
            );
        objSurvey.m_Instrument = lodash.map(
                firebaseObj.Survey_Instrument,
                (arrayMember) =>
                {
                    return Instrument.fromFirebase(arrayMember);
                }
            );
        objSurvey.m_SurveyPoint = lodash.map(
                firebaseObj.Survey_SurveyPoint,
                (arrayMember) =>
                {
                    return SurveyPoint.fromFirebase(arrayMember);
                }
            );

        objSurvey.setSaved();
        return objSurvey;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : Survey[]
    {
        return lodash.map(objJson, (objSurveyJson) => Survey.fromJsonObject(objSurveyJson));
    }

    static fromJson(strJson) : Survey
    {
        let objJson = JSON.parse(strJson);
        return Survey.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : Survey
    {
        let objSurvey = new Survey();
        objSurvey.m_ID = objJson.ID;
        objSurvey.m_Created = TimeConversion.toDate(objJson.created);
        objSurvey.m_Updated = TimeConversion.toDate(objJson.updated);
        objSurvey.m_Name = objJson.Name;
        objSurvey.m_Description = objJson.Description;
        objSurvey.m_Projection = Projection.fromJsonObject(objJson.ProjectionID);
        objSurvey.m_SurveyMeasurement = lodash.map(
                objJson.Measurements,
                (arrayMember) =>
                {
                    return SurveyMeasurement.fromJsonObject(arrayMember);
                }
            );
        objSurvey.m_SurveyImage = lodash.map(
                objJson.Images,
                (arrayMember) =>
                {
                    return SurveyImage.fromJsonObject(arrayMember);
                }
            );
        objSurvey.m_Traverse = lodash.map(
                objJson.Traverses,
                (arrayMember) =>
                {
                    return Traverse.fromJsonObject(arrayMember);
                }
            );
        objSurvey.m_Instrument = lodash.map(
                objJson.Survey_Instrument,
                (arrayMember) =>
                {
                    return Instrument.fromJsonObject(arrayMember);
                }
            );
        objSurvey.m_SurveyPoint = lodash.map(
                objJson.Survey_SurveyPoint,
                (arrayMember) =>
                {
                    return SurveyPoint.fromJsonObject(arrayMember);
                }
            );

        return objSurvey;
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
            ProjectionID: lodash(this.Projection).isNil() ? null : this.m_Projection.toJsonObject(),
            Measurements: lodash(this.SurveyMeasurement).isNil() ? null : lodash(this.m_SurveyMeasurement).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                ),
            Images: lodash(this.SurveyImage).isNil() ? null : lodash(this.m_SurveyImage).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                ),
            Traverses: lodash(this.Traverse).isNil() ? null : lodash(this.m_Traverse).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                ),
            Survey_Instrument: lodash(this.Instrument).isNil() ? null : lodash(this.m_Instrument).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                ),
            Survey_SurveyPoint: lodash(this.SurveyPoint).isNil() ? null : lodash(this.m_SurveyPoint).map(
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                )

        };
    }
}