export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    console.log(currentUser);
    fetch('https://genius-car-server-delta-ten.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('genius-token', data.token);
        })
}