just a few hooks that I see myself using in multiple projects

### useTrigger

| `Props`          | `type`            | `description`              |
| ---------------- | ----------------- | -------------------------- |
| **func**         | Function          | function to run on trigger |
| **dependencies** | Array I undefined | array of dependencies      |

## React Native exclusive

### useBackAction

| `Props`          | `type`            | `description`                               |
| ---------------- | ----------------- | ------------------------------------------- |
| **func**         | Function          | function to run when back button is pressed |
| **dependencies** | Array I undefined | array of dependencies                       |

### useKeyboard

| `Props`           | `type` | `description`                               | `default` |
| ----------------- | ------ | ------------------------------------------- | --------- |
| **defaultHeight** | number | default value to return on `keyboardHeight` | 250       |

| `Returns`         | `type`  |
| ----------------- | ------- |
| isKeyboardVisible | boolean |
| keyboardHeight    | number  |

### useStatusBarStyle

| `Props`     | `type`                                 | `description`                   |
| ----------- | -------------------------------------- | ------------------------------- |
| **style**   | light-content I dark-content I default | sets status bar when rendering  |
| **cleanup** | light-content I dark-content I default | sets status bar when unmounting |

## react-navigation exclusive

### useHeaderHeight

| `Returns`  | `type` | `description`        |
| ---------- | ------ | -------------------- |
| **height** | number | height of the header |

### useOnScreenIsLeft

| `Props`          | `type`            | `description`                       |
| ---------------- | ----------------- | ----------------------------------- |
| **func**         | Function          | function to run when screen is left |
| **dependencies** | Array I undefined | array of dependencies               |
