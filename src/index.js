import "./styles.css";

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    const li = document.createElement("li");
    li.innerText = inputText;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);
      li.innerText = inputText;
      li.appendChild(completeButton);
      li.appendChild(deleteButton);
      document.getElementById("incomplete-list").appendChild(li);
    });
    li.appendChild(backButton);
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  li.innerText = inputText;
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
