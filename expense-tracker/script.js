const records = [
  { name: '午餐',     amount: 18,    category: '餐饮' },
  { name: '奶茶',     amount: 12.5,  category: '餐饮' },
  { name: '地铁充值', amount: 50,    category: '交通' },
  { name: '洗衣液',   amount: 29.9,  category: '日用品' },
  { name: '电影票',   amount: 45,    category: '娱乐' },
  { name: '打车',     amount: -8,    category: '交通' },   
  { name: '夜宵',     amount: 'abc', category: '餐饮' },   
  { name: '',         amount: 30,    category: '其他' }    
];
const cleanRecords = (list) =>
  list.filter(r =>
    typeof r.amount === 'number' &&
    r.amount > 0 &&
    r.amount <= 10000 &&
    r.name.trim() !== ''
  );

const totalAmount = (list) =>
  list.reduce((sum, r) => sum + r.amount, 0);

const avgAmount = (list) => {
  if (list.length === 0) return 0;
  const amounts = list.map(r => r.amount);
  const total = amounts.reduce((s, a) => s + a, 0);
  return (total / amounts.length).toFixed(2);
};

const biggestExpense = (list) =>
  list.reduce((max, r) => (r.amount > max.amount ? r : max), list[0])
