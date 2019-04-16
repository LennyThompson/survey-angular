import {Pipe, PipeTransform} from "@angular/core";
import * as lodash from "lodash";

@Pipe(
    {
        name: "bearingPlaceholder"
    }
)
export class BearingPlaceholder implements PipeTransform
{
    widthTransform(strNumber: string, width: number, strPrefix: string): string
    {
        let strReturn = lodash.range(0, width - strNumber.length)
            .map(
                nPrefix => strPrefix
            )
            .join();
        strReturn += strNumber;
        return strReturn;
    }

    transform(value: number, ...args: any[]): any
    {
        if(!lodash.isUndefined(value))
        {
            let degrees: number = Math.floor(value);
            let minutes: number = Math.floor((value - degrees) * 60);
            let seconds: number = Math.round(((value - degrees) * 60 - minutes) * 60);

            if(seconds === 60)
            {
                ++minutes;
                seconds = 0;
            }

            return degrees.toString() + "º" +
                this.widthTransform(minutes.toString(), 2, "0") + "'" +
                this.widthTransform(seconds.toString(), 2, "0") + "\"";
        }
        return "Bearing";
    }
}
