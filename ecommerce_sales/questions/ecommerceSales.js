/**
 * Mock Technical Interview: E-Commerce Sales
 * Focus on communicating your thinking and approach to the problem as you work.
 *
 * ----------------------------------------------------------------------------
 * PART 1: Top 3 Highest-Selling Products (Last 14 Days)
 * ----------------------------------------------------------------------------
 * Given a list of `transactions`, find the top 3 highest-selling products
 * by total `purchase_amount` within the last two weeks (`days_ago <= 14`).
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
 * Your output should display or return the top 3 products and their totals
 * (exact table formatting is not required — logging or returning an array/object is great!):
 *
 * | Product ID | Total Purchase Amount |
 * | ---------- | --------------------- |
 * | P001       | $100.00               |
 * | P002       | $50.00                |
 * | P003       | $25.00                |
 */

const maxDaysAgo = 14; // Threshold for "last two weeks" (days_ago <= 14)

const transactions = [
  { transaction_id: "T12345", product_id: "P001", customer_id: "C123", days_ago: 16, purchase_amount: 199.99, city: "New York", state: "NY", country: "USA" },
  { transaction_id: "T12346", product_id: "P002", customer_id: "C124", days_ago: 11, purchase_amount: 99.99, city: "Los Angeles", state: "CA", country: "USA" },
  { transaction_id: "T12347", product_id: "P003", customer_id: "C125", days_ago: 26, purchase_amount: 249.99, city: "Chicago", state: "IL", country: "USA" },
  { transaction_id: "T12348", product_id: "P004", customer_id: "C126", days_ago: 6, purchase_amount: 179.99, city: "Houston", state: "TX", country: "USA" },
  { transaction_id: "T12349", product_id: "P005", customer_id: "C127", days_ago: 21, purchase_amount: 299.99, city: "Phoenix", state: "AZ", country: "USA" },
  { transaction_id: "T12350", product_id: "P006", customer_id: "C128", days_ago: 13, purchase_amount: 149.99, city: "Dallas", state: "TX", country: "USA" },
  { transaction_id: "T12369", product_id: "P001", customer_id: "C123", days_ago: 16, purchase_amount: 199.99, city: "New York", state: "NY", country: "USA" },
  { transaction_id: "T12370", product_id: "P002", customer_id: "C124", days_ago: 11, purchase_amount: 99.99, city: "Los Angeles", state: "CA", country: "USA" },
  { transaction_id: "T12371", product_id: "P003", customer_id: "C125", days_ago: 26, purchase_amount: 249.99, city: "Chicago", state: "IL", country: "USA" },
  { transaction_id: "T12360", product_id: "P007", customer_id: "C130", days_ago: 8, purchase_amount: 159.99, city: "Seattle", state: "WA", country: "USA" },
  { transaction_id: "T12361", product_id: "P008", customer_id: "C131", days_ago: 23, purchase_amount: 279.99, city: "Denver", state: "CO", country: "USA" },
  { transaction_id: "T12362", product_id: "P009", customer_id: "C132", days_ago: 4, purchase_amount: 139.99, city: "San Francisco", state: "CA", country: "USA" },
  { transaction_id: "T12363", product_id: "P001", customer_id: "C133", days_ago: 1, purchase_amount: 189.99, city: "Boston", state: "MA", country: "USA" },
  { transaction_id: "T12364", product_id: "P005", customer_id: "C134", days_ago: 10, purchase_amount: 259.99, city: "Miami", state: "FL", country: "USA" },
  { transaction_id: "T12365", product_id: "P002", customer_id: "C135", days_ago: 19, purchase_amount: 119.99, city: "Philadelphia", state: "PA", country: "USA" },
  { transaction_id: "T12366", product_id: "P003", customer_id: "C136", days_ago: 24, purchase_amount: 239.99, city: "Detroit", state: "MI", country: "USA" },
  { transaction_id: "T12367", product_id: "P004", customer_id: "C137", days_ago: 3, purchase_amount: 169.99, city: "Atlanta", state: "GA", country: "USA" },
  { transaction_id: "T12368", product_id: "P006", customer_id: "C138", days_ago: 14, purchase_amount: 139.99, city: "Portland", state: "OR", country: "USA" }
];

function top3Products(maxDaysAgo, transactions) {
  // Implement your solution here
}

top3Products(maxDaysAgo, transactions);

