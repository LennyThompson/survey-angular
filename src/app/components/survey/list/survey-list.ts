import {Component, Input, OnInit} from "@angular/core";
import {SurveySummary} from "../../../services/surveyDb/types";
import {Observable} from "rxjs";
import {
    SurveySummarySubjectProvider,
} from "../../../services/surveyDb/webAPI";


@Component({
    // selector: "survey-list",
    templateUrl: "./survey-list.html",
    styleUrls: ["./survey-list.scss"]
})
export class SurveyListComponent implements OnInit
{
    private m_listSurveys : Observable<SurveySummary[]>;
    constructor(private surveyService : SurveySummarySubjectProvider)
    {
    }

    ngOnInit(): void
    {
        this.m_listSurveys = this.surveyService.getSurveySummarySummaries();
    }

    get Surveys() : Observable<SurveySummary[]>
    {
        return this.m_listSurveys;
    }
}
