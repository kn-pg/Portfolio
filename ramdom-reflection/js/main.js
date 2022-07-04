/*globals $*/
$('#output').on('click', function (e) {
  let inputIndex, inputDelimiters;
  let inputOverallNum = document.getElementById("overallNum").value;
  let inputDelimitersNum = document.getElementById("delimitersNum").value;

  let outputDay, outputPerday;
  // input
  let elements_1 =document.getElementsByName('overall');
  for (var i = 0; i < elements_1.length; i++) {
    if (elements_1.item(i).checked) {
      inputIndex = elements_1.item(i).value;
    }
  }
  let elements_2 =document.getElementsByName('delimiters');
  for (var j = 0; j < elements_2.length; j++) {
    if (elements_2.item(j).checked) {
      inputDelimiters = elements_2.item(j).value;
      if (j == 0) {
        outputDay = inputDelimitersNum;
        outputPerday = inputOverallNum / inputDelimitersNum;
      } else {
        outputDay = inputOverallNum / inputDelimitersNum;
        outputPerday = inputDelimitersNum;
      }
    }
  }
  // output
  // 最小値=1 最大値=全体の数とした乱数配列作成
  // 最小値と最大値
  let min = 1, max = Number(inputOverallNum);
  // 出力用配列
  let outputRandomsNum = new Array();
  // 重複チェックしながら乱数作成
  for (var i = 0; i < max; i++) {
    while (true) {
     var tmp = intRandom(min, max);
      if (!outputRandomsNum.includes(tmp)) {
        outputRandomsNum.push(tmp);
        break;
      }
    }
  }
  // min以上max以下の整数値の乱数を返す 
  function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(outputDay);
  var outputFinal = new Array(outputDay);
  for (var j = 0; j < Number(outputDay) + 1; j++) {
    outputFinal[j] = new Array(outputPerday + 1);
    for (var k = 0; k < Number(outputPerday) + 1; k++) {
      if (j == 0) {
        for (var l = 0; l < Number(outputPerday) + 1; l++) {
          if (l == 0) {
            outputFinal[j][l] = inputDelimiters;
          } else {
            outputFinal[j][l] = inputIndex;
          }
        }
      } else {
        if (k == 0) {
          outputFinal[j][k] = j;
        } else {
          var argument = (j - 1) * outputPerday + (k - 1);
          outputFinal[j][k] = outputRandomsNum[argument];
        }
      }
    }
  }
  console.table(outputFinal);
  makeTable(outputFinal, "table");
});



// 表の動的作成
function makeTable(data, tableId) {
  // 表の作成開始
  var rows = [];
  var table = document.createElement("table");

  // 表に2次元配列の要素を格納
  for (i = 0; i < data.length; i++) {
    rows.push(table.insertRow(-1));  // 行の追加
    for (j = 0; j < data[0].length; j++) {
      cell = rows[i].insertCell(-1);
      cell.appendChild(document.createTextNode(data[i][j]));
      // 背景色の設定
      if (i == 0) {
        cell.style.backgroundColor = "#bbb"; // ヘッダ行
      } else {
        cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
      }
    }
  }
  // 指定したdiv要素に表を加える
  document.getElementById(tableId).appendChild(table);
}
/*
window.onload=function(){
  let inputIndex, inputDelimiters;
  let inputOverallNum = document.getElementById("overallNum").value;
  let inputDelimitersNum = document.getElementById("delimitersNum").value;

  let outputDay, outputPerday;
  // input
  let elements_1 =document.getElementsByName('overall');
  for (var i = 0; i < elements_1.length; i++) {
    if (elements_1.item(i).checked) {
      inputIndex = elements_1.item(i).value;
    }
  }
  let elements_2 =document.getElementsByName('delimiters');
  for (var j = 0; j < elements_2.length; j++) {
    if (elements_2.item(j).checked) {
      inputDelimiters = elements_2.item(j).value;
      if (j == 0) {
        outputDay = inputDelimitersNum;
        outputPerday = inputOverallNum / inputDelimitersNum;
      } else {
        outputDay = inputOverallNum / inputDelimitersNum;
        outputPerday = inputDelimitersNum;
      }
    }
  }
  // output
  // 最小値=1 最大値=全体の数とした乱数配列作成
  // 最小値と最大値
  let min = 1, max = Number(inputOverallNum);
  // 出力用配列
  let outputRandomsNum = new Array();
  // 重複チェックしながら乱数作成
  for (var i = 0; i < max; i++) {
    while (true) {
     var tmp = intRandom(min, max);
      if (!outputRandomsNum.includes(tmp)) {
        outputRandomsNum.push(tmp);
        break;
      }
    }
  }
  // min以上max以下の整数値の乱数を返す 
  function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(outputDay);
  var outputFinal = new Array(outputDay);
  for (var j = 0; j < Number(outputDay) + 1; j++) {
    outputFinal[j] = new Array(outputPerday + 1);
    for (var k = 0; k < Number(outputPerday) + 1; k++) {
      if (j == 0) {
        for (var l = 0; l < Number(outputPerday) + 1; l++) {
          if (l == 0) {
            outputFinal[j][l] = inputDelimiters;
          } else {
            outputFinal[j][l] = inputIndex;
          }
        }
      } else {
        if (k == 0) {
          outputFinal[j][k] = j;
        } else {
          var argument = (j - 1) * outputPerday + (k - 1);
          outputFinal[j][k] = outputRandomsNum[argument];
        }
      }
    }
  }
  console.table(outputFinal);
  makeTable(outputFinal, "table");
}*/
