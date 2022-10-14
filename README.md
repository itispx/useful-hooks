just a few hooks that I see myself using in multiple projects

---

### [useTrigger](https://gist.github.com/itispx/235dcde8f4af197ef3b3ee279b3d34a5)

| `Props`          | `type`            | `description`              |
| ---------------- | ----------------- | -------------------------- |
| **func**         | Function          | function to run on trigger |
| **dependencies** | Array I undefined | array of dependencies      |

---

## React Native exclusive

---

### [useBackAction](https://gist.github.com/itispx/3da47bdc8d3a775af9fc3a494638befb)

| `Props`          | `type`            | `description`                               |
| ---------------- | ----------------- | ------------------------------------------- |
| **func**         | Function          | function to run when back button is pressed |
| **dependencies** | Array I undefined | array of dependencies                       |

---

### [useKeyboard](https://gist.github.com/itispx/7cc2d7a8d73d2bf35ff848381e512688)

| `Props`           | `type` | `description`                               | `default` |
| ----------------- | ------ | ------------------------------------------- | --------- |
| **defaultHeight** | number | default value to return on `keyboardHeight` | 250       |

| `Returns`         | `type`  |
| ----------------- | ------- |
| isKeyboardVisible | boolean |
| keyboardHeight    | number  |

---

### [useStatusBarStyle](https://gist.github.com/itispx/2f4c0e120dfc494e89618445933f9536)

| `Props`     | `type`                                 | `description`                   |
| ----------- | -------------------------------------- | ------------------------------- |
| **style**   | light-content I dark-content I default | sets status bar when rendering  |
| **cleanup** | light-content I dark-content I default | sets status bar when unmounting |

---

## react-navigation exclusive

---

### [useHeaderHeight](https://gist.github.com/itispx/37e3cc2df0ffdb2835e774c1f51992d7)

| `Returns`  | `type` | `description`        |
| ---------- | ------ | -------------------- |
| **height** | number | height of the header |

---

### [useOnScreenIsLeft](https://gist.github.com/itispx/a89b3602a098cad8a294d252d99a44cc)

| `Props`          | `type`            | `description`                       |
| ---------------- | ----------------- | ----------------------------------- |
| **func**         | Function          | function to run when screen is left |
| **dependencies** | Array I undefined | array of dependencies               |

---
