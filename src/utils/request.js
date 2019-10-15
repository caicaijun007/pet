import axios from 'axios'
import Qs from 'qs'
import { MessageBox } from 'mint-ui'

export default {
    axios(options) {
        let config = {
            url: options.url,
            baseURL: 'http://localhost/lovely_pets/api/',
            method: options.method ? options.method : 'get',
            transformRequest: [function (data) {
                // 对 data 进行任意转换处理
                return Qs.stringify(data)
            }],
            params: options.method ? '' : ((options.data && options.data.params) || ''),
            data: options.method && ((options.data && options.data.params) || ''),
            timeout: 3000
        }

        return new Promise((resolve, reject) => {
            axios(config).then(response => {
                let res = response.data;
                if (response.status === 200) {
                    if (res.code === 0) {
                        resolve(res)
                    } else {
                        MessageBox('请求提示', res.message)
                    }
                } else {
                    reject(res)
                }
            })
        })
    }
}