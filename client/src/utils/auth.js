// linking middleware. 
import decode from 'jwt-decode';
// declaring new class. 
class AuthService {
    // finding user profile
    getProfile() {
        return decode(this.getToken());
      }
    // verifying current session
    loggedIn(){
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }
    // verifying token is still valid. 
    isTokenExpired(token){
        try{
            const decoded = decode(token);
            if(decoded.exp < Date.now()/1000){
                return true;
            }
            else {
                return false;
            }
        }
        catch(err) {
            return false;
        }
    }
    // retreiving token. 
    getToken(){
        return localStorage.getItem('id_token');
    }
    // linking token to user. 
    login(idToken){
        localStorage.setItem('id_token', idToken);
        window.location.assign('/dashboard');
    }
    // decoupling token from user. 
    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
    // adding set to matching user. 
    addSet(setName) {
        localStorage.setItem('setName', setName)
    }
}
// making middle ware visable to entire app. 
export default new AuthService();