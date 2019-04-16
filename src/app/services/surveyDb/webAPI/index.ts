import { SurveyAdjustmentServiceHttp } from "./survey-adjustment-service/SurveyAdjustmentServiceHttp";
import { SurveyAdjustmentSubjectProvider } from "./survey-adjustment-service/SurveyAdjustmentSubjectProvider";
import { CurrentSurveyAdjustmentProvider, CurrentSurveyAdjustmentListProvider } from "./survey-adjustment-service/SurveyAdjustmentSimpleProvider";

import { SurveySummaryServiceHttp } from "./survey-summary-service/SurveySummaryServiceHttp";
import { SurveySummarySubjectProvider } from "./survey-summary-service/SurveySummarySubjectProvider";
import { CurrentSurveySummaryProvider, CurrentSurveySummaryListProvider } from "./survey-summary-service/SurveySummarySimpleProvider";

import { TraverseServiceHttp } from "./traverse-service/TraverseServiceHttp";
import { TraverseSubjectProvider } from "./traverse-service/TraverseSubjectProvider";
import { CurrentTraverseProvider, CurrentTraverseListProvider } from "./traverse-service/TraverseSimpleProvider";

import { TraverseSummaryServiceHttp } from "./traverse-summary-service/TraverseSummaryServiceHttp";
import { TraverseSummarySubjectProvider } from "./traverse-summary-service/TraverseSummarySubjectProvider";
import { CurrentTraverseSummaryProvider, CurrentTraverseSummaryListProvider } from "./traverse-summary-service/TraverseSummarySimpleProvider";

import { TraverseMeasurementSummaryServiceHttp } from "./traverse-measurement-summary-service/TraverseMeasurementSummaryServiceHttp";
import { TraverseMeasurementSummarySubjectProvider } from "./traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";
import { CurrentTraverseMeasurementSummaryProvider, CurrentTraverseMeasurementSummaryListProvider } from "./traverse-measurement-summary-service/TraverseMeasurementSummarySimpleProvider";

import { SurveyPointServiceHttp } from "./survey-point-service/SurveyPointServiceHttp";
import { SurveyPointSubjectProvider } from "./survey-point-service/SurveyPointSubjectProvider";
import { CurrentSurveyPointProvider, CurrentSurveyPointListProvider } from "./survey-point-service/SurveyPointSimpleProvider";

import { InstrumentManufacturerServiceHttp } from "./instrument-manufacturer-service/InstrumentManufacturerServiceHttp";
import { InstrumentManufacturerSubjectProvider } from "./instrument-manufacturer-service/InstrumentManufacturerSubjectProvider";
import { CurrentInstrumentManufacturerProvider, CurrentInstrumentManufacturerListProvider } from "./instrument-manufacturer-service/InstrumentManufacturerSimpleProvider";

import { SurveyPointTypeServiceHttp } from "./survey-point-type-service/SurveyPointTypeServiceHttp";
import { SurveyPointTypeSubjectProvider } from "./survey-point-type-service/SurveyPointTypeSubjectProvider";
import { CurrentSurveyPointTypeProvider, CurrentSurveyPointTypeListProvider } from "./survey-point-type-service/SurveyPointTypeSimpleProvider";

import { InstrumentServiceHttp } from "./instrument-service/InstrumentServiceHttp";
import { InstrumentSubjectProvider } from "./instrument-service/InstrumentSubjectProvider";
import { CurrentInstrumentProvider, CurrentInstrumentListProvider } from "./instrument-service/InstrumentSimpleProvider";

import { ProjectionServiceHttp } from "./projection-service/ProjectionServiceHttp";
import { ProjectionSubjectProvider } from "./projection-service/ProjectionSubjectProvider";
import { CurrentProjectionProvider, CurrentProjectionListProvider } from "./projection-service/ProjectionSimpleProvider";

import { SurveyImageServiceHttp } from "./survey-image-service/SurveyImageServiceHttp";
import { SurveyImageSubjectProvider } from "./survey-image-service/SurveyImageSubjectProvider";
import { CurrentSurveyImageProvider, CurrentSurveyImageListProvider } from "./survey-image-service/SurveyImageSimpleProvider";

import { SurveyMeasurementServiceHttp } from "./survey-measurement-service/SurveyMeasurementServiceHttp";
import { SurveyMeasurementSubjectProvider } from "./survey-measurement-service/SurveyMeasurementSubjectProvider";
import { CurrentSurveyMeasurementProvider, CurrentSurveyMeasurementListProvider } from "./survey-measurement-service/SurveyMeasurementSimpleProvider";

import { TraverseClosureServiceHttp } from "./traverse-closure-service/TraverseClosureServiceHttp";
import { TraverseClosureSubjectProvider } from "./traverse-closure-service/TraverseClosureSubjectProvider";
import { CurrentTraverseClosureProvider, CurrentTraverseClosureListProvider } from "./traverse-closure-service/TraverseClosureSimpleProvider";

