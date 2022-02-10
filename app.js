document.querySelector('#push').addEventListener('click', () => {
    change();
})

document.querySelector('#newtask input').addEventListener('keypress', (event) => {
    if (event.key == 'Enter')
        document.querySelector('#push').click();
})

const change = function () {
    if (document.querySelector('#newtask input').value.length == 0) {

    }
    else {
        document.querySelector('#tasks').innerHTML +=
            `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span> 
                <button class="delete">
                delete
                </button>
            </div > 
            `;

        let currentTasks = document.querySelectorAll('.delete');
        for (let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].addEventListener('click', function () {
                this.parentNode.remove();
            })
        }
        let tasks = document.querySelectorAll('.task span');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].addEventListener('click', function () {
                this.classList.toggle('completed');
            })
        }
    }
    document.querySelector('#newtask input').value = "";
}