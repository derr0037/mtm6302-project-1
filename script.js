const data = {
    currentUser: 'currentUser',
    ideas: [
      {
        username: 'amyrobson',
        content:
          'Non dolor veniam nostrud ad. Commodo ex officia reprehenderit eu laborum. Qui reprehenderit reprehenderit incididunt eiusmod voluptate cupidatat cupidatat dolor. Incididunt sint cupidatat dolore cupidatat ut do dolor nostrud ullamco aliqua aliqua excepteur. Fugiat nostrud esse voluptate magna nostrud nostrud sint et. Irure excepteur irure ullamco occaecat dolor deserunt. Cillum fugiat sunt ullamco ad enim ea eiusmod do et dolor adipisicing mollit aliqua mollit.\r\n',
        score: 3,
      },
      {
        username: 'maxblagun',
        content:
          'Cupidatat veniam quis aliquip ut pariatur excepteur ut. Cupidatat reprehenderit nulla laborum dolore nulla voluptate cupidatat in. Sint tempor non duis sit deserunt culpa sunt labore eu sit consectetur. Excepteur reprehenderit et officia incididunt consectetur laborum consequat laboris excepteur ea adipisicing qui.\r\n',
        score: 10,
      },
      {
        username: 'maxblagun',
        content:
          'Proident qui elit in deserunt velit eu veniam. Tempor velit cillum et dolore. Incididunt anim Lorem Lorem dolor voluptate deserunt cillum consequat ut. Ea fugiat culpa ex et pariatur dolor est officia ea dolore ullamco mollit. Cillum minim consequat ipsum deserunt velit mollit ad consectetur irure dolore proident qui.\r\n',
        score: 6,
      },
      {
        username: 'maxblagun',
        content:
          'Officia exercitation cupidatat enim sint ea quis reprehenderit ipsum. Commodo ullamco deserunt reprehenderit qui in anim aliqua officia do in reprehenderit Lorem. Ipsum non aute officia est nisi sunt non. Proident in eiusmod sint aliquip qui officia deserunt eiusmod sit. Mollit voluptate anim cillum cupidatat duis est ad excepteur consequat fugiat cillum velit esse. Quis dolore sit ullamco qui.\r\n',
        score: 8,
      },
      {
        username: 'currentUser',
        content:
          'Incididunt ut ut velit dolor irure Lorem ex nostrud et laborum commodo dolore laborum culpa. Adipisicing ullamco eu id sit velit ut laboris irure esse quis. Mollit minim laborum do exercitation sint magna ea ea eu eu laboris aliquip anim culpa. Consectetur eiusmod esse ipsum incididunt duis ea nisi qui duis pariatur.\r\n',
        score: 3,
      },
      {
        username: 'currentUser',
        content:
          'Id aute eu quis tempor laborum duis nostrud proident nostrud culpa est ad. Do dolor cillum ullamco excepteur eiusmod laboris dolore do Lorem. Exercitation eiusmod laborum enim culpa esse.\r\n',
        score: 1,
      },
      {
        username: 'amyrobson',
        content:
          'In magna cupidatat ipsum exercitation incididunt non eu amet occaecat et sint irure consequat. Sunt labore incididunt ut culpa aliquip excepteur est. Enim Lorem dolor adipisicing veniam proident quis ad laborum in commodo qui. Proident elit ullamco aliqua non excepteur in fugiat consequat adipisicing ut eu id sunt laboris.\r\n',
        score: 7,
      },
    ],
}

const $display = document.getElementById('library')
const $newBtn = document.getElementById('add-post')
const $newPost = document.getElementById('new-post')
const $editPost = document.getElementById('edit-post')

function listIdeas () {

    const library = []

    for (let i = 0; i < data.ideas.length; i++) {
        if (data.ideas[i].username == 'currentUser') {
            library.push(
                `<div class="card mb-3">
                    <div class="card-header">
                    ${data.ideas[i].username}:
                    <div class="row">
                        You
                        <a class="btn btn-secondary edit" data-index="${i}">Edit</a>
                        <a class="btn btn-secondary delete" data-index="${i}">Delete</a>
                    </div>
                    </div>
                    <div class="card-body new-edit">
                    <p class="card-text">${data.ideas[i].content}</p>
                    </div>
                    <div class="card-footer grid">
                        <a class="btn btn-secondary upvote" data-index="${i}">+</a>
                        <small>${data.ideas[i].score}</small>
                        <a class="btn btn-secondary downvote" data-index="${i}">-</a>
                    </div>
                </div>`
            )
        } else {
            library.push(
                `<div class="card mb-3">
                    <div class="card-header">
                    ${data.ideas[i].username}
                    </div>
                    <div class="card-body">
                    <p class="card-text">${data.ideas[i].content}</p>
                    </div>
                    <div class="card-footer grid">
                        <a class="btn btn-secondary upvote" data-index="${i}">+</a>
                        <small>${data.ideas[i].score}</small>
                        <a class="btn btn-secondary downvote" data-index="${i}">-</a>
                    </div>
                </div>`
            )
        }
  }

  $display.innerHTML = library.join('')
}

