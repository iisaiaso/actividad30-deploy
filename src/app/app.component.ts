import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from './components/message/message.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'actividad30-deploy';
  formRegister!: FormGroup
  dataUSer: any = []

  constructor(private fb: FormBuilder, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{2,50}$')]],
      email: ['', [Validators.required, Validators.email]],
      website: ['', [Validators.required]]
    })

    this.onGetUser()
  }

  onSaveUSer() {
    if (this.formRegister.valid) {
      this.userService.addUser(this.formRegister.value)
      this.dialog.open(MessageComponent)
    } else {
      alert("Tiene que rrellenar todos los campos")
    }
  }

  onGetUser() {
    this.userService.getUser().subscribe(res => {
      this.dataUSer = res
    })
  }
}
