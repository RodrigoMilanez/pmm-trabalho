import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'q1',
    loadChildren: () => import('./q1/q1.module').then( m => m.Q1PageModule)
  },
  {
    path: 'q2',
    loadChildren: () => import('./q2/q2.module').then( m => m.Q2PageModule)
  },
  {
    path: 'q3',
    loadChildren: () => import('./q3/q3.module').then( m => m.Q3PageModule)
  },
  {
    path: 'q4',
    loadChildren: () => import('./q4/q4.module').then( m => m.Q4PageModule)
  },
  {
    path: 'q5',
    loadChildren: () => import('./q5/q5.module').then( m => m.Q5PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