listIdeas()

$display.addEventListener('click', function (e) {

    if (e.target.classList.contains('upvote')) {
        const index = e.target.dataset.index
        const idea = data.ideas[index]
        idea.score++
    } else if (e.target.classList.contains('downvote')) {
        const index = e.target.dataset.index
        const idea = data.ideas[index]
        idea.score--
    } else if (e.target.classList.contains('edit')) {
        const index = e.target.dataset.index
        editPost(index)
    } else if (e.target.classList.contains('delete')) {
        const index = e.target.dataset.index
        deletePost(index)
    }

    listIdeas()
}) 

$newBtn.addEventListener('click', function (e) {

    const addNew = []

    addNew.push(
        `<div class="card mb-3 newPost">
            <div class="card-header">
                ${data.currentUser}
            </div>
            <div class="card-body newAlert">
                <label for="postContent" class="form-label">New Post</label>
                <input class="form-control mb-3" id="postContent">
            </div>
            <div class="card-footer">
                <a class="btn btn-primary add">Post</a>
                <a class="btn btn-secondary cancel">Cancel</a>
            </div>
        </div>`
    )
    
    $newPost.innerHTML = addNew.join('')
    newPost()
})

function newPost () {
    const $addPost = document.querySelector('.add')
    const $cancelPost = document.querySelector('.cancel')

    $cancelPost.addEventListener ('click', function (e) {
        const element = document.querySelector(".newPost")
        element.parentElement.removeChild(element)
    })

    $addPost.addEventListener ('click', function (e) {
        const content = document.getElementById('postContent').value
        
        if (content == '') {
            const postAlert = document.querySelector('.newAlert')
            const alert = []
            alert.push(
                `<label for="postContent" class="form-label">New Post</label>
                <input class="form-control mb-3" id="postContent">
                <div class="alert alert-danger" role="alert">
                Please input content before posting!
                </div>`
            )
            postAlert.innerHTML = alert.join('')
            
        } else {
            const complete = {
                username: data.currentUser
                ,content: content
                ,score: 0
            }
            data.ideas.push(complete)
            listIdeas()

            const element = document.querySelector(".newPost")
            element.parentElement.removeChild(element)
        }
    })
}

function editPost (value) {

    const newEdit = []
    
    const user = data.currentUser
    const content = data.ideas[value].content
    const score = data.ideas[value].score

    newEdit.push(
        `<div class="card mb-3 newEdit">
        <div class="card-header">
            ${data.currentUser}
        </div>
        <div class="card-body newAlert">
            <label for="editContent" class="form-label">Edit Post</label>
            <textarea class="form-control mb-3" id="editContent">${content}</textarea>
        </div>
        <div class="card-footer">
            <a href='#' class="btn btn-primary make-edit">Make Changes</a>
            <a class="btn btn-secondary cancel-edit">Cancel</a>
        </div>
        </div>`
    )

    $newPost.innerHTML = newEdit.join('')
    
    deletePost(value)

    const $makeEdit = document.querySelector('.make-edit')
    const $cancelEdit = document.querySelector('.cancel-edit')

    $cancelEdit.addEventListener('click', function(e){
        const element = document.querySelector(".newEdit")
        element.parentElement.removeChild(element)

        const current = {
            username: user
            ,content: content
            ,score: score
        }

        data.ideas.splice(value, 0, current)

        listIdeas()
    })

    $makeEdit.addEventListener('click', function(e){
        const textBox = document.getElementById('editContent').value
        const element = document.querySelector(".newEdit")
        element.parentElement.removeChild(element)

        const current = {
            username: user
            ,content: textBox
            ,score: score
        }

        data.ideas.splice(value, 0, current)

        listIdeas()
    })
}

function deletePost(value) {
    data.ideas.splice(value, 1)
    listIdeas()
}