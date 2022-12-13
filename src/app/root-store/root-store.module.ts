import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ScoutStoreModule } from './scout-store/scout-store.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
    imports: [
        CommonModule,
        ScoutStoreModule,
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false
            }
        }),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25 })
    ],
    declarations: [],
    providers: []
})
export class RootStoreModule { }
