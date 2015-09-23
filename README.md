# gitify

Tool to create a remote github repository and add and push content to it.

```js
var gitify = require('gitify');

// change user and password to match your github account to see it in action
gitify(
  { user     :  'joe'
  , password :  'secret'
  , repo     :  'foo'   // if no repo is given, the current folder name is used
  }
  , function (err) {
    if (err) return console.error('err: ', err);
    console.log('Success');
  }
);
```

## Installation

    npm install gitify

## API

###*gitify(opts : Object, cb : Function)*

- opts are optional and specify
    - user\*      :  github user
    - password\*  :  github password
    - repo        :  name under which the repo should be published on github (defaults to current dir name)
    - description :  description of the repository (default empty)

\* if user and/or password are not supplied, they will be obtained by prompting the user on the first gitify run and
saved into a config at: `~/.config/gitify.js` for future runs 

## Commandline
To use the Commandline tool, install it globally with

    npm install -g gitify

Then run with

    gitify [<repo> <description> <user> <password>]

If the information provided is not complete, a CLI pop up will appear, prompting for the valid information.

For example,

    gitify aaa bbb ccc

will prompt

    ? Please input your repository name:  (aaa)
    ? Please input your repository description:  (bbb)
    ? Please input your username:  (ccc)
    ? Please input your password: 

where the input parameters are set as default values (meaning pressing `[Enter]` is the same as inputting that string)

## License

MIT
