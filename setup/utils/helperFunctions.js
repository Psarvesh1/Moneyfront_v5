import FlashMessage, { showMessage } from "react-native-flash-message";


const showError = (message) => {
    showMessage({
        type: 'danger',
        icon:"danger",
        message,
        
    })
}
export default showError
