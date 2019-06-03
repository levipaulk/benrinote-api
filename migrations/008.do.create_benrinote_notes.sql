CREATE TABLE benrinote_notes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES benrinote_users(id) ON DELETE CASCADE NOT NULL,
  pub_id INTEGER REFERENCES benrinote_publications(id),
  sec_id INTEGER REFERENCES benrinote_sections(id),
  date_created TIMESTAMPTZ DEFAULT now() NOT NULL,
  date_modified TIMESTAMPTZ,
  text TEXT NOT NULL
);