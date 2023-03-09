import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AddCategoryComponent } from './Pages/adminDashboard/add-category/add-category.component';
import { AddQuestionComponent } from './Pages/adminDashboard/add-question/add-question.component';
import { AddQuizComponent } from './Pages/adminDashboard/add-quiz/add-quiz.component';
import { AdmindashboardComponent } from './Pages/adminDashboard/admindashboard/admindashboard.component';
import { EditAdminProfileComponent } from './Pages/adminDashboard/edit-admin-profile/edit-admin-profile.component';
import { ProfiledetailsadminComponent } from './Pages/adminDashboard/profiledetailsadmin/profiledetailsadmin.component';
import { UpdateQuizQuestionComponent } from './Pages/adminDashboard/update-quiz-question/update-quiz-question.component';
import { UpdateQuizComponent } from './Pages/adminDashboard/update-quiz/update-quiz.component';
import { UsersDataComponent } from './Pages/adminDashboard/users-data/users-data.component';
import { ViewCategoryComponent } from './Pages/adminDashboard/view-category/view-category.component';
import { ViewQuizQuestionComponent } from './Pages/adminDashboard/view-quiz-question/view-quiz-question.component';
import { ViewQuizesComponent } from './Pages/adminDashboard/view-quizes/view-quizes.component';
import { WelcomeAdminComponent } from './Pages/adminDashboard/welcome-admin/welcome-admin.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { AcademicDetailsComponent } from './Pages/userDashboard/academic-details/academic-details.component';
import { AccountPersonalDataeditComponent } from './Pages/userDashboard/account-personal-dataedit/account-personal-dataedit.component';
import { EditProfileUserComponent } from './Pages/userDashboard/edit-profile-user/edit-profile-user.component';
import { ExamStartComponent } from './Pages/userDashboard/exam-start/exam-start.component';
import { LoadCategoryComponent } from './Pages/userDashboard/load-category/load-category.component';
import { LoadQuizComponent } from './Pages/userDashboard/load-quiz/load-quiz.component';
import { PreQuizComponent } from './Pages/userDashboard/pre-quiz/pre-quiz.component';
import { UserProfileComponent } from './Pages/userDashboard/user-profile/user-profile.component';
import { UserdashboardComponent } from './Pages/userDashboard/userdashboard/userdashboard.component';
import { UserwelcomeComponent } from './Pages/userDashboard/userwelcome/userwelcome.component';
import { ViewResultComponent } from './Pages/userDashboard/view-result/view-result.component';
import { AdminguardGuard } from './Services/gaurds/adminguard.guard';
import { UserguardGuard } from './Services/gaurds/userguard.guard';

const routes: Routes = [
  {
    path:'',component:HomeComponent,pathMatch:'full'
  },
  {
    path:'signup',component:SignupComponent,pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent,pathMatch:'full'
  },
  {
    path:'admin',component:AdmindashboardComponent,canActivate:[AdminguardGuard],
    children:[
      {
        path:'',
        component:WelcomeAdminComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
        children:[
          {
            path:'edit',
            component:EditAdminProfileComponent
          },
          {
            path:'',
            component:ProfiledetailsadminComponent
          }
        ]
      },
      {
        path:'categories',
        component:ViewCategoryComponent
      },
      {
        path:'users-data',
        component:UsersDataComponent
      },
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'quizes',
        component:ViewQuizesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent
      },
      {
        path:'view-questions/:id/:title',
        component:ViewQuizQuestionComponent
      },
      {
        path:'add-question/:qid',
        component:AddQuestionComponent
      },
      {
        path:'update-question/:qid',
        component:UpdateQuizQuestionComponent
      }
    ]
  },
  {
    path:'user',
    component:UserdashboardComponent,
    canActivate:[UserguardGuard],
    children:[
      {
        path:'',
        component:UserwelcomeComponent
      },
      {
        path:'quizes/:cid',
        component:LoadQuizComponent
      },
      {
        path:'quizes/results/:qid/:userid',
        component:ViewResultComponent
      },
      {
        path:'quizes/instructions/:qid',
        component:PreQuizComponent
      },
      {
        path:'profile',
        component:UserProfileComponent,
        children:[
          {
            path:'edit',
            component:EditProfileUserComponent
          },
          {
            path:'academicData/create',
            component:AcademicDetailsComponent
          },
          {
            path:'account/edit',
            component:AccountPersonalDataeditComponent
          },
          {
            path:'',
            component:ProfiledetailsadminComponent
          }
        ]
      },
      
    ]
  },
  {
    path:'quiz/start/:qid',
    component:ExamStartComponent,
    canActivate:[UserguardGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
