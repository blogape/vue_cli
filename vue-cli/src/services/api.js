import request from '../utils/request.js';

export function login(){
    return request({
        url:'http://192.168.124.13:3000/users',
        method:'get'
    })
}