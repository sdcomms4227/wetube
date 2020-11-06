import axios from "axios";

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

const removeComment = (commentId) => {
  const commentEl = document.getElementById(commentId);
  commentEl.remove();
  decreaseNumber();
};

const deleteComment = async (event) => {
  const commentId = event.target.parentNode.getAttribute("id");
  const response = await axios({
    url: `/api/${commentId}/delete-comment`,
    method: "POST",
    data: { commentId },
  });
  if (response.status === 200) {
    removeComment(commentId);
  }
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
