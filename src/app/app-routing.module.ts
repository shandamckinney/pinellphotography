import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AdminNewComponent } from './admin/admin-new/admin-new.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent }from './portfolio/portfolio.component';
import { FamilyComponent } from './portfolio/family/family.component';
import { PortraitComponent } from './portfolio/portrait/portrait.component';
import { WeddingComponent } from './portfolio/wedding/wedding.component';
import { EngagementComponent } from './portfolio/engagement/engagement.component';

const routes: Routes = [
  { path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  { path: 'new', 
    component: AdminNewComponent 
  },
  { path: 'edit/:id', 
    component: AdminEditComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'family',
    component: FamilyComponent
  },
  {
    path: 'portrait',
    component: PortraitComponent
  },
  {
    path: 'wedding',
    component: WeddingComponent
  },
  {
    path: 'engagement',
    component: EngagementComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
