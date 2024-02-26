  
import {isValidUsername } from "6pp"

  export const Usernamevalidator = (username) => {
    if(!isValidUsername (username))
    return{
        isValid: false,
    errorMessage: "Username is invalid"
      }
  }