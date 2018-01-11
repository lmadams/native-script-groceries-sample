import {NgModule} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppComponent} from "./app.component";
import {NativeScriptFormsModule, NativeScriptHttpModule, NativeScriptRouterModule} from "nativescript-angular";
import {navigatableComponents, routes} from "./app.routing";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
