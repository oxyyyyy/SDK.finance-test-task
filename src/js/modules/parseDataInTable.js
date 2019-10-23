export function parseDataInTable(data) {
  const CONTAINER = document.getElementById('response-container');
  data.map((item) => {
    const HTML = `
      <tr>
        <td>${(item.name ? item.name : '—')}</td>
        <td>${(item.contact.email ? item.contact.email : '—')}</td>
        <td>${(item.contact.phoneNumber ? item.contact.phoneNumber : '—')}</td>
        <td>${(item.contact.createdAt ? item.contact.createdAt : '—')}</td>
        <td>${(item.banExpiryDate ? item.banExpiryDate : '—')}</td>
        <td class="${(item.active ? 'uk-text-success' : 'uk-text-danger')}">${(item.active ? 'Active' : 'Not active')}</td>
      </tr>
    `;
    CONTAINER.insertAdjacentHTML('beforeend', HTML);
  });
}
