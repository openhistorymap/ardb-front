import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArdbResearchComponent } from './ardb-research/ardb-research.component';
import { ArdbResearcherComponent } from './ardb-researcher/ardb-researcher.component';
import { ArdbSiteComponent } from './ardb-site/ardb-site.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArdbResearchComponent, ArdbResearcherComponent, ArdbSiteComponent]
})
export class ArdbModule { }
