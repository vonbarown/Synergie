import uuidv4 from 'uuid/v4'

export const createMessage = ({ user_id = '', message = '' }) => {
    return {
        id: uuidv4(),
        user_id,
        message,
        time_stamp: new Date().toLocaleString(),
    };

}

export const createChat = ({ messages = [], name = 'community', users = [] } = {}) => (
    {
        id: uuidv4(),
        name,
        messages,
        users,
        typingUsers: []
    }
)


// const getTime = (date) => `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`

