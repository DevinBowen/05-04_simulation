-- 107E
select cart.food as selected, cost from cart
-- 107D
join price on cart.food = price.food;