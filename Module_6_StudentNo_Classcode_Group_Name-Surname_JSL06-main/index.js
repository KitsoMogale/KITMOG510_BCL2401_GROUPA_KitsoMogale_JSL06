// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};



let total = 0 ;
let price = [60,140,180,200,230,80];
// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML

    const menu_container = document.getElementById('menu');

    // Loop through each category and its items in the menu object

    const category = Object.keys(menu);
    const list_items = Object.values(menu);

    
       for(let item in category){
       
       // console.log(menu[category[i]][item])
           // Create an element to represent the category
           const category_h2 = document.createElement('h3');

           const ul = document.createElement('ul');

           category_h2.textContent = category[item];
      // Append the category element to the menu container
           menu_container.appendChild(category_h2);

           menu_container.appendChild(ul);

           let n = 0;
        
           for(let list in list_items[item]){
                
             // Create an element to represent a list of item
             const cat_item = document.createElement('li');

             cat_item.textContent = list_items[item][list];
             
             n += 1;
             cat_item.addEventListener('click',()=>{

             addToOrder(list_items[item][list],n);
           }
             )
             
             ul.appendChild(cat_item);
       }

       }
      
            
      }
            

const total_p = document.getElementById('order-total');

// Callback function for adding an item to the order
function addToOrder(itemName,x) {
    // Get the order items list and the order total element from the HTML
      const order_list = document.getElementById('order-items');
      const order_Total = document.getElementById('order-total');

    // Create a list item for the order
    const list_Item = document.createElement('li');
    // Set the text content of the list item to the item name
    list_Item.textContent = itemName;

    // Append the list item to the order items list
    order_list.appendChild(list_Item);
      
    // Calculate and update the total price  
   
    total += price[x-1];


    // Update the text content of the order total element with the new total
    total_p.innerText = total;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu)
}

// Start the menu system by calling the init function
initMenuSystem(menu);
