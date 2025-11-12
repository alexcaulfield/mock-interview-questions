/**
 * This is a mock interview question. Focus on communicating your thinking and approach to the problem.
 *
 * What are the top 3 highest selling products (total `purchase_amount`) in the last two weeks?
 *
 * Your answer should include the following:
 *
 * | Product ID | Total Purchase Amount |
 * | ---------- | --------------------- |
 * | P001       | $100.00               |
 * | P002       | $50.00                |
 * | P003       | $25.00                |
 *
 * Implement your answer below:
 */

// Define the threshold for "last two weeks" (14 days)
const today = new Date(2024, 9, 1); // October 1, 2024 (month is 0-indexed)

const transactions = [
  {
    transaction_id: "T12345",
    product_id: "P001",
    customer_id: "C123",
    purchase_date: "2024-09-15",
    purchase_amount: 199.99,
    city: "New York",
    state: "NY",
    country: "USA"
  },
  {
    transaction_id: "T12346",
    product_id: "P002",
    customer_id: "C124",
    purchase_date: "2024-09-20",
    purchase_amount: 99.99,
    city: "Los Angeles",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12347",
    product_id: "P003",
    customer_id: "C125",
    purchase_date: "2024-09-05",
    purchase_amount: 249.99,
    city: "Chicago",
    state: "IL",
    country: "USA"
  },
  {
    transaction_id: "T12348",
    product_id: "P004",
    customer_id: "C126",
    purchase_date: "2024-09-25",
    purchase_amount: 179.99,
    city: "Houston",
    state: "TX",
    country: "USA"
  },
  {
    transaction_id: "T12349",
    product_id: "P005",
    customer_id: "C127",
    purchase_date: "2024-09-10",
    purchase_amount: 299.99,
    city: "Phoenix",
    state: "AZ",
    country: "USA"
  },
  {
    transaction_id: "T12350",
    product_id: "P006",
    customer_id: "C128",
    purchase_date: "2024-09-18",
    purchase_amount: 149.99,
    city: "Dallas",
    state: "TX",
    country: "USA"
  },
  {
    transaction_id: "T12369",
    product_id: "P001",
    customer_id: "C123",
    purchase_date: "2024-09-15",
    purchase_amount: 199.99,
    city: "New York",
    state: "NY",
    country: "USA"
  },
  {
    transaction_id: "T12370",
    product_id: "P002",
    customer_id: "C124",
    purchase_date: "2024-09-20",
    purchase_amount: 99.99,
    city: "Los Angeles",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12371",
    product_id: "P003",
    customer_id: "C125",
    purchase_date: "2024-09-05",
    purchase_amount: 249.99,
    city: "Chicago",
    state: "IL",
    country: "USA"
  },
  {
    transaction_id: "T12360",
    product_id: "P007",
    customer_id: "C130",
    purchase_date: "2024-09-23",
    purchase_amount: 159.99,
    city: "Seattle",
    state: "WA",
    country: "USA"
  },
  {
    transaction_id: "T12361",
    product_id: "P008",
    customer_id: "C131",
    purchase_date: "2024-09-08",
    purchase_amount: 279.99,
    city: "Denver",
    state: "CO",
    country: "USA"
  },
  {
    transaction_id: "T12362",
    product_id: "P009",
    customer_id: "C132",
    purchase_date: "2024-09-27",
    purchase_amount: 139.99,
    city: "San Francisco",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12363",
    product_id: "P001",
    customer_id: "C133",
    purchase_date: "2024-09-30",
    purchase_amount: 189.99,
    city: "Boston",
    state: "MA",
    country: "USA"
  },
  {
    transaction_id: "T12364",
    product_id: "P005",
    customer_id: "C134",
    purchase_date: "2024-09-21",
    purchase_amount: 259.99,
    city: "Miami",
    state: "FL",
    country: "USA"
  },
  {
    transaction_id: "T12365",
    product_id: "P002",
    customer_id: "C135",
    purchase_date: "2024-09-12",
    purchase_amount: 119.99,
    city: "Philadelphia",
    state: "PA",
    country: "USA"
  },
  {
    transaction_id: "T12366",
    product_id: "P003",
    customer_id: "C136",
    purchase_date: "2024-09-07",
    purchase_amount: 239.99,
    city: "Detroit",
    state: "MI",
    country: "USA"
  },
  {
    transaction_id: "T12367",
    product_id: "P004",
    customer_id: "C137",
    purchase_date: "2024-09-28",
    purchase_amount: 169.99,
    city: "Atlanta",
    state: "GA",
    country: "USA"
  },
  {
    transaction_id: "T12368",
    product_id: "P006",
    customer_id: "C138",
    purchase_date: "2024-09-17",
    purchase_amount: 139.99,
    city: "Portland",
    state: "OR",
    country: "USA"
  }
];

