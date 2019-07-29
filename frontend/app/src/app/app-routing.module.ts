import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'modal-crear-so', loadChildren: './modal-crear-so/modal-crear-so.module#ModalCrearSOPageModule' },
  { path: 'menu-aplicacion', loadChildren: './menu-aplicacion/menu-aplicacion.module#MenuAplicacionPageModule' },
  { path: 'modal-crear-app', loadChildren: './modal-crear-app/modal-crear-app.module#ModalCrearAPPPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
