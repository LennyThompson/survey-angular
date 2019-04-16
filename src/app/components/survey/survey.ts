import {Component, Input} from "@angular/core";
import {SurveySummary} from "../../services/surveyDb/types/SurveySummary";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: "survey-item",
    templateUrl: "./survey.html",
    styleUrls: ["./survey.scss"]
})
export class SurveyComponent
{
    private m_surveyItem : SurveySummary;
    private m_showDetails: boolean;
    constructor
    (
        private route: ActivatedRoute,
        private router: Router
    )
    {
        this.m_showDetails = false;
    }

    @Input("survey")
    set Survey(surveyItem : SurveySummary)
    {
        this.m_surveyItem = surveyItem;
    }
    get Survey() : SurveySummary
    {
        return this.m_surveyItem;
    }

    get showDetails(): boolean
    {
        return this.m_showDetails;
    }

    onShowDetails(): void
    {
        this.m_showDetails = true;
    }

}
