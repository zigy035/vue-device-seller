import Store from '../store'

export const authHeader = () => {
    const { currentUser } = Store.state;

    return {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + currentUser?.token,
    };
};