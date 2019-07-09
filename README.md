## About

This project based on [this](http://flexbox.help/) site. The aim is to build a visualized flexbox demo and practice my react skills.

## Challenges I faced when developing this project

- When I drag range indicator, I wont't see the changes in the Show compoentn, why?

  - Reasons: Beacuse React `setState` function is async, I setState then I pass the state date to another component, but in this time I may not get the current value. So I can't see the changes.
  - Solved: use async and await. This problem is easy to solve, but it's hard to find the problem is. you always tell yourself the problem can not be here.

## Something can do better

- write less hard code

## References

- [TEST CSS FLEXBOX RULES](http://flexbox.help/)
- [redux-easy-boilerplate](https://github.com/anorudes/redux-easy-boilerplate/blob/21ef988f660be1b590c65356fef9828d0165f676/src/components/Items/index.js)
- [CodePen](https://codepen.io/anon/pen/xozBPm?editors=1100)
- [Change styles dynamically with React](https://codepen.io/GGarciaSeco/pen/vgVEGX)
- [How to Title Case and Other Upper and Lower Case CSS Tricks](https://love2dev.com/blog/css-text-transform/)
- [flexbox vertically split container in HALF](https://stackoverflow.com/questions/36568572/flexbox-vertically-split-container-in-half)
- [Radio Buttons in React 16](https://react.tips/radio-buttons-in-react-16/)
