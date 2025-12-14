CREATE TABLE memowall (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  course TEXT,
  age INT,
  location TEXT,
  comment TEXT
  );

  INSERT INTO memowall (name, course, age, location, comment) values
  ('Sabrina', 'Software Development', 24, 'Norwich', 'I enjoy a lot the course'),
  ('Carlos', 'Digital Innovator', 33, 'Leicester', 'I learnt enough to become confident'),
  ('David', 'Digital Marketing with AI', 40, 'Hull', 'I would recommed the course to everyone'),
  ('Michael', 'Software Development', 23, 'Norwich', 'Great support thorugh all the course'),
  ('Lisa', 'Digital Transformation', 35, 'Notthingham', 'Is the best investment I have done towards my career in tech')
  ('Sabrina', 'Software Development', 24, 'Norwich', 'I enjoy a lot the course'),
  ('Carlos', 'Digital Innovator', 33, 'Leicester', 'I learnt enough to become confident'),
  ('David', 'Digital Marketing with AI', 40, 'Hull', 'I would recommed the course to everyone'),
  ('Michael', 'Software Development', 23, 'Norwich', 'Great support thorugh all the course'),
  ('Lisa', 'Digital Transformation', 35, 'Notthingham', 'Is the best investment I have done towards my career in tech'),
  ('Sophia', 'Digital Marketing with AI', 29, 'Hull', 'Very impressive with all the content done in 12 weeks'),
  ('Sophia', 'Digital Marketing with AI', 29, 'Hull', 'Very impressive with all the content done in 12 weeks');
  
SELECT name, course, age, location, comment FROM memowall