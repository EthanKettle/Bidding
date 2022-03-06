const BIDS_KEY = 'bids';

let bids = retrieve() || [
  {
    amount: 45,
    user: 'bidder1',
  },
];

display();

function display() {
  let bHtml = '';
  bids.forEach((bid) => {
    bHtml += `
        <div>
            <span>${bid.amount}</span>
            <span>${bid.user}</span>
        </div>
        `;
  });
  document.getElementById('bids').innerHTML = bHtml;
}

function addBid(user) {
  let bid = {
    amount: document.querySelector(`#${user}`).value,
    user,
  };
  bids.push(bid);
  document.querySelector(`#${user}`).value = '';
  display();
  save();
}

function save() {
  localStorage.setItem(BIDS_KEY, JSON.stringify(bids));
}

function retrieve() {
  return JSON.parse(localStorage.getItem(BIDS_KEY));
}