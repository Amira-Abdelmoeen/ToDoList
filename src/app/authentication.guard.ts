import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const authenticationGuard: CanActivateFn = (route, state) => {

  let router : Router =  inject(Router);
  

  if(localStorage.getItem("currentUser") == null ) 
  {
    
    router.navigate(['/login'])
    return false;
  }
  else
  {
   

    return true;
  }
  

};
