function inventory(input) {

  let items = input.shift().split(', ');
  let count = input.length;

  for (let i = 0; i < count; i++) {
    let command = input.shift().split(' - ');
    let action = command.shift();

    switch (action) {
      case 'Collect': {
          let collectItem = command.shift();
          if (!items.includes(collectItem)) {

            items.push(collectItem);

        }
        break;
    }
          case 'Drop':
    {
      let itemDrop = command.shift();
      for (let i = 0; i < items.length; i++) {
        if (itemDrop === items[i]) {
          items.splice(i, 1);
          break;
        }
      }
      break;
    }
          case 'Combine Items':
    {
      let splitted = command.shift().split(':');
      let oldItem = splitted.shift();
      let newItem = splitted.shift();
      for (let i = 0; i < items.length; i++) {
        if (oldItem === items[i]) {
          items.splice(i + 1, 0, newItem);
          break;
        }
      }
      break;
    }
          case 'Renew':
    {
      let renewItem = command.shift();
      for (let i = 0; i < items.length; i++) {

        if (renewItem === items[i]) {
          items.splice(i, 1);
          items.push(renewItem);
          break;
        }
      }
      break;
    }
  }

  if (action === 'Craft!') {
    console.log(items.join(', '));
    break;
  }

}
}





inventory(["Iron, Wood, Sword Collect - Gold Drop - Wood   Craft!"])


inventory(["Iron, Wood, Sword, Collect - Gold, Drop - Wood, Craft!"]);
inventory(["Iron, Sword, Drop - Bronze, Combine Items - Sword:Bow, Renew - Iron, Craft!"]);

/*Problem 3. Inventory
As a young traveler, you gather items and craft new items.
Input / Constraints
You will receive a journal with some Collecting items, separated with ', ' (comma and space).
After that, until receiving "Craft!" you will be receiving different commands.

Commands (split by " - "):
"Collect - {item}" – Receiving this command, you should add the given item in your inventory.
If the item already exists, you should skip this line.

"Drop - {item}" – You should remove the item from your inventory, if it exists.

"Combine Items - {oldItem}:{newItem}" – You should check if the old item exists, if so, add the new item after the old one.
Otherwise, ignore the command.

"Renew – {item}" – If the given item exists, you should change its position and put it last in your inventory.
Output
After receiving "Craft!" print the items in your inventory, separated by ", " (comma and space).
Examples
Input
Iron, Wood, Sword
Collect - Gold
Drop - Wood
Craft!

Output
Iron, Sword, Gold


Input
Iron, Sword
Drop - Bronze
Combine Items - Sword:Bow
Renew - Iron

Output
Sword, Bow, Iron



//////////////////////////////////
function solve (inputs){

	let array = inputs.split(", ").map(String);
	let array2 = [];
	let counter = 0;
	for(let i = 0; i<array.length;i++){
		if(array[i].includes('-')||array[i].includes('Craft!')) {
			array2.push(array[i]);
			counter++;
		}
	}
	for(let i = counter; i>0;i--){
		array.pop();
	}

	//TASK
	for(let i = 0; i < array2.length; i++){
		let arrCommands = array2[i].split(" - ");
		if(arrCommands[0]=='Craft!'){
			break;
		}
	swich(arrCommand[0]){
			case 'Collect':
			break;
		}


	}

	console.log(array);
	console.log(array2);
	//console.log(typeof array);

}*/



