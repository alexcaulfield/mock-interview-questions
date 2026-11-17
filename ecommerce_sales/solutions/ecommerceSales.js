/**
 * Mock Technical Interview: E-Commerce Sales (Reference Solution)
 * Focus on communicating your thinking and approach to the problem as you work.
 *
 * ----------------------------------------------------------------------------
 * PART 1: Top 3 Highest-Selling Products (Last 14 Days)
 * ----------------------------------------------------------------------------
 * Given a list of `transactions`, find the top 3 highest-selling products
 * by total `purchase_amount` within the last two weeks.
 *
 * Each transaction object has the following shape:
 * {
 *   transaction_id: "T12345",
 *   product_id: "P001",
 *   customer_id: "C123",
 *   days_ago: 16,
 *   purchase_amount: 199.99,
 *   city: "New York",
 *   state: "NY",
 *   country: "USA"
 * }
 *
 * Your output should display or return the top 3 products and their totals:
 *
 * | Product ID | Total Purchase Amount |
 * | ---------- | --------------------- |
 * | P001       | $100.00               |
 * | P002       | $50.00                |
 * | P003       | $25.00                |
 */

const maxDaysAgo = 14;

const transactions = [
  {
    transaction_id: "T12345",
    product_id: "P001",
    customer_id: "C123",
    days_ago: 16,
    purchase_amount: 199.99,
    city: "New York",
    state: "NY",
    country: "USA"
  },
  {
    transaction_id: "T12346",
    product_id: "P002",
    customer_id: "C124",
    days_ago: 11,
    purchase_amount: 99.99,
    city: "Los Angeles",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12347",
    product_id: "P003",
    customer_id: "C125",
    days_ago: 26,
    purchase_amount: 249.99,
    city: "Chicago",
    state: "IL",
    country: "USA"
  },
  {
    transaction_id: "T12348",
    product_id: "P004",
    customer_id: "C126",
    days_ago: 6,
    purchase_amount: 179.99,
    city: "Houston",
    state: "TX",
    country: "USA"
  },
  {
    transaction_id: "T12349",
    product_id: "P005",
    customer_id: "C127",
    days_ago: 21,
    purchase_amount: 299.99,
    city: "Phoenix",
    state: "AZ",
    country: "USA"
  },
  {
    transaction_id: "T12350",
    product_id: "P006",
    customer_id: "C128",
    days_ago: 13,
    purchase_amount: 149.99,
    city: "Dallas",
    state: "TX",
    country: "USA"
  },
  {
    transaction_id: "T12369",
    product_id: "P001",
    customer_id: "C123",
    days_ago: 16,
    purchase_amount: 199.99,
    city: "New York",
    state: "NY",
    country: "USA"
  },
  {
    transaction_id: "T12370",
    product_id: "P002",
    customer_id: "C124",
    days_ago: 11,
    purchase_amount: 99.99,
    city: "Los Angeles",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12371",
    product_id: "P003",
    customer_id: "C125",
    days_ago: 26,
    purchase_amount: 249.99,
    city: "Chicago",
    state: "IL",
    country: "USA"
  },
  {
    transaction_id: "T12360",
    product_id: "P007",
    customer_id: "C130",
    days_ago: 8,
    purchase_amount: 159.99,
    city: "Seattle",
    state: "WA",
    country: "USA"
  },
  {
    transaction_id: "T12361",
    product_id: "P008",
    customer_id: "C131",
    days_ago: 23,
    purchase_amount: 279.99,
    city: "Denver",
    state: "CO",
    country: "USA"
  },
  {
    transaction_id: "T12362",
    product_id: "P009",
    customer_id: "C132",
    days_ago: 4,
    purchase_amount: 139.99,
    city: "San Francisco",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12363",
    product_id: "P001",
    customer_id: "C133",
    days_ago: 1,
    purchase_amount: 189.99,
    city: "Boston",
    state: "MA",
    country: "USA"
  },
  {
    transaction_id: "T12364",
    product_id: "P005",
    customer_id: "C134",
    days_ago: 10,
    purchase_amount: 259.99,
    city: "Miami",
    state: "FL",
    country: "USA"
  },
  {
    transaction_id: "T12365",
    product_id: "P002",
    customer_id: "C135",
    days_ago: 19,
    purchase_amount: 119.99,
    city: "Philadelphia",
    state: "PA",
    country: "USA"
  },
  {
    transaction_id: "T12366",
    product_id: "P003",
    customer_id: "C136",
    days_ago: 24,
    purchase_amount: 239.99,
    city: "Detroit",
    state: "MI",
    country: "USA"
  },
  {
    transaction_id: "T12367",
    product_id: "P004",
    customer_id: "C137",
    days_ago: 3,
    purchase_amount: 169.99,
    city: "Atlanta",
    state: "GA",
    country: "USA"
  },
  {
    transaction_id: "T12368",
    product_id: "P006",
    customer_id: "C138",
    days_ago: 14,
    purchase_amount: 139.99,
    city: "Portland",
    state: "OR",
    country: "USA"
  }
];

