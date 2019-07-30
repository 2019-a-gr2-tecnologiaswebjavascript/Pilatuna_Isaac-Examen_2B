import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExisteCajeroService } from './servicios/guards/existe-cajero.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[
     ExisteCajeroService
    ],
  },
  { path: 'modal-crear-so', 
  loadChildren: './modal-crear-so/modal-crear-so.module#ModalCrearSOPageModule',
  canActivate:[
   ExisteCajeroService
  ], },
  { path: 'menu-aplicacion', 
  loadChildren: './menu-aplicacion/menu-aplicacion.module#MenuAplicacionPageModule',
  canActivate:[
   ExisteCajeroService
  ], },
  { path: 'modal-crear-app', 
  loadChildren: './modal-crear-app/modal-crear-app.module#ModalCrearAPPPageModule',
  canActivate:[
   ExisteCajeroService
  ], },
  { path: 'autenticacion',
   loadChildren: './autenticacion/autenticacion.module#AutenticacionPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
