import { Injectable } from "@angular/core";

@Injectable()
export class BaseUrlService
{
    static BASE_URL : string = "localhost:49876";

    get url() : string
    {
        return BaseUrlService.BASE_URL;
    }
}