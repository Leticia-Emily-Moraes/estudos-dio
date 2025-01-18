const conta = {
    email: 'Lele@dio.com',
    password: '123456',
    name: 'Leticia'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})