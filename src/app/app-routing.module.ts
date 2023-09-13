import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PreloadSelectedModulesList } from './preloading-Strategy/opt-in-preloading-strategy';
import { NetworkAwarePreloadStrategy } from './preloading-Strategy/network-gware-preloading-strategy';
import { OnDemandRealoadingStrategy } from './preloading-Strategy/on-demand-preloading-strategies';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/pages/login/login.module').then(m => m.LoginModule),
    data: {
      preload: true
    }

  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/pages/profile/profile.module').then(m => m.ProfileModule),
    data: {
      preload: true
    }
  },
  {
    path: '**',
    loadChildren: () => import('./modules/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // *1 Precarga todos los modulos de la ruta
      //preloadingStrategy: PreloadAllModules
      // *2 Precarga solo los modulos indicados de forma perezosa
      //preloadingStrategy: NoPreloading
      // *3 Estrategia personalizada de precarga
      // preloadingStrategy: PreloadSelectedModulesList
      // *4 Estrategia personalizada: Precarga por conexion
      //preloadingStrategy: NetworkAwarePreloadStrategy
      // *5 Estrategia personalizada por evento controlada por evento de servicio
      preloadingStrategy: OnDemandRealoadingStrategy

    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
