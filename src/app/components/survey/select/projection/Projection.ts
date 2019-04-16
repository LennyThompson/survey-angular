// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:29:21 AEST 2018

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy } from "@angular/core";
import {MatSelect, MatOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable, Subscription } from "rxjs/Rx";

import {Projection} from "./../../../../services/surveyDb/types";
import {ProjectionSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditProjectionProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "projection-select",
        templateUrl: "./Projection.html",
        styleUrls: ["./Projection.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: ProjectionSelectComponent,
                multi: true,
            }
        ]

    }
)
export class ProjectionSelectComponent extends ElementBase<Projection> implements OnInit, OnDestroy
{
    protected _listProjection: Projection[] = [];
    protected _listSubscribe: Subscription;
    protected _initialSelectComplete: boolean;
    @ViewChild(MatSelect) select: MatSelect;
    @ViewChildren(MatOption) options: QueryList<MatOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentProjection: Projection;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceProjection: ProjectionSubjectProvider
        , private _addProjection: EditProjectionProvider

    )
    {
        super(validators, asyncValidators);
    }

    get Projection(): Projection[]
    {
        return this._listProjection;
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            const summaries = this._serviceProjection.getProjectionSummaries();
            this._listSubscribe = summaries
                    .takeUntil(summaries.filter(list => this._listProjection.length > 0))
                    .subscribe
                    (
                        list =>
                        {
                            this._listProjection = list;
                            console.log("Projection list is ready...", list.length);
                            this.updateSelectedValue();
                        }
                    );
        }
    }

    public ngOnDestroy(): void
    {
        if (this._listSubscribe)
        {
            this._listSubscribe.unsubscribe();
        }
    }

    writeValue(value: Projection): void
    {
        super.writeValue(value);
        console.log("Projection select model is ready...");
        this.updateSelectedValue();
    }

    private isSelectedOption(item: Projection): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    private updateSelectedValue(): boolean
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listProjection
            &&
            this._listProjection.length
            &&
            this.value
        )
        {
            const currentType = lodash(this._listProjection).filter(item => this.isSelectedOption(item)).first();
            console.log("Projection selection is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
            return true;
        }
        return false;
    }

    public onAddNewProjection()
    {
        this._addProjection.addProjection();
    }

}