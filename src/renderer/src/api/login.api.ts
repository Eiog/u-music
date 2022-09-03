import http from "@@/axios";
const getPhoneCode = (phone: string) => {
    return new Promise((resolve, reject) => {
        http.get('/captcha/sent', { phone: phone }).then(res => {
            if (res.code === 200) return resolve(res.data)
            return reject(false)
        }).catch(err => reject(err))
    })
}
const phoneCodeLogin = () => {

}
export const loginApi = {
    getPhoneCode
}