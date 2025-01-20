// 會員名單
const members = ['Alice', 'Bob', 'Charlie', 'Diana', 'Evan', 'Fiona', 'George', 'Hannah']

// 購買記錄儲存陣列
const purchaseRecords = []

// 新增購買記錄函式
function addPurchaseRecord(name, courses) {
  // 驗證會員名稱是否有效，購買課程數量是否為正整數
  if (!name || typeof name !== 'string' || !members.includes(name) || typeof courses !== 'number' || courses <= 0) {
    console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。')
    return
  }

  // 計算課程單價
  let unitPrice
  if (courses <= 10) {
    unitPrice = 1500
  } else if (courses <= 20) {
    unitPrice = 1300
  } else {
    unitPrice = 1100
  }

  // 計算總金額
  const totalPrice = courses * unitPrice

  // 建立購買記錄物件
  const record = {
    name,
    courses,
    unitPrice,
    totalPrice,
  }

  // 儲存購買記錄
  purchaseRecords.push(record)

  // 印出成功訊息
  console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalPrice} 元。`)
}

// 計算目前總營業額函式
function calculateTotalPrice() {
  // 累加所有購買記錄的總金額
  let total = 0

  purchaseRecords.forEach(function (record) {
    total += record.totalPrice
  })

  // 印出總營業額
  console.log(`目前總營業額為 ${total} 元。`)
}

/**
 * 篩選未購買課程的會員函式
 */
function filterNoPurchaseMember() {
  // 取出所有紀錄的會員名子
  const purchaseRecordNames = []
  purchaseRecords.forEach(function (record) {
    purchaseRecordNames.push(record.name)
  })

  // 找出未出現在購買記錄中的會員
  const noPurchaseMembers = members.filter(function (member) {
    return purchaseRecordNames.includes(member) === false
  })

  // 印出結果
  if (noPurchaseMembers.length > 0) {
    // console.log(`未購買課程的會員有：${noPurchaseMembers.join('、')}。`)
    console.log(`未購買課程的會員有：${noPurchaseMembers}。`)
  } else {
    console.log('所有會員均已購買課程。')
  }
}

// 測試範例
addPurchaseRecord('Alice', 4) // 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
addPurchaseRecord('Bob', 12) // 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
addPurchaseRecord('Charlie', 25) // 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
addPurchaseRecord('Hannah', 50) // 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
addPurchaseRecord('名稱', '課程數量') // 輸入錯誤，請輸入有效的會員名稱和課程數量。

// 計算總營業額
calculateTotalPrice() // 目前總營業額為 104100 元。

// 篩選未購買課程的會員
filterNoPurchaseMember() // 未購買課程的會員有：Diana,Evan,Fiona,George。
