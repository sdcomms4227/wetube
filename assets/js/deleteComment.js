const { default: Axios } = require("axios");

const deleteCommentBtnsCollection = document.getElementsByClassName(
  "jsDeleteCommentButton"
);
const commentNumber = document.getElementById("jsCommentNumber");
const commentText = document.getElementById("jsCommentText");

const decreaseNumber = () => {
  const currentNumber = parseInt(commentNumber.innerHTML, 10);
  commentNumber.innerHTML = currentNumber - 1;
  if (currentNumber === 2) {
    commentText.innerHTML = "comment";
  } else if (currentNumber === 1) {
    commentText.innerHTML = "comments";
  }
};

const removeComment = (comment) => {
  const commentEl = document.getElementById(comment);
  commentEl.remove();
  decreaseNumber();
};

const deleteComment = async (event) => {
  // const videoId = window.location.href.split("/videos/")[1];
  const commentId = event.target.parentNode.getAttribute("id");
  // const response = await Axios({
  //   url: `/api/${videoId}/comment/${commentId}/delete`,
  //   method: "POST",
  // });
  // if (response.status === 200) {
  removeComment(commentId);
  // }
};

function init() {
  const deleteCommentBtnsArray = Array.from(deleteCommentBtnsCollection);
  deleteCommentBtnsArray.forEach((element) => {
    element.addEventListener("click", deleteComment);
  });
}

if (deleteCommentBtnsCollection) {
  init();
}
