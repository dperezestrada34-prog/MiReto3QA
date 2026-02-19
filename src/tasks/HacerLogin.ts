import { LoginPage } from '../ui/LoginPage';

export class HacerLogin {
    static conCredenciales(usuario: string, clave: string) {
        return async (page: any) => {
            await page.fill(LoginPage.userInput, usuario);
            await page.fill(LoginPage.passInput, clave);
            await page.click(LoginPage.loginButton);
        };
    }
}