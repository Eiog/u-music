import http from "../axios";
export const search = (val: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(val)
        }, 5000);
    })
}
export const vagueSearch = (val: string) => {
    return new Promise((resolve, reject) => {
        http.get('/search/suggest', { keywords: val }).then(res => resolve(res)).catch(err => reject(err))
    })
}
export const hotSearch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('')
        }, 5000);
    })
}