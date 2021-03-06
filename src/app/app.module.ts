import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NewsComponent } from './pages/news/news.component'
import { ToolbarComponent } from './shared/header/toolbar/toolbar.component'
import { NewsSinSesionComponent } from './pages/news-sin-sesion/news-sin-sesion.component'
import { LoginComponent } from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component'
import { ForgetComponent } from './auth/forget/forget.component'
import { ResetComponent } from './auth/reset/reset.component'
import { BUCKET } from '@angular/fire/storage'
import { AngularFireModule } from 'angularfire2'
import { environment } from 'src/environments/environment'
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestore } from 'angularfire2/firestore'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ToolbarComponent,
    NewsSinSesionComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [AngularFirestore, AngularFireAuth,
    { provide: BUCKET, useValue: 'gs://et-victorriverabm.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
