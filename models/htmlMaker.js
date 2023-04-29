import fs from 'fs'

export default function htmlMaker(answers) {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${answers.title}</title>
  </head>
  <body>
    <script>
      if (${answers.bodyDiv}) {
        const div = document.createElement('div')
        div.setAttribute('id', 'root')
        document.body.appendChild(div);

        const p = document.createElement('p')
        p.innerText = "${answers.pInnerText}";
        div.appendChild(p)
      } else {
        const p = document.createElement('p')
        p.innerText = "${answers.pInnerText}";
        document.body.appendChild(p)
      }
    </script>
  </body>
</html>`

  // 파일 생성
  fs.writeFileSync(`./result/${answers.fileName}.html`, html);
}