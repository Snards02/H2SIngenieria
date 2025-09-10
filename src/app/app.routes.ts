import { Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { LandingComponentAdmin } from './modules/admin/landing/landing.component';
import { LandingComponent } from './modules/landing/landing.component';
import { ProyectosComponentAdmin } from './modules/admin/proyectos/proyectos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent},
    { path: 'Admin', component: AdminComponent },
    { path: 'landing', component: LandingComponentAdmin, children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'proyectos', component: ProyectosComponentAdmin },
        { path: '**', redirectTo: 'dashboard' }

    ]},
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'proyectos', component: ProyectosComponent },
    
    { path: '**', redirectTo: 'home' }
    
];
