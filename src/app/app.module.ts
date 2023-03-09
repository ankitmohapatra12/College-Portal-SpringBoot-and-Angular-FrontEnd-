import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { LoginComponent } from './Pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './Pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './Components/sidenav/sidenav.component'
import { authInterceptorProviders } from './Services/auth.interceptor';
import { AdmindashboardComponent } from './Pages/adminDashboard/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './Pages/userDashboard/userdashboard/userdashboard.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MatCardModule} from '@angular/material/card';
import { AdminSideBarComponent } from './Pages/adminDashboard/admin-side-bar/admin-side-bar.component';
import { WelcomeAdminComponent } from './Pages/adminDashboard/welcome-admin/welcome-admin.component';
import { EditAdminProfileComponent } from './Pages/adminDashboard/edit-admin-profile/edit-admin-profile.component';
import { ProfiledetailsadminComponent } from './Pages/adminDashboard/profiledetailsadmin/profiledetailsadmin.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddCategoryComponent } from './Pages/adminDashboard/add-category/add-category.component';
import { ViewCategoryComponent } from './Pages/adminDashboard/view-category/view-category.component';
import { ViewQuizesComponent } from './Pages/adminDashboard/view-quizes/view-quizes.component';
import { AddQuizComponent } from './Pages/adminDashboard/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './Pages/adminDashboard/update-quiz/update-quiz.component';
import { ViewQuizQuestionComponent } from './Pages/adminDashboard/view-quiz-question/view-quiz-question.component';
import { AddQuestionComponent } from './Pages/adminDashboard/add-question/add-question.component';
import { UpdateQuizQuestionComponent } from './Pages/adminDashboard/update-quiz-question/update-quiz-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSideBarComponent } from './Pages/userDashboard/user-side-bar/user-side-bar.component';
import { LoadQuizComponent } from './Pages/userDashboard/load-quiz/load-quiz.component';
import { UserwelcomeComponent } from './Pages/userDashboard/userwelcome/userwelcome.component';
import { LoadCategoryComponent } from './Pages/userDashboard/load-category/load-category.component';
import { PreQuizComponent } from './Pages/userDashboard/pre-quiz/pre-quiz.component';
import { ExamStartComponent } from './Pages/userDashboard/exam-start/exam-start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { ViewResultComponent } from './Pages/userDashboard/view-result/view-result.component';
import { UserProfileComponent } from './Pages/userDashboard/user-profile/user-profile.component';
import { EditProfileUserComponent } from './Pages/userDashboard/edit-profile-user/edit-profile-user.component';
import { ProfileDetailsUserComponent } from './Pages/userDashboard/profile-details-user/profile-details-user.component';
import { AcademicDetailsComponent } from './Pages/userDashboard/academic-details/academic-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AccountPersonalDataeditComponent } from './Pages/userDashboard/account-personal-dataedit/account-personal-dataedit.component';
import { UsersDataComponent } from './Pages/adminDashboard/users-data/users-data.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserDialogAcademicDetailsComponent } from './Pages/adminDashboard/user-dialog-academic-details/user-dialog-academic-details.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    ProfileComponent,
    AdminSideBarComponent,
    WelcomeAdminComponent,
    EditAdminProfileComponent,
    ProfiledetailsadminComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ViewQuizesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionComponent,
    AddQuestionComponent,
    UpdateQuizQuestionComponent,
    UserSideBarComponent,
    LoadQuizComponent,
    UserwelcomeComponent,
    LoadCategoryComponent,
    PreQuizComponent,
    ExamStartComponent,
    ViewResultComponent,
    UserProfileComponent,
    EditProfileUserComponent,
    ProfileDetailsUserComponent,
    AcademicDetailsComponent,
    AccountPersonalDataeditComponent,
    UsersDataComponent,
    UserDialogAcademicDetailsComponent,
    

    
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
