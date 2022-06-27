import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './layout/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShellComponent } from './layout/shell/shell.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 

const modules = [
  CommonModule,
  MatToolbarModule,
  LayoutModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule
];
const components = [HeaderComponent, ShellComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, components],
})
export class SharedModule {}
