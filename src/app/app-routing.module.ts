import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./dashboard/auth-page/auth-page.module').then(m => m.AuthPageModule),
  }, {
    path: 'interviews',
    loadChildren: () => import('src/app/dashboard/interviews-page/interviews-page.module').then(m => m.InterviewsPageModule)
  }, {
    path: 'groups',
    loadChildren: () => import('./dashboard/groups-page/groups-page.module').then(m => m.GroupsPageModule)
  }, {
    path: 'add-interview',
    loadChildren: () => import('./dashboard/add-interview-page/add-interview-page.module').then(m => m.AddInterviewPageModule)
  },
  {path: '', redirectTo: '/interviews', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