function top3Products(today, transactions) {
  // Calculate two weeks ago
  const twoWeeksAgo = new Date(today);
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  twoWeeksAgo.setHours(0, 0, 0, 0);

  // Helper function to parse date string as local date (not UTC)
  const parseLocalDate = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month is 0-indexed
  };

  // Filter transactions within the last two weeks
  const filteredTransactions = transactions.filter(transaction => {
    const purchaseDate = parseLocalDate(transaction.purchase_date);
    return purchaseDate >= twoWeeksAgo;
  });

  // Calculate total purchase amount for each product
  const productTotals = {};
  for (const transaction of filteredTransactions) {
    const productId = transaction.product_id;
    const purchaseAmount = transaction.purchase_amount;
    productTotals[productId] = (productTotals[productId] || 0) + purchaseAmount;
  }

  // Sort products by total purchase amount (descending)
  const sortedProducts = Object.entries(productTotals)
    .sort((a, b) => b[1] - a[1]);

  // Get the top 3 highest-selling products
  const top3Products = sortedProducts.slice(0, 3);

  // Print the results
  console.log("Top 3 Highest-Selling Products (Last Two Weeks):");
  console.log("--------------------------------");
  console.log("| Product ID | Total Purchase Amount |");
  for (const [productId, totalAmount] of top3Products) {
    console.log(`| ${productId}       | $${totalAmount.toFixed(2)}               |`);
  }
}

top3Products(today, transactions);

/**
 * Answer:
 * Top 3 Highest-Selling Products (Last Two Weeks):
 * --------------------------------
 * | Product ID | Total Purchase Amount |
 * | P004       | $349.98               |
 * | P006       | $289.98               |
 * | P005       | $259.99               |
 */

/**
 * What happens if we include returns in the data set?
 * Show return values in the data set and recalculate the top 3 highest revenue products
 * (total `purchase_amount` minus `refund_amount`)
 *
 * Your answer should include the following:
 *
 * | Product ID | Net Revenue |
 * | ---------- | ----------- |
 * | P001       | $100.00     |
 * | P002       | $50.00      |
 * | P003       | $25.00      |
 *
 * Implement your answer below:
 */

