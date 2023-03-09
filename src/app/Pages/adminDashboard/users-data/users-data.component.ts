import { AfterViewInit,Component, ViewChild,OnInit} from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';
import { UserDialogAcademicDetailsComponent } from '../user-dialog-academic-details/user-dialog-academic-details.component';


@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit{
  
  
  
 constructor(private userService:UserService,private dialog:MatDialog){}

  displayedColumns: string[] = ['id', 'username', 'name','email',
  'phone','address','enabled','authorities','academic','action'];
  users:any;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.userService.getAllUsersAdmin().subscribe((data:any) => {
      this.users=data
      console.log(this.users[1].academicDetail)
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    },(error) => {
      console.log(error)
      Swal.fire("Error","Failed to load registered users !!",'error')
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    user:any;
  openDialog(id:any) {
    console.log(id)
    this.user =this.users.filter((u:any) => 
      u.id == id)
    
    const dialogRef = this.dialog.open(UserDialogAcademicDetailsComponent,{
      data:this.user[0]
    });

  }

  setUserActive(active:boolean,userid:number){
    console.log(userid)
    this.userService.toggleActiveUser(active,userid).subscribe((data) => {
      active==true?Swal.fire("Success",`User Disabled successfully !!`,'success') :Swal.fire("Success",`User Enabled successfully !!`,'success');
    window.location.reload();
    },(error) => {Swal.fire("Error","Unable to update data !!",'error')})
  }
}
