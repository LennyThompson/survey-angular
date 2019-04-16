
import {SurveyMeasurement} from "../surveyDb/types/SurveyMeasurement";
export interface IRectangular
{
    X: number;
    Y: number;
    Z: number;

    toPolar(): IPolar;
}

export interface IPolar
{
    HDistance: number;
    RadiansBearing: number;
    VDistance: number;

    toRectangular(): IRectangular;
}

const INV_180: number = 1 / 180;
const TO_RADIANS: number = Math.PI * INV_180;
const FROM_RADIANS: number = 180.0 / Math.PI;

class PolarImpl implements IPolar
{
    HDistance: number;
    RadiansBearing: number;
    VDistance: number;

    constructor();
    constructor(survMeasFrom: SurveyMeasurement)
    constructor(survMeasFrom?: SurveyMeasurement)
    {
        if(survMeasFrom)
        {
            this.HDistance = survMeasFrom.HorizDistance;
            this.RadiansBearing = PolarImpl.toRadians(survMeasFrom.Bearing);
            this.VDistance = survMeasFrom.VertDistance;
        }
    }

    public static toRadians(degBearing: number): number
    {
        return degBearing * TO_RADIANS;
    }

    public static fromRadians(radians: number): number
    {
        return radians * FROM_RADIANS;
    }

    toRectangular(): IRectangular
    {
        let rectReturn: IRectangular = new RectangularImpl();
        rectReturn.X = this.HDistance * Math.sin(this.RadiansBearing);
        rectReturn.Y = this.HDistance * Math.cos(this.RadiansBearing);
        rectReturn.Z = this.VDistance;

        return rectReturn;
    }
}

class RectangularImpl implements IRectangular
{
    X: number;
    Y: number;
    Z: number;

    toPolar(): IPolar
    {
        let polarReturn = new PolarImpl();
        polarReturn.VDistance = this.Z;
        polarReturn.HDistance = Math.sqrt(this.X * this.X + this.Y * this.Y);
        polarReturn.RadiansBearing = Math.atan2(this.Y, this.X);
        if(polarReturn.RadiansBearing < 0)
        {
            polarReturn.RadiansBearing += 2 * Math.PI;
        }
        return polarReturn;
    }
}

import {Injectable} from "@angular/core";
import {SurveyPoint} from "../surveyDb/types/SurveyPoint";

@Injectable()
export class SurveyCalculator
{

    public convertMeasurementToPolar(survMeas: SurveyMeasurement): IPolar
    {
        return new PolarImpl(survMeas);
    }

    public toDegrees(degMinSec: number): number
    {
        let degrees: number = Math.floor(degMinSec);
        let minutes: number = Math.floor((degMinSec - degrees) * 100);
        let seconds: number = Math.floor(((degMinSec- degrees) * 100 - minutes) * 100);

        return degrees + minutes / 60 + seconds / 3600;
    }

    public toDMS(degrees: number): number
    {
        let degs: number = Math.floor(degrees);
        let minutes: number = Math.floor((degrees - degs) * 60);
        let seconds: number = Math.floor(((degrees - degs) * 60 - minutes) * 60);

        return degrees + minutes / 100 + seconds / 10000;
    }

    public updateMeasurement(meas: SurveyMeasurement): boolean
    {
        let polarPt: IPolar = this.convertMeasurementToPolar(meas);
        let rectPt: IRectangular = polarPt.toRectangular();
        let newSurveyPt: SurveyPoint = new SurveyPoint();

        if(!meas.PointTo)
        {
            meas.PointTo = new SurveyPoint();
        }

        meas.PointTo.X = meas.PointFrom.X + rectPt.X;
        meas.PointTo.Y = meas.PointFrom.Y + rectPt.Y;
        meas.PointTo.Z = meas.PointFrom.Z + rectPt.Z;

        return true;
    }
}
