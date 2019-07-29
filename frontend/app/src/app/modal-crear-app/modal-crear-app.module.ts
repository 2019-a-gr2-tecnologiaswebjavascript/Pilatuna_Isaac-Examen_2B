import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalCrearAPPPage } from './modal-crear-app.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearAPPPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalCrearAPPPage]
})
export class ModalCrearAPPPageModule {}
