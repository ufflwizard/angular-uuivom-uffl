import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { AflService } from "./afl.service";
import { AflTokenComponent } from "./afl-token/afl-token.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AflCompetitionComponent } from "./afl-competition/afl-competition.component";
import { AflClubComponent } from "./afl-club/afl-club.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "clubs", component: AflClubComponent },
      { path: "competition", component: AflCompetitionComponent },
      // 404 needs to be last or it'll override other paths
      { path: "**", component: PageNotFoundComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    AflTokenComponent,
    PageNotFoundComponent,
    AflCompetitionComponent,
    AflClubComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService, AflService]
})
export class AppModule {}
