// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Nov 22 20:29:21 AEST 2018

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy } from "@angular/core";
import {MatSelect, MatOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable, Subscription } from "rxjs/Rx";

import {Traverse} from "./../../../../services/surveyDb/types";
import {TraverseSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "traverse-select",
        templateUrl: "./Traverse.html",
        styleUrls: ["./Traverse.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: TraverseSelectComponent,
                multi: true,
            }
        ]

    }
)
export class TraverseSelectComponent extends ElementBase<Traverse> implements OnInit, OnDestroy
{
    protected _listTraverse: Traverse[] = [];
    protected _listSubscribe: Subscription;
    protected _initialSelectComplete: boolean;
    @ViewChild(MatSelect) select: MatSelect;
    @ViewChildren(MatOption) options: QueryList<MatOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentTraverse: Traverse;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceTraverse: TraverseSubjectProvider
    )
    {
        super(validators, asyncValidators);
    }

    get Traverse(): Traverse[]
    {
        return this._listTraverse;
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            const summaries = this._serviceTraverse.getTraverseSummaries();
            this._listSubscribe = summaries
                    .takeUntil(summaries.filter(list => this._listTraverse.length > 0))
                    .subscribe
                    (
                        list =>
                        {
                            this._listTraverse = list;
                            console.log("Traverse list is ready...", list.length);
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

    writeValue(value: Traverse): void
    {
        super.writeValue(value);
        console.log("Traverse select model is ready...");
        this.updateSelectedValue();
    }

    private isSelectedOption(item: Traverse): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    private updateSelectedValue(): boolean
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listTraverse
            &&
            this._listTraverse.length
            &&
            this.value
        )
        {
            const currentType = lodash(this._listTraverse).filter(item => this.isSelectedOption(item)).first();
            console.log("Traverse selection is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
            return true;
        }
        return false;
    }

}