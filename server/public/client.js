console.log('JS');
$(document).ready(connect);

function connect() {
    console.log('JQ');
    renderTaskList()
}

function renderTaskList() {
    $('#list').empty();

    $.ajax({
            type: 'GET',
            url: '/',
        })
        .then(response => {
            console.log('Looking for to do list', response);

            for (let i of response) {
                let completeButton = `<button class="complete-button" data-id=${i.id}>complete</button>`;

                if (i.complete === true) {
                    completeButton = ""
                }
                $('#list').append(`
            <tr>
            <td>${i.task}</td>
            <td>${completeButton}</td>
            <td><button class = "delete" data-id=${i.id}>DELETE</button></td>
        </tr>
            `);
            }
        });
};