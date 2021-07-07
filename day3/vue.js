const table1 = document.getElementById('table1');
const h6_1 = document.getElementById('h6_1');
const h6_2 = document.getElementById('h6_2');
const print = document.getElementById('print');

var obj = new Vue({
    el: '#VueApp',
    data: {
        message: 'Hello Vue!',
        value: '',
        items: [10, 10, 90, 60, 20, 50, 100, 100, 100, 100, 100, 20],
        sortedItems: [],

    },
    methods: {
        addToList: function() {
            document.getElementById('table1').style.visibility = 'visible';
            document.getElementById('sort').style.visibility = 'visible';
            obj.items.push(obj.value);
            document.getElementById('table1').innerHTML = arrToTable(obj.items);
        },

        delToList: function() {
            obj.items.pop();
            document.getElementById('table1').innerHTML = arrToTable(obj.items);
        },

        bubbleSort: function() {
            var table3 = document.getElementById('table3');
            table3.innerHTML = "";
            var arr = clone(obj.items);
            var flag = true;
            var str = "";

            for (var j = 0; j < arr.length - 1; ++j) {
                flag = false;
                for (var i = 0; i < arr.length - 1; ++i) {
                    if (arr[i] > arr[i + 1]) {
                        var temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                        flag = true;
                        str += arrToTable(arr);
                    }
                }
            }
            table3.innerHTML = str;
            obj.sortedItems = clone(arr);
        },

        selectionSort: function() {
            var table3 = document.getElementById('table3');
            table3.innerHTML = "";
            var arr = clone(obj.items);
            var str = "";
            for (var i = 0; i < arr.length - 1; i++) {
                var min_idx = i;
                for (var j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[min_idx]) {
                        min_idx = j;
                        str += arrToTable(arr);
                    }
                }
                var temp = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = temp;
            }
            str += arrToTable(arr);
            table3.innerHTML = str;
            obj.sortedItems = clone(arr);
        },

        insertionSort: function() {
            var table3 = document.getElementById('table3');
            table3.innerHTML = "";
            var arr = clone(obj.items);
            var str = "";
            let i, key, j;
            for (i = 1; i < arr.length; i++) {
                key = arr[i];
                j = i - 1;
                str += arrToTable(arr);
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
            str += arrToTable(arr);
            table3.innerHTML = str;
            obj.sortedItems = clone(arr);
        },
    }
})

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function arrToTable(arr) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var str = "";
    str += "<tr>";
    for (var i = 0; i < arr.length; ++i) {
        str += "<td style='background-color: rgb(" + calculate(arr[i], min, max) + ", 180, 180);'>" + String(arr[i]) + "</td>";
    }
    str += "</tr>";
    return str;
}

function calculate(val, min, max) {
    if (max > min) {
        return parseInt(255 * (val - min) / (max - min));
    } else {
        return 100
    }

}