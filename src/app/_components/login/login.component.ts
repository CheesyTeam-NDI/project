import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $('#next').on('click', function() {
      $('.form__side--1').fadeOut(250, function() {
        $('.form__side--2').fadeIn(250);
      });
    });
    $('#previous').on('click', function() {
      $('.form__side--2').fadeOut(250, function() {
        $('.form__side--1').fadeIn(250);
      });
    });
  }

  checkLogin() {
    const email = $('#inputLoginEmail').is(':valid');
    const password = $('#inputLoginPassword').is(':valid');
    const submit = $('#submitLogin');
    if (email && password) {
      submit.removeAttr('disabled');
    } else {
      submit.attr('disabled', 'true');
    }
  }

  checkSignup() {
    const name = $('#inputFirstName').is(':valid');
    const surname = $('#inputLastName').is(':valid');
    const birthday = $('#inputBirthday');
    const gender = $('#selectGender').is(':valid');
    const continuebutton = $('#next');
    const email = $('#inputSignupEmail').is(':valid');
    const password = $('#inputSignupPassword');
    const confirmpassword = $('#inputSignupPasswordConfirm');
    const submit = $('#submit');
    const d = new Date();
    d.setFullYear(d.getFullYear() - 18);
    if (new Date(birthday.val().toString()) >= d) {
      birthday.addClass('not-valid');
    } else {
      birthday.removeClass('not-valid');
    }
    const firstpage = name && surname && birthday.is(':valid') &&
      !birthday.hasClass('not-valid') && gender;
    if (password.val() !== confirmpassword.val()) {
      confirmpassword.addClass('not-valid');
    } else {
      confirmpassword.removeClass('not-valid');
    }
    const secondpage = email && password.is(':valid') &&
      !confirmpassword.hasClass('not-valid');
    if (firstpage) {
      continuebutton.removeAttr('disabled');
    } else {
      continuebutton.attr('disabled', 'true');
    }
    if (firstpage && secondpage) {
      submit.removeAttr('disabled');
    } else {
      submit.attr('disabled', 'true');
    }
  }
}
