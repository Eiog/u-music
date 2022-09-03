import http from "@@/axios";
const getPhoneCode = (phone: string) => {
    return new Promise((resolve, reject) => {
        http.get('/captcha/sent', { phone: phone }).then((res: any) => {
            if (res.code === 200) return resolve(res.data)
            return reject(false)
        }).catch(err => reject(err))
    })
}
const verifyPhoneCode = (phone: string, captcha: string) => {
    return new Promise((resolve, reject) => {
        http.get('/captcha/verify', { phone, captcha }).then((res: any) => {
            console.log(res);

            if (res.code === 200) return resolve(res.data)
            return reject(false)
        }).catch(err => reject(err))
    })
}
export const loginApi = {
    getPhoneCode,
    verifyPhoneCode
}