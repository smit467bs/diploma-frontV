import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./dashboard/auth-page/auth-page.module').then(m => m.AuthPageModule),
  }, {
    path: 'interview',
    loadChildren: () => import('./dashboard/interview-page/interview-page.module').then(m => m.InterviewPageModule)
  },
  {path: '', redirectTo: '/interview', pathMatch: 'full'}
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
