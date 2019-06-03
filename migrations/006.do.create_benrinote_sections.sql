CREATE TABLE benrinote_sections (
  id SERIAL PRIMARY KEY,
  pub_id INTEGER REFERENCES benrinote_publications(id) ON DELETE CASCADE NOT NULL,
  section SERIAL NOT NULL,
  title TEXT NOT NULL,
  text TEXT NOT NULL 
);