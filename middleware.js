export {default} from "next-auth/middleware"
export const config = {
    matcher:["/home","/explore","/notifications","/settings","/settings/account"],
}