/**
 * ----------------------------------------------------------------------------
 * PART 2: Accounting for Returns / Refunds
 * ----------------------------------------------------------------------------
 * What happens if we include returns in the data set?
 * Each transaction now includes a `refund_amount` field.
 * Recalculate the top 3 highest net-revenue products in the last two weeks
 * (`days_ago <= 14`), where net revenue is `purchase_amount` minus `refund_amount`.
 *
 * | Product ID | Net Revenue |
 * | ---------- | ----------- |
 * | P001       | $100.00     |
 * | P002       | $50.00      |
 * | P003       | $25.00      |
 */

const transactionsWithReturns = [
  { transaction_id: "T12345", product_id: "P001", customer_id: "C123", days_ago: 16, purchase_amount: 199.99, refund_amount: 0.0, city: "New York", state: "NY", country: "USA" },
  { transaction_id: "T12346", product_id: "P002", customer_id: "C124", days_ago: 11, purchase_amount: 99.99, refund_amount: 0.0, city: "Los Angeles", state: "CA", country: "USA" },
  { transaction_id: "T12347", product_id: "P003", customer_id: "C125", days_ago: 26, purchase_amount: 249.99, refund_amount: 249.99, city: "Chicago", state: "IL", country: "USA" },
  { transaction_id: "T12348", product_id: "P004", customer_id: "C126", days_ago: 6, purchase_amount: 179.99, refund_amount: 0.0, city: "Houston", state: "TX", country: "USA" },
  { transaction_id: "T12349", product_id: "P005", customer_id: "C127", days_ago: 21, purchase_amount: 299.99, refund_amount: 0.0, city: "Phoenix", state: "AZ", country: "USA" },
  { transaction_id: "T12350", product_id: "P006", customer_id: "C128", days_ago: 13, purchase_amount: 149.99, refund_amount: 20.0, city: "Dallas", state: "TX", country: "USA" },
  { transaction_id: "T12369", product_id: "P001", customer_id: "C123", days_ago: 16, purchase_amount: 199.99, refund_amount: 0.0, city: "New York", state: "NY", country: "USA" },
  { transaction_id: "T12370", product_id: "P002", customer_id: "C124", days_ago: 11, purchase_amount: 99.99, refund_amount: 0.0, city: "Los Angeles", state: "CA", country: "USA" },
  { transaction_id: "T12371", product_id: "P003", customer_id: "C125", days_ago: 26, purchase_amount: 249.99, refund_amount: 0.0, city: "Chicago", state: "IL", country: "USA" },
  { transaction_id: "T12360", product_id: "P007", customer_id: "C130", days_ago: 8, purchase_amount: 159.99, refund_amount: 0.0, city: "Seattle", state: "WA", country: "USA" },
  { transaction_id: "T12361", product_id: "P008", customer_id: "C131", days_ago: 23, purchase_amount: 279.99, refund_amount: 279.99, city: "Denver", state: "CO", country: "USA" },
  { transaction_id: "T12362", product_id: "P009", customer_id: "C132", days_ago: 4, purchase_amount: 139.99, refund_amount: 0.0, city: "San Francisco", state: "CA", country: "USA" },
  { transaction_id: "T12363", product_id: "P001", customer_id: "C133", days_ago: 1, purchase_amount: 189.99, refund_amount: 0.0, city: "Boston", state: "MA", country: "USA" },
  { transaction_id: "T12364", product_id: "P005", customer_id: "C134", days_ago: 10, purchase_amount: 259.99, refund_amount: 30.0, city: "Miami", state: "FL", country: "USA" },
  { transaction_id: "T12365", product_id: "P002", customer_id: "C135", days_ago: 19, purchase_amount: 119.99, refund_amount: 0.0, city: "Philadelphia", state: "PA", country: "USA" },
  { transaction_id: "T12366", product_id: "P003", customer_id: "C136", days_ago: 24, purchase_amount: 239.99, refund_amount: 0.0, city: "Detroit", state: "MI", country: "USA" },
  { transaction_id: "T12367", product_id: "P004", customer_id: "C137", days_ago: 3, purchase_amount: 169.99, refund_amount: 0.0, city: "Atlanta", state: "GA", country: "USA" },
  { transaction_id: "T12368", product_id: "P006", customer_id: "C138", days_ago: 14, purchase_amount: 139.99, refund_amount: 139.99, city: "Portland", state: "OR", country: "USA" }
];

console.log("--------------------------------");

function top3ProductsWithReturns(maxDaysAgo, transactions) {
  // Implement your solution here
}

top3ProductsWithReturns(maxDaysAgo, transactionsWithReturns);
