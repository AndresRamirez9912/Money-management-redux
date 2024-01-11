import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authState } from '../../auth/store/auth.state';
import { logOutUser } from '../../auth/store/auth.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private store: Store<authState>) {}

  ngOnInit() {}

  closeSession() {
    let userSession: string = '';
    this.store.select('accessToken').subscribe((session) => {
      userSession = session;
    });
    this.store.dispatch(logOutUser({ token: userSession }));
  }
}
