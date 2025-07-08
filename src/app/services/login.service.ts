import { HttpClient } from "@angular/common/http";
import { Injectable, signal, } from "@angular/core";
import { Router, RouterStateSnapshot } from "@angular/router";
import { Subject } from "rxjs";
import { HelperService } from "./helper.service";
import { TokenService, TokenServiceNames } from "./token.service";
import { TokenData } from "../interfaces/token-data";
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { ExternalAuthDto } from "../interfaces/external-auth-dto";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    httpUrl = 'https://localhost:7073/api/Auth'; // API URL Development
    UNAUTHENTICATED_REDIRECT_URL = '/login';

    private extAuthChangeSub = new Subject<SocialUser>();
    public extAuthChanged = this.extAuthChangeSub.asObservable();

    constructor(private http: HttpClient, private router: Router,
        private helperService: HelperService,
        private tokenService: TokenService,
        private externalAuthService: SocialAuthService) {
        this.externalAuthService.authState.subscribe((user) => {
            console.log(user)
            this.extAuthChangeSub.next(user);
            if (user) {
                const externalAuth: ExternalAuthDto = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    photoUrl: user.photoUrl,
                    provider: user.provider,
                    idToken: user.idToken
                }
                this.validateExternalAuth(externalAuth);
            }
        })
    }

    loginUser(loginData: any): void {
        var loginResult = this.http.post<TokenData>(this.httpUrl + "/Login", loginData);
        loginResult.subscribe({
            next: (data) => {
                console.log("Login successful", data);
                this.helperService.showSuccess("Login successful"); // Show success message
                this.tokenService.setTokenServiceValues(TokenServiceNames.TokenKey, data);
                this.tokenService.setTokenServiceValues(TokenServiceNames.IsLoggedIn, 'true');
                localStorage.setItem('userName', data.name); // Store user name in local storage
                this.router.navigate(['/home']); // Navigate to home page
            },
            error: (error) => {
                this.helperService.showError(error.error); // Show error message
                this.router.navigate(['/login']); // Navigate to login page
            }
        });
    }

    // loginWithGoogle() {
    //     this.externalAuthService.authState.subscribe((user) => {
    //         console.log(user)
    //         this.extAuthChangeSub.next(user);
    //     })
    // }

    // public signInWithGoogle = () => {
    //     debugger;
    //     this.externalAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);

    //     debugger
    //     this.extAuthChanged.subscribe(user => {
    //         const externalAuth: ExternalAuthDto = {
    //             firstName: user.firstName,
    //             lastName: user.lastName,
    //             email: user.email,
    //             photoUrl: user.photoUrl,
    //             provider: user.provider,
    //             idToken: user.idToken
    //         }
    //         this.validateExternalAuth(externalAuth);
    //     })

    // }

    public signOutExternal = () => {
        this.externalAuthService.signOut();
    }


    private validateExternalAuth(externalAuth: ExternalAuthDto) {
        debugger
        this.http.post<TokenData>(this.httpUrl + "/ExternalLogin", externalAuth)
            .subscribe({
                next: (res) => {
                    localStorage.setItem("token", res.token);
                    this.helperService.showSuccess("Login successful"); // Show success message
                    this.tokenService.setTokenServiceValues(TokenServiceNames.TokenKey, res);
                    this.tokenService.setTokenServiceValues(TokenServiceNames.IsLoggedIn, 'true');
                    localStorage.setItem('userName', res.name); // Store user name in local storage
                    this.router.navigate(['/home']);
                },
                error: (err) => {
                    this.helperService.showError(err.error); // Show error message
                    this.router.navigate(['/login']); // Navigate to login page
                }
            });
    }

    canActivate(): boolean {
        debugger
        if (this.tokenService.getIsLoggedIn() === 'true' && this.tokenService.getToken() !== null) {
            return true;
        }
        this.router.navigate([this.UNAUTHENTICATED_REDIRECT_URL]);
        return false;
    }

}