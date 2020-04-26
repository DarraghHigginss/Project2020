import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },//path to login
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)//path to home
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)//path for forgot
  },
  {
    path: 'weatherinfo',
    loadChildren: () => import('./weatherinfo/weatherinfo.module').then( m => m.WeatherinfoPageModule)//path to weatherinfo 
  },
  {
    path: 'west',
    loadChildren: () => import('./west/west.module').then( m => m.WestPageModule)//path to west page
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