import { SurveyReferenceServiceHttp } from "./survey-reference-service/SurveyReferenceServiceHttp";
import { SurveyReferenceSubjectProvider } from "./survey-reference-service/SurveyReferenceSubjectProvider";
import { CurrentSurveyReferenceProvider, CurrentSurveyReferenceListProvider } from "./survey-reference-service/SurveyReferenceSimpleProvider";

import { SurveyServiceHttp } from "./survey-service/SurveyServiceHttp";
import { SurveySubjectProvider } from "./survey-service/SurveySubjectProvider";
import { CurrentSurveyProvider, CurrentSurveyListProvider } from "./survey-service/SurveySimpleProvider";

import { SurveyPointSummaryServiceHttp } from "./survey-point-summary-service/SurveyPointSummaryServiceHttp";
import { SurveyPointSummarySubjectProvider } from "./survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { CurrentSurveyPointSummaryProvider, CurrentSurveyPointSummaryListProvider } from "./survey-point-summary-service/SurveyPointSummarySimpleProvider";


export const HTTP_PROVIDERS: any[] = [
    SurveyAdjustmentServiceHttp,
    SurveySummaryServiceHttp,
    TraverseServiceHttp,
    TraverseSummaryServiceHttp,
    TraverseMeasurementSummaryServiceHttp,
    SurveyPointServiceHttp,
    InstrumentManufacturerServiceHttp,
    SurveyPointTypeServiceHttp,
    InstrumentServiceHttp,
    ProjectionServiceHttp,
    SurveyImageServiceHttp,
    SurveyMeasurementServiceHttp,
    TraverseClosureServiceHttp,
    SurveyReferenceServiceHttp,
    SurveyServiceHttp,
    SurveyPointSummaryServiceHttp
];

export const SUBJECT_PROVIDERS: any[] = [
    SurveyAdjustmentSubjectProvider,
    SurveySummarySubjectProvider,
    TraverseSubjectProvider,
    TraverseSummarySubjectProvider,
    TraverseMeasurementSummarySubjectProvider,
    SurveyPointSubjectProvider,
    InstrumentManufacturerSubjectProvider,
    SurveyPointTypeSubjectProvider,
    InstrumentSubjectProvider,
    ProjectionSubjectProvider,
    SurveyImageSubjectProvider,
    SurveyMeasurementSubjectProvider,
    TraverseClosureSubjectProvider,
    SurveyReferenceSubjectProvider,
    SurveySubjectProvider,
    SurveyPointSummarySubjectProvider
];

export const SIMPLE_PROVIDERS: any[] = [
    CurrentSurveyAdjustmentProvider, CurrentSurveyAdjustmentListProvider,
    CurrentSurveySummaryProvider, CurrentSurveySummaryListProvider,
    CurrentTraverseProvider, CurrentTraverseListProvider,
    CurrentTraverseSummaryProvider, CurrentTraverseSummaryListProvider,
    CurrentTraverseMeasurementSummaryProvider, CurrentTraverseMeasurementSummaryListProvider,
    CurrentSurveyPointProvider, CurrentSurveyPointListProvider,
    CurrentInstrumentManufacturerProvider, CurrentInstrumentManufacturerListProvider,
    CurrentSurveyPointTypeProvider, CurrentSurveyPointTypeListProvider,
    CurrentInstrumentProvider, CurrentInstrumentListProvider,
    CurrentProjectionProvider, CurrentProjectionListProvider,
    CurrentSurveyImageProvider, CurrentSurveyImageListProvider,
    CurrentSurveyMeasurementProvider, CurrentSurveyMeasurementListProvider,
    CurrentTraverseClosureProvider, CurrentTraverseClosureListProvider,
    CurrentSurveyReferenceProvider, CurrentSurveyReferenceListProvider,
    CurrentSurveyProvider, CurrentSurveyListProvider,
    CurrentSurveyPointSummaryProvider, CurrentSurveyPointSummaryListProvider
];

export { SurveyAdjustmentServiceHttp } from "./survey-adjustment-service/SurveyAdjustmentServiceHttp";
export { SurveyAdjustmentSubjectProvider } from "./survey-adjustment-service/SurveyAdjustmentSubjectProvider";
export { CurrentSurveyAdjustmentProvider, CurrentSurveyAdjustmentListProvider } from "./survey-adjustment-service/SurveyAdjustmentSimpleProvider";

export { SurveySummaryServiceHttp } from "./survey-summary-service/SurveySummaryServiceHttp";
export { SurveySummarySubjectProvider } from "./survey-summary-service/SurveySummarySubjectProvider";
export { CurrentSurveySummaryProvider, CurrentSurveySummaryListProvider } from "./survey-summary-service/SurveySummarySimpleProvider";

export { TraverseServiceHttp } from "./traverse-service/TraverseServiceHttp";
export { TraverseSubjectProvider } from "./traverse-service/TraverseSubjectProvider";
export { CurrentTraverseProvider, CurrentTraverseListProvider } from "./traverse-service/TraverseSimpleProvider";