const transactionsWithReturns = [
  {
    transaction_id: "T12345",
    product_id: "P001",
    customer_id: "C123",
    purchase_date: "2024-09-15",
    purchase_amount: 199.99,
    refund_amount: 0.0,
    city: "New York",
    state: "NY",
    country: "USA"
  },
  {
    transaction_id: "T12346",
    product_id: "P002",
    customer_id: "C124",
    purchase_date: "2024-09-20",
    purchase_amount: 99.99,
    refund_amount: 0.0,
    city: "Los Angeles",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12347",
    product_id: "P003",
    customer_id: "C125",
    purchase_date: "2024-09-05",
    purchase_amount: 249.99,
    refund_amount: 249.99,
    city: "Chicago",
    state: "IL",
    country: "USA"
  },
  {
    transaction_id: "T12348",
    product_id: "P004",
    customer_id: "C126",
    purchase_date: "2024-09-25",
    purchase_amount: 179.99,
    refund_amount: 0.0,
    city: "Houston",
    state: "TX",
    country: "USA"
  },
  {
    transaction_id: "T12349",
    product_id: "P005",
    customer_id: "C127",
    purchase_date: "2024-09-10",
    purchase_amount: 299.99,
    refund_amount: 0.0,
    city: "Phoenix",
    state: "AZ",
    country: "USA"
  },
  {
    transaction_id: "T12350",
    product_id: "P006",
    customer_id: "C128",
    purchase_date: "2024-09-18",
    purchase_amount: 149.99,
    refund_amount: 20.0,
    city: "Dallas",
    state: "TX",
    country: "USA"
  },
  {
    transaction_id: "T12372",
    product_id: "P001",
    customer_id: "C123",
    purchase_date: "2024-09-15",
    purchase_amount: 199.99,
    refund_amount: 0.0,
    city: "New York",
    state: "NY",
    country: "USA"
  },
  {
    transaction_id: "T12373",
    product_id: "P002",
    customer_id: "C124",
    purchase_date: "2024-09-20",
    purchase_amount: 99.99,
    refund_amount: 0.0,
    city: "Los Angeles",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12374",
    product_id: "P003",
    customer_id: "C125",
    purchase_date: "2024-09-05",
    purchase_amount: 249.99,
    refund_amount: 0.0,
    city: "Chicago",
    state: "IL",
    country: "USA"
  },
  {
    transaction_id: "T12360",
    product_id: "P007",
    customer_id: "C130",
    purchase_date: "2024-09-23",
    purchase_amount: 159.99,
    refund_amount: 0.0,
    city: "Seattle",
    state: "WA",
    country: "USA"
  },
  {
    transaction_id: "T12361",
    product_id: "P008",
    customer_id: "C131",
    purchase_date: "2024-09-08",
    purchase_amount: 279.99,
    refund_amount: 279.99,
    city: "Denver",
    state: "CO",
    country: "USA"
  },
  {
    transaction_id: "T12362",
    product_id: "P009",
    customer_id: "C132",
    purchase_date: "2024-09-27",
    purchase_amount: 139.99,
    refund_amount: 0.0,
    city: "San Francisco",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12363",
    product_id: "P001",
    customer_id: "C133",
    purchase_date: "2024-09-30",
    purchase_amount: 189.99,
    refund_amount: 0.0,
    city: "Boston",
    state: "MA",
    country: "USA"
  },
  {
    transaction_id: "T12364",
    product_id: "P005",
    customer_id: "C134",
    purchase_date: "2024-09-21",
    purchase_amount: 259.99,
    refund_amount: 30.0,
    city: "Miami",
    state: "FL",
    country: "USA"
  },
  {
    transaction_id: "T12365",
    product_id: "P002",
    customer_id: "C135",
    purchase_date: "2024-09-12",
    purchase_amount: 119.99,
    refund_amount: 0.0,
    city: "Philadelphia",
    state: "PA",
    country: "USA"
  },
  {
    transaction_id: "T12366",
    product_id: "P003",
    customer_id: "C136",
    purchase_date: "2024-09-07",
    purchase_amount: 239.99,
    refund_amount: 0.0,
    city: "Detroit",
    state: "MI",
    country: "USA"
  },
  {
    transaction_id: "T12367",
    product_id: "P004",
    customer_id: "C137",
    purchase_date: "2024-09-28",
    purchase_amount: 169.99,
    refund_amount: 0.0,
    city: "Atlanta",
    state: "GA",
    country: "USA"
  }
];

console.log("--------------------------------");

function top3ProductsWithReturns(today, transactions) {
  // Calculate two weeks ago
  const twoWeeksAgo = new Date(today);
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  twoWeeksAgo.setHours(0, 0, 0, 0);

  // Helper function to parse date string as local date (not UTC)
  const parseLocalDate = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month is 0-indexed
  };

  // Filter transactions within the last two weeks
  const filteredTransactions = transactions.filter(transaction => {
    const purchaseDate = parseLocalDate(transaction.purchase_date);
    return purchaseDate >= twoWeeksAgo;
  });

  // Calculate net revenue for each product (purchase_amount - refund_amount)
  const productTotals = {};
  for (const transaction of filteredTransactions) {
    const productId = transaction.product_id;
    const purchaseAmount = transaction.purchase_amount;
    const refundAmount = transaction.refund_amount;
    productTotals[productId] = (productTotals[productId] || 0) + purchaseAmount - refundAmount;
  }

  // Sort products by net revenue (descending)
  const sortedProducts = Object.entries(productTotals)
    .sort((a, b) => b[1] - a[1]);

  // Get the top 3 highest revenue products
  const top3Products = sortedProducts.slice(0, 3);

  // Print the results
  console.log("Top 3 Highest Revenue Products (Last Two Weeks):");
  console.log("--------------------------------");
  console.log("| Product ID | Net Revenue |");
  for (const [productId, totalAmount] of top3Products) {
    console.log(`| ${productId}       | $${totalAmount.toFixed(2)}     |`);
  }
}

top3ProductsWithReturns(today, transactionsWithReturns);

/**
 * Answer:
 * Top 3 Highest Revenue Products (Last Two Weeks):
 * --------------------------------
 * | Product ID | Net Revenue |
 * | P004       | $349.98     |
 * | P005       | $229.99     |
 * | P002       | $199.98     |
 */

