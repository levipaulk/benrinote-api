ALTER TABLE benrinote_publications
  ADD COLUMN
    publisher_id INTEGER REFERENCES benrinote_users(id)
    ON DELETE SET NULL;