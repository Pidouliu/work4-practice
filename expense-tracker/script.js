const records = [
  { name: '午餐',     amount: 18,    category: '餐饮' },
  { name: '奶茶',     amount: 12.5,  category: '餐饮' },
  { name: '地铁充值', amount: 50,    category: '交通' },
  { name: '洗衣液',   amount: 29.9,  category: '日用品' },
  { name: '电影票',   amount: 45,    category: '娱乐' },
  { name: '打车',     amount: -8,    category: '交通' },   // 非法：负数金额
  { name: '夜宵',     amount: 'abc', category: '餐饮' },   // 非法：金额不是数字
  { name: '',         amount: 30,    category: '其他' }    // 非法：名称为空
];