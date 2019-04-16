import { SurveyListComponent } from './list/survey-list';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SurveyListComponent,
    data: {
      meta: {
        title: 'survey',
        description: 'survey',
        override: true,
      },
    },
  },
];

export const SurveyRoutes = RouterModule.forChild(routes);