function top3Products(maxDaysAgo, transactions) {
  // Filter transactions within the last two weeks
  const filteredTransactions = transactions.filter(transaction => {
    return transaction.days_ago <= maxDaysAgo;
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

top3Products(maxDaysAgo, transactions);

/**
 * Answer (Part 1):
 * Top 3 Highest-Selling Products (Last Two Weeks):
 * --------------------------------
 * | Product ID | Total Purchase Amount |
 * | P004       | $349.98               |
 * | P006       | $289.98               |
 * | P005       | $259.99               |
 *
 * Full recent product breakdown (days_ago <= 14):
 * - P004: $179.99 + $169.99 = $349.98
 * - P006: $149.99 + $139.99 = $289.98
 * - P005: $259.99
 * - P002: $99.99 + $99.99 = $199.98
 * - P001: $189.99
 * - P007: $159.99
 * - P009: $139.99
 */

/**
 * ----------------------------------------------------------------------------
 * PART 2: Accounting for Returns / Refunds
 * ----------------------------------------------------------------------------
 * What happens if we include returns in the data set?
 * Each transaction now includes a `refund_amount` field.
 * Recalculate the top 3 highest net-revenue products in the last two weeks.
 *
 * | Product ID | Net Revenue |
 * | ---------- | ----------- |
 * | P001       | $100.00     |
 * | P002       | $50.00      |
 * | P003       | $25.00      |
 */

const transactionsWithReturns = [
  {
    transaction_id: "T12345",
    product_id: "P001",
    customer_id: "C123",
    days_ago: 16,
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
    days_ago: 11,
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
    days_ago: 26,
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
    days_ago: 6,
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
    days_ago: 21,
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
    days_ago: 13,
    purchase_amount: 149.99,
    refund_amount: 20.0,
    city: "Dallas",
    state: "TX",
    country: "USA"
  },
  {
    transaction_id: "T12369",
    product_id: "P001",
    customer_id: "C123",
    days_ago: 16,
    purchase_amount: 199.99,
    refund_amount: 0.0,
    city: "New York",
    state: "NY",
    country: "USA"
  },
  {
    transaction_id: "T12370",
    product_id: "P002",
    customer_id: "C124",
    days_ago: 11,
    purchase_amount: 99.99,
    refund_amount: 0.0,
    city: "Los Angeles",
    state: "CA",
    country: "USA"
  },
  {
    transaction_id: "T12371",
    product_id: "P003",
    customer_id: "C125",
    days_ago: 26,
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
    days_ago: 8,
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
    days_ago: 23,
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
    days_ago: 4,
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
    days_ago: 1,
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
    days_ago: 10,
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
    days_ago: 19,
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
    days_ago: 24,
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
    days_ago: 3,
    purchase_amount: 169.99,
    refund_amount: 0.0,
    city: "Atlanta",
    state: "GA",
    country: "USA"
  },
  {
    transaction_id: "T12368",
    product_id: "P006",
    customer_id: "C138",
    days_ago: 14,
    purchase_amount: 139.99,
    refund_amount: 139.99,
    city: "Portland",
    state: "OR",
    country: "USA"
  }
];

console.log("--------------------------------");

function top3ProductsWithReturns(maxDaysAgo, transactions) {
  // Filter transactions within the last two weeks
  const filteredTransactions = transactions.filter(transaction => {
    return transaction.days_ago <= maxDaysAgo;
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

top3ProductsWithReturns(maxDaysAgo, transactionsWithReturns);

/**
 * Answer (Part 2):
 * Top 3 Highest Revenue Products (Last Two Weeks):
 * --------------------------------
 * | Product ID | Net Revenue |
 * | P004       | $349.98     |
 * | P005       | $229.99     |
 * | P002       | $199.98     |
 *
 * Full recent product net revenue breakdown (days_ago <= 14):
 * - P004: $179.99 + $169.99 = $349.98
 * - P005: $259.99 - $30.00 = $229.99
 * - P002: $99.99 + $99.99 = $199.98
 * - P001: $189.99
 * - P007: $159.99
 * - P009: $139.99
 * - P006: ($149.99 - $20.00) + ($139.99 - $139.99) = $129.99 (drops out of top 3 due to returns!)
 */

console.log("--------------------------------");

/**
 * ----------------------------------------------------------------------------
 * PART 3: Best 14-Day Range for a Single Product
 * ----------------------------------------------------------------------------
 * Looking across the entire `transactionsWithReturns` dataset (not just the
 * most recent two weeks), what is the 14-day range with the highest-selling
 * product, period?
 *
 * Output the 14-day range, the product ID, and its net revenue during that period.
 *
 * | 14-Day Range (Days Ago) | Product ID | Net Revenue |
 * | ----------------------- | ---------- | ----------- |
 * | 1 - 14                  | P001       | $100.00     |
 */

function highestSellingProductWindow(windowSize, transactions) {
  // Sort transactions by days_ago ascending
  const sortedTransactions = [...transactions].sort((a, b) => a.days_ago - b.days_ago);

  const windowTotals = {};
  let left = 0;

  let bestProduct = null;
  let bestRevenue = -Infinity;
  let bestRange = null;

  // Slide the window across sorted transactions using two pointers
  for (let right = 0; right < sortedTransactions.length; right++) {
    const incoming = sortedTransactions[right];
    const incomingId = incoming.product_id;
    const incomingNet = incoming.purchase_amount - incoming.refund_amount;

    // Add incoming transaction to the current window
    windowTotals[incomingId] = (windowTotals[incomingId] || 0) + incomingNet;

    // Shrink window from the left while the span exceeds windowSize
    while (incoming.days_ago - sortedTransactions[left].days_ago > windowSize) {
      const outgoing = sortedTransactions[left];
      const outgoingId = outgoing.product_id;
      const outgoingNet = outgoing.purchase_amount - outgoing.refund_amount;

      windowTotals[outgoingId] -= outgoingNet;
      left++;
    }

    // Update best result if the current product's window total is the highest seen
    if (windowTotals[incomingId] > bestRevenue) {
      bestRevenue = windowTotals[incomingId];
      bestProduct = incomingId;
      const startDay = Math.max(1, incoming.days_ago - windowSize);
      bestRange = `${startDay} - ${incoming.days_ago}`;
    }
  }

  // Print the results
  console.log("Highest-Selling Product in Any 14-Day Range:");
  console.log("--------------------------------");
  console.log("| 14-Day Range (Days Ago) | Product ID | Net Revenue |");
  console.log(`| ${bestRange.padEnd(23)} | ${bestProduct}       | $${bestRevenue.toFixed(2)}     |`);
}

highestSellingProductWindow(maxDaysAgo, transactionsWithReturns);

/**
 * Answer (Part 3):
 * Highest-Selling Product in Any 14-Day Range:
 * --------------------------------
 * | 14-Day Range (Days Ago) | Product ID | Net Revenue |
 * | 7 - 21                  | P005       | $529.98     |
 *
 * Breakdown & Interviewer Notes:
 * - Winner: P005 with $529.98 net revenue
 *   - T12364 (days_ago: 10): $259.99 - $30.00 = $229.99
 *   - T12349 (days_ago: 21): $299.99 - $0.00  = $299.99
 * - Tied Windows: Any 14-day window that includes both days_ago 10 and 21 is valid:
 *   - Using `endDay - startDay <= 14`: [7 - 21], [8 - 22], [9 - 23], [10 - 24]
 *   - Using `endDay - startDay < 14` (14 discrete calendar days): [8 - 21], [9 - 22], [10 - 23]
 * - Notable Edge Case (P001):
 *   - P001 has $589.97 in total all-time net revenue ($189.99 on day 1 + $399.98 on day 16),
 *     but days_ago 1 and 16 are 15 days apart, so they cannot fit in the same 14-day window.
 * - Runner-up in a 14-day window:
 *   - P003: $489.98 ($239.99 on day 24 + $249.99 on day 26; the other day 26 order was fully refunded)
 */
