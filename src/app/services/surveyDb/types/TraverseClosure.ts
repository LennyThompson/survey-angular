// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 15 19:58:40 AEST 2018

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types

export class TraverseClosure
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_MiscZ : number;
    private m_MiscY : number;
    private m_MiscX : number;
    private m_BearingMisclose : number;
    private m_TraverseLength : number;
    private m_Adjusted : number;
    private m_TraverseID : number;

    private m_bMiscZUpdated : boolean;
    private m_bMiscYUpdated : boolean;
    private m_bMiscXUpdated : boolean;
    private m_bBearingMiscloseUpdated : boolean;
    private m_bTraverseLengthUpdated : boolean;
    private m_bAdjustedUpdated : boolean;
    private m_bTraverseIDUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_MiscZ = 0;
        this.m_MiscY = 0;
        this.m_MiscX = 0;
        this.m_BearingMisclose = 0;
        this.m_TraverseLength = 0;
        this.m_Adjusted = 0;
        this.m_TraverseID = 0;

        this.m_bMiscZUpdated = true;
        this.m_bMiscYUpdated = true;
        this.m_bMiscXUpdated = true;
        this.m_bBearingMiscloseUpdated = true;
        this.m_bTraverseLengthUpdated = true;
        this.m_bAdjustedUpdated = true;
        this.m_bTraverseIDUpdated = true;
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
    get MiscZ() : number
    {
        return this.m_MiscZ;
    }
    get MiscY() : number
    {
        return this.m_MiscY;
    }
    get MiscX() : number
    {
        return this.m_MiscX;
    }
    get BearingMisclose() : number
    {
        return this.m_BearingMisclose;
    }
    get TraverseLength() : number
    {
        return this.m_TraverseLength;
    }
    get Adjusted() : number
    {
        return this.m_Adjusted;
    }
    get TraverseID() : number
    {
        return this.m_TraverseID;
    }

    set MiscZ(MiscZ : number)
    {
        this.m_MiscZ = MiscZ;
        this.m_bMiscZUpdated = true;
    }
    set MiscY(MiscY : number)
    {
        this.m_MiscY = MiscY;
        this.m_bMiscYUpdated = true;
    }
    set MiscX(MiscX : number)
    {
        this.m_MiscX = MiscX;
        this.m_bMiscXUpdated = true;
    }
    set BearingMisclose(BearingMisclose : number)
    {
        this.m_BearingMisclose = BearingMisclose;
        this.m_bBearingMiscloseUpdated = true;
    }
    set TraverseLength(TraverseLength : number)
    {
        this.m_TraverseLength = TraverseLength;
        this.m_bTraverseLengthUpdated = true;
    }
    set Adjusted(Adjusted : number)
    {
        this.m_Adjusted = Adjusted;
        this.m_bAdjustedUpdated = true;
    }
    set TraverseID(TraverseID : number)
    {
        this.m_TraverseID = TraverseID;
        this.m_bTraverseIDUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bMiscZUpdated)
        {
            objUpdated["MiscZ"] = lodash(this.MiscZ).isNil() ? null : this.m_MiscZ;
        }
        if (this.m_bMiscYUpdated)
        {
            objUpdated["MiscY"] = lodash(this.MiscY).isNil() ? null : this.m_MiscY;
        }
        if (this.m_bMiscXUpdated)
        {
            objUpdated["MiscX"] = lodash(this.MiscX).isNil() ? null : this.m_MiscX;
        }
        if (this.m_bBearingMiscloseUpdated)
        {
            objUpdated["BearingMisclose"] = lodash(this.BearingMisclose).isNil() ? null : this.m_BearingMisclose;
        }
        if (this.m_bTraverseLengthUpdated)
        {
            objUpdated["TraverseLength"] = lodash(this.TraverseLength).isNil() ? null : this.m_TraverseLength;
        }
        if (this.m_bAdjustedUpdated)
        {
            objUpdated["Adjusted"] = lodash(this.Adjusted).isNil() ? null : this.m_Adjusted;
        }
        if (this.m_bTraverseIDUpdated)
        {
            objUpdated["TraverseID"] = lodash(this.TraverseID).isNil() ? null : this.m_TraverseID;
        }

        return objUpdated;
    }


    setSaved() : void
    {
        this.m_bMiscZUpdated = false;
        this.m_bMiscYUpdated = false;
        this.m_bMiscXUpdated = false;
        this.m_bBearingMiscloseUpdated = false;
        this.m_bTraverseLengthUpdated = false;
        this.m_bAdjustedUpdated = false;
        this.m_bTraverseIDUpdated = false;
    }

    toFirebase() : any
    {

        let objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            MiscZ: lodash(this.MiscZ).isNil() ? null : this.m_MiscZ,
            MiscY: lodash(this.MiscY).isNil() ? null : this.m_MiscY,
            MiscX: lodash(this.MiscX).isNil() ? null : this.m_MiscX,
            BearingMisclose: lodash(this.BearingMisclose).isNil() ? null : this.m_BearingMisclose,
            TraverseLength: lodash(this.TraverseLength).isNil() ? null : this.m_TraverseLength,
            Adjusted: lodash(this.Adjusted).isNil() ? null : this.m_Adjusted,
            TraverseID: lodash(this.TraverseID).isNil() ? null : this.m_TraverseID

        };
        return objFirebase;
    }

    static fromFirebase(firebaseObj : any) : TraverseClosure
    {
        let objTraverseClosure = new TraverseClosure();
        objTraverseClosure.m_ID = firebaseObj.ID;
        objTraverseClosure.m_Created = TimeConversion.toDate(firebaseObj.created);
        objTraverseClosure.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objTraverseClosure.m_MiscZ = firebaseObj.MiscZ;
        objTraverseClosure.m_MiscY = firebaseObj.MiscY;
        objTraverseClosure.m_MiscX = firebaseObj.MiscX;
        objTraverseClosure.m_BearingMisclose = firebaseObj.BearingMisclose;
        objTraverseClosure.m_TraverseLength = firebaseObj.TraverseLength;
        objTraverseClosure.m_Adjusted = firebaseObj.Adjusted;
        objTraverseClosure.m_TraverseID = firebaseObj.TraverseID;

        objTraverseClosure.setSaved();
        return objTraverseClosure;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : TraverseClosure[]
    {
        return lodash.map(objJson, (objTraverseClosureJson) => TraverseClosure.fromJsonObject(objTraverseClosureJson));
    }

    static fromJson(strJson) : TraverseClosure
    {
        let objJson = JSON.parse(strJson);
        return TraverseClosure.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : TraverseClosure
    {
        let objTraverseClosure = new TraverseClosure();
        objTraverseClosure.m_ID = objJson.ID;
        objTraverseClosure.m_Created = TimeConversion.toDate(objJson.created);
        objTraverseClosure.m_Updated = TimeConversion.toDate(objJson.updated);
        objTraverseClosure.m_MiscZ = objJson.MiscZ;
        objTraverseClosure.m_MiscY = objJson.MiscY;
        objTraverseClosure.m_MiscX = objJson.MiscX;
        objTraverseClosure.m_BearingMisclose = objJson.BearingMisclose;
        objTraverseClosure.m_TraverseLength = objJson.TraverseLength;
        objTraverseClosure.m_Adjusted = objJson.Adjusted;
        objTraverseClosure.m_TraverseID = objJson.TraverseID;

        return objTraverseClosure;
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
            MiscZ: lodash(this.MiscZ).isNil() ? null : this.m_MiscZ,
            MiscY: lodash(this.MiscY).isNil() ? null : this.m_MiscY,
            MiscX: lodash(this.MiscX).isNil() ? null : this.m_MiscX,
            BearingMisclose: lodash(this.BearingMisclose).isNil() ? null : this.m_BearingMisclose,
            TraverseLength: lodash(this.TraverseLength).isNil() ? null : this.m_TraverseLength,
            Adjusted: lodash(this.Adjusted).isNil() ? null : this.m_Adjusted,
            TraverseID: lodash(this.TraverseID).isNil() ? null : this.m_TraverseID

        };
    }
}