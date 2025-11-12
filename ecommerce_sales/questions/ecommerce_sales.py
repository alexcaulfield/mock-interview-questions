'''
This is a mock interview question. Focus on communicating your thinking and approach to the problem.

What are the top 3 highest selling products (total `purchase_amount`) in the last two weeks?

Your answer should include the following:

| Product ID | Total Purchase Amount |
| ---------- | --------------------- |
| P001       | $100.00               |
| P002       | $50.00                |
| P003       | $25.00                |

Implement your answer below:
'''

import datetime

# Define the threshold for "last two weeks" (14 days)
today = datetime.date(2024, 10, 1)

transactions = [
  {
    "transaction_id": "T12345",
    "product_id": "P001",
    "customer_id": "C123",
    "purchase_date": "2024-09-15",
    "purchase_amount": 199.99,
    "city": "New York",
    "state": "NY",
    "country": "USA"
  },
  {
    "transaction_id": "T12346",
    "product_id": "P002",
    "customer_id": "C124",
    "purchase_date": "2024-09-20",
    "purchase_amount": 99.99,
    "city": "Los Angeles",
    "state": "CA",
    "country": "USA"
  },
  {
    "transaction_id": "T12347",
    "product_id": "P003",
    "customer_id": "C125",
    "purchase_date": "2024-09-05",
    "purchase_amount": 249.99,
    "city": "Chicago",
    "state": "IL",
    "country": "USA"
  },
    {
    "transaction_id": "T12348",
    "product_id": "P004",
    "customer_id": "C126",
    "purchase_date": "2024-09-25",
    "purchase_amount": 179.99,
    "city": "Houston",
    "state": "TX",
    "country": "USA"
  },
  {
    "transaction_id": "T12349",
    "product_id": "P005",
    "customer_id": "C127",
    "purchase_date": "2024-09-10",
    "purchase_amount": 299.99,
    "city": "Phoenix",
    "state": "AZ",
    "country": "USA"
  },
  {
    "transaction_id": "T12350",
    "product_id": "P006",
    "customer_id": "C128",
    "purchase_date": "2024-09-18",
    "purchase_amount": 149.99,
    "city": "Dallas",
    "state": "TX",
    "country": "USA"
  },
    {
    "transaction_id": "T12369",
    "product_id": "P001",
    "customer_id": "C123",
    "purchase_date": "2024-09-15",
    "purchase_amount": 199.99,
    "city": "New York",
    "state": "NY",
    "country": "USA"
  },
  {
    "transaction_id": "T12370",
    "product_id": "P002",
    "customer_id": "C124",
    "purchase_date": "2024-09-20",
    "purchase_amount": 99.99,
    "city": "Los Angeles",
    "state": "CA",
    "country": "USA"
  },
  {
    "transaction_id": "T12371",
    "product_id": "P003",
    "customer_id": "C125",
    "purchase_date": "2024-09-05",
    "purchase_amount": 249.99,
    "city": "Chicago",
    "state": "IL",
    "country": "USA"
  },
    {
    "transaction_id": "T12360",
    "product_id": "P007",
    "customer_id": "C130",
    "purchase_date": "2024-09-23",
    "purchase_amount": 159.99,
    "city": "Seattle",
    "state": "WA",
    "country": "USA"
  },
  {
    "transaction_id": "T12361",
    "product_id": "P008",
    "customer_id": "C131",
    "purchase_date": "2024-09-08",
    "purchase_amount": 279.99,
    "city": "Denver",
    "state": "CO",
    "country": "USA"
  },
  {
    "transaction_id": "T12362",
    "product_id": "P009",
    "customer_id": "C132",
    "purchase_date": "2024-09-27",
    "purchase_amount": 139.99,
    "city": "San Francisco",
    "state": "CA",
    "country": "USA"
  },
    {
    "transaction_id": "T12363",
    "product_id": "P001",
    "customer_id": "C133",
    "purchase_date": "2024-09-30",
    "purchase_amount": 189.99,
    "city": "Boston",
    "state": "MA",
    "country": "USA"
  },
  {
    "transaction_id": "T12364",
    "product_id": "P005",
    "customer_id": "C134",
    "purchase_date": "2024-09-21",
    "purchase_amount": 259.99,
    "city": "Miami",
    "state": "FL",
    "country": "USA"
  },
  {
    "transaction_id": "T12365",
    "product_id": "P002",
    "customer_id": "C135",
    "purchase_date": "2024-09-12",
    "purchase_amount": 119.99,
    "city": "Philadelphia",
    "state": "PA",
    "country": "USA"
  },
   {
    "transaction_id": "T12366",
    "product_id": "P003", 
    "customer_id": "C136",
    "purchase_date": "2024-09-07",
    "purchase_amount": 239.99,
    "city": "Detroit",
    "state": "MI",
    "country": "USA"
  },
  {
    "transaction_id": "T12367",
    "product_id": "P004",
    "customer_id": "C137",
    "purchase_date": "2024-09-28",
    "purchase_amount": 169.99,
    "city": "Atlanta",
    "state": "GA",
    "country": "USA"
  },
  {
    "transaction_id": "T12368",
    "product_id": "P006",
    "customer_id": "C138",
    "purchase_date": "2024-09-17",
    "purchase_amount": 139.99,
    "city": "Portland",
    "state": "OR",
    "country": "USA"
  },
]

def top_3_products(today, transactions):
  # implement this
  pass

top_3_products(today, transactions)

