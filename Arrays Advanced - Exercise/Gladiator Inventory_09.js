function gladiatorInventory(equipmentAndCommandArray) {
    let equipmentArr = equipmentAndCommandArray.shift().split(' ');

    function buy(arr, item) {
        if (!arr.includes(item)) {
            arr.push(item);
        }
        return arr;              
    }
    function trash(arr, item) {
        if(arr.includes(item)){
        arr.splice(arr.indexOf(item), 1);
        }
        return arr;

    }
    function repair(arr, item) {
        if (arr.includes(item)) {
            arr.splice(arr.indexOf(item),1);
            arr.splice(arr.length,0,item);  
        }
        return arr;
    }
    function upgrade(arr, item) {
        let updateElement = item.split('-');
        let oldItem = updateElement[0].toUpperCase();
        let newItem = updateElement[1];
        let result ='';
        if (arr.includes(oldItem)){
        
            result = (`${(oldItem)}:${newItem}`);
            arr.splice(arr.indexOf(oldItem)+1,0,result);
        }
        return arr;
    }
    while (equipmentAndCommandArray.length > 0) {
        let commandArr = equipmentAndCommandArray.shift().split(' ');
        let command = commandArr[0];
        let items = commandArr[1];
        switch (command) {
            case 'Buy':
                equipmentArr = buy(equipmentArr, items);
                break;
            case 'Trash':
                equipmentArr = trash(equipmentArr, items);
            case 'Repair':
                equipmentArr = repair(equipmentArr, items);
                break;
            case 'Upgrade':
                equipmentArr = upgrade(equipmentArr,items)
                break;
        }
    }
    console.log(equipmentArr.join(' '));

}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade Sword-Steel']); 

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);

/*Gladiator Inventory
As a gladiator, Peter has cool Inventory. He loves to buy new equipment.
You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace.
You may receive the following commands:
⦁	Buy {equipment}
⦁	Trash {equipment}
⦁	Repair {equipment}
⦁	Upgrade {equipment}-{upgrade}
If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't bought already.
If you receive Trash command, delete the equipment if it exists.
If you receive Repair command, you should repair the equipment if it exists and place it on last position.
If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}";
Input / Consrtaints
You will receive an array of strings. Each element of the array is a command.
⦁	In the first input element, you will receive Peter's inventory – sequence of equipment names, separated by space.
Output
As output you must print Peter's inventory.
Constraints
⦁	The command will always be valid.
⦁	The equipment and Upgrade will be strings and will contain any character, except '-'.
⦁	Allowed working time / memory: 100ms / 16MB.
Scroll down to see examples.
Examples
Input
['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']

Output
SWORD SWORD:Steel Bag Spear


Comment
We receive the inventory => SWORD, Shield, Spear
We Buy Bag => SWORD, Shield, Spear, Bag
Trash Shield => SWORD, Spear, Bag
Repair Spear => SWORD, Bag, Spear
We add Upgrade => SWORD, SWORD:Steel, Bag,Spear
We print the inventory.


Input
['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

Output
SWORD Spear Shield

*/