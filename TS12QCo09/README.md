## TypeScript 12
## Chapter 12: React with TypeScript
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Setup & Starter Code
        (1)在 terminal 輸入 npm create vite@latest
        (2)設定專案名稱為 TS12
        (3)選取框架 React，變體選擇 TypeScript
        (4)在 terminal 輸入 cd TS12，修改當前資料夾預設路徑
        (5)在 terminal 輸入 npm i，安裝
        (6)開啟資料夾 TS12
        (7)在 terminal 輸入 npm run dev，執行
        (8)修改 App.tsx
        (9)刪除 App.css
        (10)修改 index.css
      
###  4. Function Components
        (1)新增資料夾 components
        (2)新增 Heading.tsx
        (3)輸入 rafce + Tab
        (4)設定 HeadingProps 類型，title 元素為 string
        destruct解構賦值 title 元素和 HeadingProps 類型
        (5)在 h1 元素 加入 title

###  5. Component Return Types
        Heading 的 類型為 JSX.Element ReactElement

###  6. Heading Component Example
        匯入 Heading.tsx 和 title

###  7. Old Code You May See
        (1)新增 Section.tsx
        (2)Section 的類型為 React.FC，即 React.FunctionComponent
        (3)在 section元素加入 h2 元素和 p 元素，
        h2 元素加入 title 和 p 元素加入 children，
        補上參數和類型

###  8. Recommended Code & Default Values
        Section.tsx
        (1)新增 SectionProps 類型
        (2)使用 SectionProps 類型取代
        (3)設定 title 的預設值
        (4)修改匯入

        App.tsx
        (5)匯入 Section
        (6)加入 Section 元素和文字
        (7)加入 react fragment為上層元素
        (8)在 Section 加入 title 會有不一樣的 title

###  9. useState hook
        (1)新增 Counter.tsx
        (2)匯入 useState
        (3)輸入 rafce + Tab 建構模板
        (4)使用 useState

### 10. Simple Counter Example
        Counter.tsx
        (1)新增 h1 元素 統計次數
        (2)新增 button 元素增加次數或減少次數
        (3)匯入 Counter

### 11. Passing Down setState & children
        (1)修改 Counter.tsx
        (2)修改 App.tsx 示範
        (3)設定類型
        (4)新增參數

### 12. Generic List Example
        (1)新增 List.tsx
        (2)匯入 ReactNode
        (3)輸入 rafce + Tab 建構模板
        (4)設定 ListProps<T> 介面
        (5)設定 List 列表，參數和類型
        
        App.tsx
        (6)匯入 List

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