'''
What happens if we include returns in the data set? 
Show return values in the data set and recalculate the top 3 highest revenue products 
(total `purchase_amount` minus `refund_amount`)

Your answer should include the following:

| Product ID | Net Revenue |
| ---------- | ----------- |
| P001       | $100.00     |
| P002       | $50.00      |
| P003       | $25.00      |

Implement your answer below:
'''

transactions_with_returns = [
  {
    "transaction_id": "T12345",
    "product_id": "P001",
    "customer_id": "C123",
    "purchase_date": "2024-09-15",
    "purchase_amount": 199.99,
    "refund_amount": 0.0,
    "city": "New York",
    "state": "NY",
    "country": "USA"
  },
  {
    "transaction_id": "T12346",
    "product_id": "P002",
    "customer_id": "C124",
    "purchase_date": "2024-09-20",
    "purchase_amount": 99.99,
    "refund_amount": 0.0,
    "city": "Los Angeles",
    "state": "CA",
    "country": "USA"
  },
  {
    "transaction_id": "T12347",
    "product_id": "P003",
    "customer_id": "C125",
    "purchase_date": "2024-09-05",
    "purchase_amount": 249.99,
    "refund_amount": 249.99,
    "city": "Chicago",
    "state": "IL",
    "country": "USA"
  },
  {
    "transaction_id": "T12348",
    "product_id": "P004",
    "customer_id": "C126",
    "purchase_date": "2024-09-25",
    "purchase_amount": 179.99,
    "refund_amount": 0.0,
    "city": "Houston",
    "state": "TX",
    "country": "USA"
  },
  {
    "transaction_id": "T12349",
    "product_id": "P005",
    "customer_id": "C127",
    "purchase_date": "2024-09-10",
    "purchase_amount": 299.99,
    "refund_amount": 0.0,
    "city": "Phoenix",
    "state": "AZ",
    "country": "USA"
  },
  {
    "transaction_id": "T12350",
    "product_id": "P006",
    "customer_id": "C128",
    "purchase_date": "2024-09-18",
    "purchase_amount": 149.99,
    "refund_amount": 20.0,
    "city": "Dallas",
    "state": "TX",
    "country": "USA"
  },
  {
    "transaction_id": "T12372",
    "product_id": "P001",
    "customer_id": "C123",
    "purchase_date": "2024-09-15",
    "purchase_amount": 199.99,
    "refund_amount": 0.0,
    "city": "New York",
    "state": "NY",
    "country": "USA"
  },
  {
    "transaction_id": "T12373",
    "product_id": "P002",
    "customer_id": "C124",
    "purchase_date": "2024-09-20",
    "purchase_amount": 99.99,
    "refund_amount": 0.0,
    "city": "Los Angeles",
    "state": "CA",
    "country": "USA"
  },
  {
    "transaction_id": "T12374",
    "product_id": "P003",
    "customer_id": "C125",
    "purchase_date": "2024-09-05",
    "purchase_amount": 249.99,
    "refund_amount": 0.0,
    "city": "Chicago",
    "state": "IL",
    "country": "USA"
  },
  {
    "transaction_id": "T12360",
    "product_id": "P007",
    "customer_id": "C130",
    "purchase_date": "2024-09-23",
    "purchase_amount": 159.99,
    "refund_amount": 0.0,
    "city": "Seattle",
    "state": "WA",
    "country": "USA"
  },
  {
    "transaction_id": "T12361",
    "product_id": "P008",
    "customer_id": "C131",
    "purchase_date": "2024-09-08",
    "purchase_amount": 279.99,
    "refund_amount": 279.99,
    "city": "Denver",
    "state": "CO",
    "country": "USA"
  },
  {
    "transaction_id": "T12362",
    "product_id": "P009",
    "customer_id": "C132",
    "purchase_date": "2024-09-27",
    "purchase_amount": 139.99,
    "refund_amount": 0.0,
    "city": "San Francisco",
    "state": "CA",
    "country": "USA"
  },
  {
    "transaction_id": "T12363",
    "product_id": "P001",
    "customer_id": "C133",
    "purchase_date": "2024-09-30",
    "purchase_amount": 189.99,
    "refund_amount": 0.0,
    "city": "Boston",
    "state": "MA",
    "country": "USA"
  },
  {
    "transaction_id": "T12364",
    "product_id": "P005",
    "customer_id": "C134",
    "purchase_date": "2024-09-21",
    "purchase_amount": 259.99,
    "refund_amount": 30.0,
    "city": "Miami",
    "state": "FL",
    "country": "USA"
  },
  {
    "transaction_id": "T12365",
    "product_id": "P002",
    "customer_id": "C135",
    "purchase_date": "2024-09-12",
    "purchase_amount": 119.99,
    "refund_amount": 0.0,
    "city": "Philadelphia",
    "state": "PA",
    "country": "USA"
  },
  {
    "transaction_id": "T12366",
    "product_id": "P003",
    "customer_id": "C136",
    "purchase_date": "2024-09-07",
    "purchase_amount": 239.99,
    "refund_amount": 0.0,
    "city": "Detroit",
    "state": "MI",
    "country": "USA"
  },
  {
    "transaction_id": "T12367",
    "product_id": "P004",
    "customer_id": "C137",
    "purchase_date": "2024-09-28",
    "purchase_amount": 169.99,
    "refund_amount": 0.0,
    "city": "Atlanta",
    "state": "GA",
    "country": "USA"
  }
]

print("--------------------------------")

def top_3_products_with_returns(today, transactions):
  # implement this
  pass

top_3_products_with_returns(today, transactions_with_returns)
