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
                    $(this) // update completed tasks with green css
                    completeButton = "";
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

function addToList() {
    $.ajax({
            type: 'POST',
            url: '/',
            data: {
                task: $('#task').val(),
                complete: 'false'
            }
        })
        .then((response) => {
            console.log('Adding more shit to do');
            renderTaskList()
        })
        .catch((err) => {
            console.log('Can not add to shit list', err);
        });
}

function completeTask() {
    let taskId = $(this).data('id');
    // update complete from false to true in the DB
    $.ajax({
            method: 'PUT',
            url: `/todo/${taskId}`
        })
        .then((response) => {
            console.log('Task COMPLETED!!!');
            renderTaskList()
        })
        .catch((err) => {
            console.log('Issue PUTing complete to DB', err);
        });
}

function deleteTask() {
    let taskId = $(this).data('id');

}