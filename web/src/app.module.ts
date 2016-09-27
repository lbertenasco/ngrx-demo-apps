import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



//import { MATERIAL_IMPORTS } from './material';
//import { ComponentsModule } from './components';

import { CounterEffects } from './effects/counter';
//import { CounterEffects } from 'ngrx-demo-core';

import { AppComponent } from './containers/app';
import { CounterPageComponent } from './containers/counter-page';
//import { NotFoundPageComponent } from './containers/not-found-page';

//import { GoogleBooksService } from './services/google-books';

import { routes } from './routes';
import { reducer } from './reducers';
//import { schema } from './db';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,

    //MATERIAL_IMPORTS,
    //ComponentsModule,

    /**
     * provideRouter sets up all of the providers for @angular/router. It accepts
     * an array of routes and a location strategy. By default, it will use
     * `PathLocationStrategy`.
     */
    RouterModule.forRoot(routes, { useHash: true }),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     *
     * Source: https://github.com/ngrx/store/blob/master/src/ng2.ts#L43-L69
     */
    StoreModule.provideStore(reducer),

    RouterStoreModule.connectRouter(),

    /**
     * instrumentStore() sets up the @ngrx/store-devtools providers
     */
    // StoreDevtoolsModule.instrumentStore({
    //   maxAge: 5,
    //   monitor: useLogMonitor({
    //     position: 'right',
    //     visible: true
    //   })
    // }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * runEffects configures all providers for @ngrx/effects. Observables decorated
     * as an @Effect() within the supplied services will ultimately be merged,
     * with output of relevant (registered as effects) actions being
     * dispatched into your application store. Any side-effects in
     * your application should be registered as effects.
     *
     * Source: https://github.com/ngrx/effects/blob/master/lib/run-effects.ts#L8-L20
     */
    EffectsModule.run(CounterEffects),

    /**
     * provideDB sets up @ngrx/db with the provided schema and makes the Database
     * service everywhere.
     */
    //DBModule.provideDB(schema),
  ],
  declarations: [
    AppComponent,
    CounterPageComponent,
    //NotFoundPageComponent
  ],
  providers: [
    //GoogleBooksService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
