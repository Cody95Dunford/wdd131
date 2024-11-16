const button = document.querySelector('button');

button.addEventListener("click", function()
{
    const input = document.querySelector('#favchap');
    
    const list = document.querySelector('ul');
    const deleteButton = document.createElement('button');
    const li = document.createElement('li');    

    if (input.value.trim() !== '')
    {
	li.textContent = input.value;
	deleteButton.textContent = "❌";
	li.append(deleteButton);
	list.append(li);
    }

    input.value = "";
    input.focus();

    deleteButton.addEventListener("click", function()
    {
        list.removeChild(li);
        input.value = "";
        input.focus();
    });
});