//to add rupee sign before price

export default function formatCurrency(num) {
    return "₹" + Number(num.toFixed(1)).toLocaleString() + " ";
  }