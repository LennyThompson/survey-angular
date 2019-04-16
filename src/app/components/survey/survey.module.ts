
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatCardModule, MatDialogModule, MatInputModule} from "@angular/material";
import {MatSelectModule} from "@angular/material";

import {SurveyDetailsComponent} from "./details/survey-details";
import {SurveyListComponent} from "./list/survey-list";
import {SurveyComponent} from "./survey";

import {
    HTTP_PROVIDERS, SUBJECT_PROVIDERS, SIMPLE_PROVIDERS
} from "../../services/surveyDb/webAPI/index";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CoordFormat} from "./pipes/format-coord";
import {BearingFormat} from "./pipes/format-bearing";
import {DmsBearingFormat} from "./pipes/format-dms-bearing";
import {FORM_COMPONENTS, ENTRY_COMPONENTS} from "./form";
import { SELECT_COMPONENTS } from "./select";
import { LIST_ITEM_COMPONENTS } from "./list-item";
import {SurveyCalculator} from "../../services/surveyCalc/surveyCalculator";

import { BearingInputContainer} from "./utils/bearing-input/bearing-input";
import {Debounce} from "./utils/debounce";
import {BearingPlaceholder} from "./pipes/bearing-placeholder";
import {HorizontalDistancePlaceholder} from "./pipes/horiz-distance-placeholder";
import {VerticalDistancePlaceholder} from "./pipes/vert-distance-placeholder";
import {TraverseMeasurementSummarySubjectProvider} from "../../services/surveyDb/webAPI";
import {EDIT_PROVIDER_COMPONENTS} from "./edit-providers";

import "./../../services/surveyDb/types";
import {SUBJECT_ACCESSORS} from "../../services/surveyDb/webAPI/AccessorIndex";

import {SurveyRoutes} from "./survey.routing"

@NgModule (
    {
        imports: [
            CommonModule,
            FormsModule,
            FlexLayoutModule,
            MatCardModule,
            MatSelectModule,
            MatDialogModule,
            MatInputModule,
            SurveyRoutes
        ],
        declarations: [
            SurveyListComponent,
            SurveyComponent,
            SurveyDetailsComponent,
            CoordFormat,
            BearingFormat,
            BearingPlaceholder,
            HorizontalDistancePlaceholder,
            VerticalDistancePlaceholder,
            DmsBearingFormat,
            FORM_COMPONENTS,
            SELECT_COMPONENTS,
            LIST_ITEM_COMPONENTS,
            BearingInputContainer,
            Debounce,
            ENTRY_COMPONENTS
        ],
        // This is where the components used in mdDialog need to be declared
        // see https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-entry-component-defined
        entryComponents: [
            ENTRY_COMPONENTS
        ],
        providers: [
            SUBJECT_PROVIDERS,
            SUBJECT_ACCESSORS,
            HTTP_PROVIDERS,
            SIMPLE_PROVIDERS,
            EDIT_PROVIDER_COMPONENTS,
            TraverseMeasurementSummarySubjectProvider,
            CoordFormat,
            BearingFormat,
            BearingPlaceholder,
            HorizontalDistancePlaceholder,
            VerticalDistancePlaceholder,
            DmsBearingFormat,
            SurveyCalculator
        ]
    }
)
export class SurveyModule {}
