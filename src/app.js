// this is an example of improting data from JSON
import orders from '../data/orders.json';
import users from '../data/users.json';
import companies from '../data/companies.json';
import {formatCardNumber, formatDate, getUserInfo} from "./utils";
import './main.css';

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
      .map((order) => {
          const user = users.find(user => user.id === order.user_id);
          const companyUrl = companies.find(company => company.id === user.company_id)?.url;
          return `
                <tr id=${`order_${order.id}`}>
                    <td>${order.transaction_id}</td>
                    <td class="user-data">
                        <a href="#">${getUserInfo(user)}</a>
                        <div class="user-details">
                            <p>Birthday: ${formatDate(user.birthday, false)}</p>
                            <p><img src=${user.avatar} width="100px"></p>
                            <p>Company: <a href=${companyUrl} target="_blank">Bumbershoot Corp.</a></p>
                            <p>Industry: Apparel / Consumer Services</p>
                        </div>
                    </td>
                    <td>${formatDate(order.created_at)}</td>
                    <td>\$${order.total}</td>
                    <td>${formatCardNumber(order.card_number)}</td>
                    <td>${order.card_type}</td>
                    <td>${order.order_country} (${order.order_ip})</td>
                </tr>`
      })
      .join('\n')}
    </tbody>
</table>`
};

function startApp() {
    // YOUR CODE GOES HERE
    document.getElementById("app").innerHTML = createTable();
    const trs = document.querySelectorAll('tr');
    const trsWithoutFirst = [...trs].slice(1);
    trsWithoutFirst.forEach(tr => {
        const linkInTr = tr.querySelector('a');
        linkInTr.addEventListener('click', () => {
            tr.querySelector('.user-details').classList.toggle('visible');
        })
    })
}

export default startApp();
