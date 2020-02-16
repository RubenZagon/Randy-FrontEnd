// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
/*
CONDITION - usa EJS

<% if(questionRouter){ %>

  <% } %>
*/

const questionRouter = {
  type: 'confirm',
  name: 'questionRouter',
  message: 'use Router this component?'
}

const questionRedux = {
  type: 'confirm',
  name: 'questionRedux',
  message: 'use a PROVIDER or REDUX this component?'
}

const selectViews = {
  type: 'multiselect',
  name: 'views',
  message: 'Pick your views to create',
  limit: 3,
  choices: [{
      name: 'Desktop',
      value: 'desktop'
    },
    {
      name: 'iPhone',
      value: 'iphone'
    },
    {
      name: 'iPad',
      value: 'ipad'
    },
  ]
}


const selectSecction = {
  type: 'select',
  name: 'selectSecction',
  message: 'Secction of the component in the storybook?',
  choices: [{
      name: 'TO_DO',
      message: 'To Do List',

    },
    {
      name: 'GENERAL',
      message: 'General',

    },
    {
      name: 'BILLS',
      message: 'Bills',

    },
    {
      name: 'SETTINGS',
      message: 'Settings',

    },
    {
      name: 'DASHBOARD',
      message: 'Dashboard',
    },
    {
      name: 'CALENDAR',
      message: 'Calendar',
    }
  ],
}

const name = {
  type: 'input',
  name: 'name',
  message: 'Name of component ?'
}

const title = {
  type: 'input',
  name: 'titleStory',
  message: 'Title of story?'
}

module.exports = [
  name,
  title,
  questionRouter,
  questionRedux,
  selectViews,
  selectSecction
]



/*
MULTISELECT

module.exports = [{
  type: 'multiselect',
  name: 'color',
  message: 'Pick your favorite colors',
  limit: 7,
  choices: [{
      name: 'aqua',
      value: '#00ffff'
    },
    {
      name: 'black',
      value: '#000000'
    },
    {
      name: 'blue',
      value: '#0000ff'
    },
    {
      name: 'fuchsia',
      value: '#ff00ff'
    },
    {
      name: 'gray',
      value: '#808080'
    }
  ]
}]
*/


/*
SURVEY

module.exports = [{
  type: 'survey',
  name: 'experience',
  message: 'Please rate your experience',
  scale: [{
      name: '1',
      message: 'Strongly Disagree'
    },
    {
      name: '2',
      message: 'Disagree'
    },
    {
      name: '3',
      message: 'Neutral'
    },
    {
      name: '4',
      message: 'Agree'
    },
    {
      name: '5',
      message: 'Strongly Agree'
    }
  ],
  margin: [0, 0, 2, 1],
  choices: [{
      name: 'interface',
      message: 'The website has a friendly interface.'
    },
    {
      name: 'navigation',
      message: 'The website is easy to navigate.'
    },
    {
      name: 'images',
      message: 'The website usually has good images.'
    },
    {
      name: 'upload',
      message: 'The website makes it easy to upload images.'
    },
    {
      name: 'colors',
      message: 'The website has a pleasing color palette.'
    }
  ]
}]

*/


/*
SELECTOR

module.exports = [{
  type: 'select',
  name: 'colors',
  message: 'Favorite color?',
  choices: [{
      name: 'red',
      message: 'red',
      value: '#ff0000'
    }, //<= choice object
    {
      name: 'green',
      message: 'Green',
      value: '#00ff00'
    }, //<= choice object
    {
      name: 'blue',
      message: 'Blue',
      value: '#0000ff'
    } //<= choice object
  ],
  result() {
    return this.focused.value; // by default, "value" is the choice.name
  }
}]

*/