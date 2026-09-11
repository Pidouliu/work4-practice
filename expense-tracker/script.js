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

const categoryTotals = (list) => {
  const result = {};
  list.forEach(r => {
    result[r.category] = (result[r.category] || 0) + r.amount;
  });
  return result;
};


const report = (list) => {
  const valid = cleanRecords(list);
  if (valid.length === 0) {
    return '没有有效记账记录';
  }
  const cats = categoryTotals(valid);
  const catText = Object.keys(cats)
    .map(cat => `${cat} ${cats[cat].toFixed(2)}元`)
    .join('，');
  return `有效记录${valid.length}条（已过滤${list.length - valid.length}条非法记录）
总支出：${totalAmount(valid).toFixed(2)}元
平均单笔：${avgAmount(valid)}元
最大单笔：${biggestExpense(valid).name} ${biggestExpense(valid).amount}元
分类汇总：${catText}`;
};


try {
  console.log('清洗后记录：', cleanRecords(records));
  console.log(report(records));
} catch (err) {
  console.error('报告生成失败:', err.message);
}