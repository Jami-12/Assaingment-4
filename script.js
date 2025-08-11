const nameList = document.getElementById("nameList");
const removeBtn = document.getElementById("removeBtn")

const handleClick = (data) => {
    const price = data.childNodes[3].childNodes[3].innerText;
    const line = data.childNodes[3].childNodes[5].innerText;
    const name = data.childNodes[3].childNodes[7].innerText;
   
    console.log("clicked me");


    const li = document.createElement("li")
       li.innerHTML = `
        <div style="
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 8px;
            background: #f9f9f9;
            width: fit-content;
            margin-bottom: 10px;
        ">
            <div><strong>${price}</strong></div>
            <div>${name}</div>
            <div>${line}</div>
        </div>
    `;
    
    nameList.appendChild(li);

    removeBtn.addEventListener("click", () => {
        nameList.innerHTML = "";

    });
}