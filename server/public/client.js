console.log('JS');
$(document).ready(connect);

function connect() {
    console.log('JQ');
    renderTaskList();
    $('#submit').on('click', addToList);
    $('#list').on('click', '.complete', completeTask);
    $('#list').on('click', '.delete', deleteTask);
    setTimeout(restart, 100000);
    $('#refreshButton').on('click', reload);
}

function reload() {
    location.reload()
}


function renderTaskList() {
    $('#list').empty();

    $('#task').val('');

    $.ajax({
            type: 'GET',
            url: '/to_do',
        })
        .then(response => {
            console.log('Looking for to do list', response);

            for (let i of response) {
                let completeButton = `<button class="complete" data-id=${i.id}>complete</button>`;

                if (i.complete === true) {
                    //$(this) // update completed tasks with green css
                    $('#list').append(`
            <tr class='green'>
            <td>${i.task}</td>
            <td><span></span></td>
            <td><button class = "delete" data-id=${i.id}>DELETE</button></td>
        </tr>
            `);
                } else
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
    console.log('Making more work');

    if ($('#task').val() === "") {
        alert('Please enter in a task')
    } else {
        $.ajax({
                type: 'POST',
                url: '/to_do',
                data: {
                    task: $('#task').val(),
                    complete: false
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
}

function completeTask() {
    console.log('YOU DID IT!!!');

    let taskId = $(this).data('id');
    // update complete from false to true in the DB
    $.ajax({
            method: 'PUT',
            url: `/to_do/${taskId}`,
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
    console.log('Get out of here!!!');
    let taskId = $(this).data('id');

    $.ajax({
            method: 'DELETE',
            url: `/to_do/${taskId}`
        })
        .then((response) => {
            console.log('Bye task');
            renderTaskList();
        })
        .catch((err) => {
            console.log('you can not DELETE this! DO YOUR CHORES!!!!');
        });
}






function restart() {
    console.log('trying to restart');
    let re = $('#refresh'),
        reClone = re.clone(true);

    re.before(reClone);

    $('.' + re.attr('class') + ':last').remove();
    setTimeout(restart, 100000);

}