export { TraverseSummaryServiceHttp } from "./traverse-summary-service/TraverseSummaryServiceHttp";
export { TraverseSummarySubjectProvider } from "./traverse-summary-service/TraverseSummarySubjectProvider";
export { CurrentTraverseSummaryProvider, CurrentTraverseSummaryListProvider } from "./traverse-summary-service/TraverseSummarySimpleProvider";

export { TraverseMeasurementSummaryServiceHttp } from "./traverse-measurement-summary-service/TraverseMeasurementSummaryServiceHttp";
export { TraverseMeasurementSummarySubjectProvider } from "./traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";
export { CurrentTraverseMeasurementSummaryProvider, CurrentTraverseMeasurementSummaryListProvider } from "./traverse-measurement-summary-service/TraverseMeasurementSummarySimpleProvider";

export { SurveyPointServiceHttp } from "./survey-point-service/SurveyPointServiceHttp";
export { SurveyPointSubjectProvider } from "./survey-point-service/SurveyPointSubjectProvider";
export { CurrentSurveyPointProvider, CurrentSurveyPointListProvider } from "./survey-point-service/SurveyPointSimpleProvider";

export { InstrumentManufacturerServiceHttp } from "./instrument-manufacturer-service/InstrumentManufacturerServiceHttp";
export { InstrumentManufacturerSubjectProvider } from "./instrument-manufacturer-service/InstrumentManufacturerSubjectProvider";
export { CurrentInstrumentManufacturerProvider, CurrentInstrumentManufacturerListProvider } from "./instrument-manufacturer-service/InstrumentManufacturerSimpleProvider";

export { SurveyPointTypeServiceHttp } from "./survey-point-type-service/SurveyPointTypeServiceHttp";
export { SurveyPointTypeSubjectProvider } from "./survey-point-type-service/SurveyPointTypeSubjectProvider";
export { CurrentSurveyPointTypeProvider, CurrentSurveyPointTypeListProvider } from "./survey-point-type-service/SurveyPointTypeSimpleProvider";

export { InstrumentServiceHttp } from "./instrument-service/InstrumentServiceHttp";
export { InstrumentSubjectProvider } from "./instrument-service/InstrumentSubjectProvider";
export { CurrentInstrumentProvider, CurrentInstrumentListProvider } from "./instrument-service/InstrumentSimpleProvider";

export { ProjectionServiceHttp } from "./projection-service/ProjectionServiceHttp";
export { ProjectionSubjectProvider } from "./projection-service/ProjectionSubjectProvider";
export { CurrentProjectionProvider, CurrentProjectionListProvider } from "./projection-service/ProjectionSimpleProvider";

export { SurveyImageServiceHttp } from "./survey-image-service/SurveyImageServiceHttp";
export { SurveyImageSubjectProvider } from "./survey-image-service/SurveyImageSubjectProvider";
export { CurrentSurveyImageProvider, CurrentSurveyImageListProvider } from "./survey-image-service/SurveyImageSimpleProvider";

export { SurveyMeasurementServiceHttp } from "./survey-measurement-service/SurveyMeasurementServiceHttp";
export { SurveyMeasurementSubjectProvider } from "./survey-measurement-service/SurveyMeasurementSubjectProvider";
export { CurrentSurveyMeasurementProvider, CurrentSurveyMeasurementListProvider } from "./survey-measurement-service/SurveyMeasurementSimpleProvider";

export { TraverseClosureServiceHttp } from "./traverse-closure-service/TraverseClosureServiceHttp";
export { TraverseClosureSubjectProvider } from "./traverse-closure-service/TraverseClosureSubjectProvider";
export { CurrentTraverseClosureProvider, CurrentTraverseClosureListProvider } from "./traverse-closure-service/TraverseClosureSimpleProvider";

export { SurveyReferenceServiceHttp } from "./survey-reference-service/SurveyReferenceServiceHttp";
export { SurveyReferenceSubjectProvider } from "./survey-reference-service/SurveyReferenceSubjectProvider";
export { CurrentSurveyReferenceProvider, CurrentSurveyReferenceListProvider } from "./survey-reference-service/SurveyReferenceSimpleProvider";

export { SurveyServiceHttp } from "./survey-service/SurveyServiceHttp";
export { SurveySubjectProvider } from "./survey-service/SurveySubjectProvider";
export { CurrentSurveyProvider, CurrentSurveyListProvider } from "./survey-service/SurveySimpleProvider";

export { SurveyPointSummaryServiceHttp } from "./survey-point-summary-service/SurveyPointSummaryServiceHttp";
export { SurveyPointSummarySubjectProvider } from "./survey-point-summary-service/SurveyPointSummarySubjectProvider";
export { CurrentSurveyPointSummaryProvider, CurrentSurveyPointSummaryListProvider } from "./survey-point-summary-service/SurveyPointSummarySimpleProvider";

