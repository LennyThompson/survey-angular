import { expect } from "chai";

import {TimeConversion} from "./TimeConversion";

describe("Test the TimeConversion functions",
    ()=>
    {
        it("Should construct a valid date from serialised json date",
            ()=>
            {
                let strDate: string = "2016-11-12 06:21:48";
                let date: Date = TimeConversion.toDate(strDate);

                // Get the local time zone offset

                let tzOffset = date.getTimezoneOffset();
                let tzOffsetHours = tzOffset / 60;
                let tzOffsetMinutes = tzOffset - (tzOffsetHours * 60);
                expect(date).to.exist;
                expect(date.getFullYear()).to.equal(2016);
                expect(date.getMonth()).to.equal(10);
                expect(date.getDate()).to.equal(12);
                expect(date.getHours()).to.equal(6 - tzOffsetHours);
                expect(date.getMinutes()).to.equal(21 - tzOffsetMinutes);
                expect(date.getSeconds()).to.equal(48);

            }
        );
    }
);