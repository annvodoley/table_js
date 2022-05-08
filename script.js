
//таблица

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// стили к таблице

table.style.width = '687px';
table.style.height = '412px';
table.style.margin = 'auto';



document.getElementById('body').appendChild(table);


//заголовок таблицы
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Столб 1"
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Столб 2"
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Столб 3"

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

//стили заголовка
row_1.style.width = '229px';
row_1.style.height = '95px';
heading_1.style.fontSize = '30px';
heading_1.style.border = '1px solid #000000';
heading_2.style.fontSize = '30px';
heading_2.style.border = '1px solid #000000';
heading_3.style.fontSize = '30px';
heading_3.style.background = 'blue';
heading_3.style.border = '1px solid #000000';


// 1 строка таблицы

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('th');
row_2_data_1.innerHTML = "Клетка 1";
let row_2_data_2 = document.createElement('th');
row_2_data_2.innerHTML = "Клетка 2";
let row_2_data_3 = document.createElement('th');
row_2_data_3.innerHTML = "Клетка 3";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);


//стили 1 строки
row_2.style.width = '229px';
row_2.style.height = '170px';
row_2_data_1.style.fontSize = '20px';
row_2_data_1.style.border = '1px solid #000000';
row_2_data_1.style.background = 'red';
row_2_data_2.style.fontSize = '20px';
row_2_data_2.style.border = '1px solid #000000';
row_2_data_3.style.fontSize = '20px';
row_2_data_3.style.border = '1px solid #000000';




// 2 строка таблицы

let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('th');
row_3_data_1.innerHTML = "Клетка 4";
let row_3_data_2 = document.createElement('th');
row_3_data_2.innerHTML = "Клетка 5";
let row_3_data_3 = document.createElement('th');
row_3_data_3.innerHTML = "Клетка 6";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

//стили 2 строки
row_3.style.width = '229px';
row_3.style.height = '170px';
row_3_data_1.style.fontSize = '20px';
row_3_data_1.style.border = '1px solid #000000';
row_3_data_2.style.fontSize = '20px';
row_3_data_2.style.border = '1px solid #000000';
row_3_data_2.style.background = 'red';
row_3_data_3.style.fontSize = '20px';
row_3_data_3.style.border = '1px solid #000000';