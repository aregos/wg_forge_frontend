// this is an example of improting data from JSON
import orders from '../data/orders.json';
import {formatCardNumber, formatDate} from "./utils";

const createTable = () => {
    return `
    <table>
    <thead>
        <tr>
            <th>Transaction ID</th>
            <th>User Info</th>
            <th>Order Date</th>
            <th>Order Amount</th>
            <th>Card Number</th>
            <th>Card Type</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
    ${orders
      .map((order) => `
        <tr id=${`order_${order.id}`}>
            <td>${order.transaction_id}</td>
            <td class="user_data">${order.user_id}</td>
            <td>${formatDate(order.created_at)}</td>
            <td>\$${order.total}</td>
            <td>${formatCardNumber(order.card_number)}</td>
            <td>${order.card_type}</td>
            <td>${order.order_country} (${order.order_ip})</td>
        </tr>`)
      .join('\n')}
    </tbody>
</table>`
};

function startApp() {
    // YOUR CODE GOES HERE
    const table = createTable();
    // next line is for example only
    document.getElementById("app").innerHTML = table;
};

export default startApp();
