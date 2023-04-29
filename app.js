import inquirer from "inquirer";
import htmlMaker from "./models/htmlMaker.js";

inquirer
  .prompt([
    {
      type: "input",
      name: "fileName",
      message: "파일명을 작성해주세요."
    },
    {
      type: "input",
      name: "title",
      message: "타이틀에 넣을 기본정보를 작성해주세요"
    }, 
    {
      type: "confirm",
      name: "bodyDiv",
      message: "body의 자식으로 최상위 div#root 태그 사용을 하시겠습니까?"
    },
    {
      type: "input",
      name: "pInnerText",
      message: "본문 p 태그에 작성하실 내용을 작성해주세요."
    }
  ])
  .then((answers)=>{
    htmlMaker(answers)
  })