// for HH:MM:SS
const pad = (input) => input < 10 ? "0" + input : input;

// should return date in format DD/MM/YYYY hh:mm:ss
export const formatDate = (dateStr) => {
    //Mon Jan 19 1970 00:42:05 GMT+0400 (GMT+04:00)
    const date = new Date(Number(dateStr) * 1000)

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getUTCFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

//Номер карты необходимо экранировать так, чтобы на странице отображались только первые две и последние четыре цифры номера. Номер заказа и тип карты выводим как есть.
// return 41**********0531
export const formatCardNumber = (cardNumber) => {
    const formattedNumber = cardNumber.slice(0, 2) + '**********' + cardNumber.slice(-4);
    return formattedNumber;
}

export const getUserInfo = (user) => {
    return `${user.gender === 'Male' ? 'Mr.' : 'Ms.'} ${user.first_name} ${user.last_name}`;
}
