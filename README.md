# Atlan Fronted Development Task

### [Visit the Web-App](https://atlansql.web.app/)

| Home Page: | Editor: |
| ---------- | ------- |
| <img src="https://github.com/akshatatray/atlan-sql-editor/blob/main/screenshots/Home.png" /> | <img src="https://github.com/akshatatray/atlan-sql-editor/blob/main/screenshots/Editor.png" /> |

| Query Execution: | Performance (Lighthouse): |
| ---------------- | ------------------------- |
| <img src="https://github.com/akshatatray/atlan-sql-editor/blob/main/screenshots/EditorQuery.png" /> | <img src="https://github.com/akshatatray/atlan-sql-editor/blob/main/screenshots/Performance.png" /> |

### Mock Queries:
+ ```SELECT * FROM Atlan;```
+ ```SELECT * FROM Atlan WHERE city='London';```

### Loading Time : < 2.5sec

## How I improved Loading Time of the Web-App?
- By using *`React Code Splitting :`* React Lazy Loading, i.e. loading files/scripts only when the component renders.
- By using small size assets' files, such as *`.SVGs instead of .PNGs`*, etc
- By minimizing the 3rd-Party Packages.
- By implementing *`custom CSS`* instead of Styling Libraries.
