let jsonDataArray = [];

// Fetch the JSON data from the external file
fetch('data.json') // Replace 'data.json' with the path to your JSON file
    .then(res => res.json())
    .then(data => {
        jsonDataArray = data; // Store the fetched JSON data in the variable
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

let selectedItems = []; // To store items selected for the table

// Function to search and section results
function searchItem() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = jsonDataArray.filter(item => item.name.toLowerCase().includes(input));
    
    const sectionedResults = document.getElementById('sectionedResults');
    sectionedResults.innerHTML = ''; // Clear previous sections

    // Group items by calorie range (example criterion)
    const lowCalories = results.filter(item => item.calories <= 100);
    const mediumCalories = results.filter(item => item.calories > 100 && item.calories <= 200);
    const highCalories = results.filter(item => item.calories > 200);

    // Create sections dynamically
    createSection('Low Calories (<= 100)', lowCalories, sectionedResults);
    createSection('Medium Calories (101-200)', mediumCalories, sectionedResults);
    createSection('High Calories (> 200)', highCalories, sectionedResults);
}

// Function to create a section
function createSection(title, items, container) {
    const sectionDiv = document.createElement('div');
    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = title;
    sectionDiv.appendChild(sectionTitle);

    items.forEach(item => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = JSON.stringify(item); // Store item data in checkbox value
        checkbox.onchange = () => toggleSelection(item, checkbox.checked); // Handle selection

        const label = document.createElement('label');
        label.textContent = item.name;

        const div = document.createElement('div');
        div.appendChild(checkbox);
        div.appendChild(label);
        sectionDiv.appendChild(div);
    });

    container.appendChild(sectionDiv);
}

// Function to handle selection
function toggleSelection(item, isSelected) {
    if (isSelected) {
        selectedItems.push(item);
    } else {
        selectedItems = selectedItems.filter(selected => selected.name !== item.name);
    }
}

// Function to add selected items to the table
function addToTable() {
    const tableBody = document.getElementById('tableBody');

    selectedItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="name">${item.name}</td>
            <td class="cal">${item.calories}</td>
            <td class="protein">${item.protein}</td>
            <td class="fat">${item.fat}</td>
            <td class="carb">${item.carbohydrates}</td>
        `;
        tableBody.appendChild(row);
    });


    selectedItems = []; // Clear selection after adding to the table
}


// Function to clear the table
function clearTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear the table body
    selectedItems = []; // Clear selected items
}

function calculate() {
    // Get all elements for each category using querySelectorAll
    const proteinElements = document.querySelectorAll('.protein');
    const caloriesElements = document.querySelectorAll('.cal');
    const fatElements = document.querySelectorAll('.fat');
    const carbohydratesElements = document.querySelectorAll('.carb');
    
    // Calculate sum for each category
    const totalProtein = calculateSum(proteinElements);
    const totalCalories = calculateSum(caloriesElements);
    const totalFat = calculateSum(fatElements);
    const totalCarbohydrates = calculateSum(carbohydratesElements);

    // Display results
    document.getElementById('resultProtein').textContent = 'Total Protein: ' + totalProtein;
    document.getElementById('resultCalories').textContent = 'Total Calories: ' + totalCalories;
    document.getElementById('resultFat').textContent = 'Total Fat: ' + totalFat;
    document.getElementById('resultCarbohydrates').textContent = 'Total Carbohydrates: ' + totalCarbohydrates;
    if (totalCalories > 2000) {
        alert('Warning: Total calories exceed 2000!');
    }
    if (totalProtein > 100) {
        alert('Warning: Total protein exceeds 100g!');
    }
    if (totalFat > 70) {
        alert('Warning: Total fat exceeds 70g!');
    }
    if (totalCarbohydrates > 300) {
        alert('Warning: Total carbohydrates exceed 300g!');
    }
    if (totalProtein < 50) {
        alert('Warning: Total protein is below 50g!');
    }
    if (totalFat < 30) {
        alert('Warning: Total fat is below 30g!');
    }
    if (totalCarbohydrates < 100) {
        alert('Warning: Total carbohydrates are below 100g!');
    }
    if (totalCalories < 1500) {
        alert('Warning: Total calories are below 1500!');
    }
    // Reset the table after calculation
}

// Helper function to calculate the sum of numeric values
function calculateSum(elements) {
    let total = 0;
    elements.forEach(cell => {
        total += parseFloat(cell.textContent); // Convert text to number and add
    });
    return total;
}
