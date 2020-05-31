var t = 0
export const setNotification = (notif, n) => {
    return async dispatch => {
        dispatch({ type: 'SHOW_NOTIFICATION', text: notif })
          t = setTimeout(() => {
            dispatch({ type: 'HIDE_NOTIFICATION' })
        }, n * 1000)
        

    }
}

const notificationReducer = (state = ' ', action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            clearTimeout(t)
            return `${action.text}`
        case 'HIDENOTIFICATION':
            return ' '
        default:
            return ' '
    }
}

export default notificationReducer