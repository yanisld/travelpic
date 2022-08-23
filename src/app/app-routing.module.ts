import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaladeListComponent } from './components/balade-list/balade-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

const routes: Routes = [
  { path: '', component: CategoriesListComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'category/:idCategory/balade', component: BaladeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
