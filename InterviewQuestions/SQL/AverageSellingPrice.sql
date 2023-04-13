/* There are two tricks that might make this query a bit difficult:

How do we join the tables together when we have start and end dates on one and just a purchase date on the other?
The calculation of the average is not straight forward...
Let's tackle these one-by-one.

1. So how do we join this data together? The trick here is that you can use any logical operator you want to join tables.
 We're used to seeing joins done like this JOIN t2 ON t2.column = t1.column, but we are not limited to only using = for join logic. 
 We could just as easily do ON t2.column LIKE t1.column, or use AND and OR to combine logic for more complex joins. In fact, 
 any logic that you can use in a WHERE clause can be used in your JOIN clauses, and more complicated joins can read very much 
 like a WHERE clause.

For this problem, we want to join these tables where product_id values are equal AND where the unit purchase date 
is BETWEEN the start_date and end_date values of the prices table. So this join will be tricky, in that we are joining 
based on two criteria (product_id and dates) and that we are using BETWEEN as the logical operator to join based on the dates.
 So this is what our join will look like:

FROM unitssold u 
JOIN prices p ON 1=1
    AND p.product_id = u.product_id 
    AND u.purchase_date BETWEEN p.start_date AND p.end_date
Note: you might wonder why that "ON 1=1" is there. It doesn't actually do anything at all; it is just a trick 
that allows us to separate the real logical steps of our join onto separate lines for readability's sake. Since 1=1 is always True, then 1=1 AND other_condition will only depend on other_condition, so we can add it to the join without it affecting anything. Note on the Note: if you are using OR rather than AND, then putting 1=0 will have the same effect.

2. How do we calculate this weird average? We're provided the following formula to calculate the average price,
 Average selling price = Total Price of Product / Number of products sold. So how do we get these numbers? 
 The denominator is easy enough: just SUM(unitssold.units). The numerator requires a bit of thinking.
  The "Total Price of Product" would be more accurately named "Extended Price of Product," which is a fancy retail name for...
   "Sales". "Sales" is pretty easy to wrap your head around; it's just SUM(price * units). So our average selling price is calculated 
   by SUM(price * units) / SUM(units).

Now, we're not quite done. We're using the aggregate, or group, function SUM here, so we need to ask ourselves 
Over what group are we calculating the sum? We need the average price by product, so we will need to group our query by product_id.

Now we have our final query:

SELECT
    u.product_id,
    ROUND(SUM(p.price * u.units) / SUM(u.units), 2) AS average_price    -- Note: the prompt requires us to round results to 2 places.
FROM unitssold u 
JOIN prices p ON 1=1  -- remember, the 1=1 is just so we can format the code better.
    AND p.product_id = u.product_id 
    AND u.purchase_date BETWEEN p.start_date AND p.end_date  -- we can use any logic to join two tables, not just "="
GROUP BY u.product_id
*/

select u.product_id, round(sum(p.price * u.units)/sum(u.units), 2) as average_price 
from unitssold u join prices p on 1=1 and p.product_id = u.product_id 
and u.purchase_date BETWEEN p.start_date and p.end_date group by u.product_id


