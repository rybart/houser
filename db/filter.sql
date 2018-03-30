SELECT * FROM property
WHERE user_id = $1
and desired_rent > $2