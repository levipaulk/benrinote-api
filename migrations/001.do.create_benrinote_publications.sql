CREATE TABLE benrinote_publications (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  cover TEXT,
  summary TEXT NOT NULL,
  date_created TIMESTAMPTZ NOT NULL DEFAULT now(),
  date_modified TIMESTAMPTZ
);