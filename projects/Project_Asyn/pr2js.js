const inserts = document.getElementsByClassName('insert');

window.addEventListener('keydown', (e) => {
    for (const insert of inserts) {
        insert.innerHTML = `
        <div class="key">
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
        `;
    }
    // console.log(`${e.key} pressed`);
});

