import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyComponent } from './family/family.component';
import { PortraitComponent } from './portrait/portrait.component';
import { EngagementComponent } from './engagement/engagement.component';
import { WeddingComponent } from './wedding/wedding.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [FamilyComponent, PortraitComponent, EngagementComponent, WeddingComponent],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class PortfolioModule { }
