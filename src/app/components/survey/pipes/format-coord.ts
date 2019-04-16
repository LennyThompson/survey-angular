
import {Pipe, PipeTransform} from "@angular/core";
@Pipe(
    {
        name: "coordFormat"
    }
)
export class CoordFormat implements PipeTransform
{
    transform(value: number, ...args: any[]): any
    {
        if(value)
        {
            return value.toLocaleString("en-US", {minimumFractionDigits: 3});
        }
        return "";
    }

}