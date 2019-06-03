CREATE TABLE user_pub (
  user_id INTEGER REFERENCES benrinote_users(id) ON DELETE CASCADE NOT NULL,
  pub_id INTEGER REFERENCES benrinote_publications(id),
  CONSTRAINT user_pub_key PRIMARY KEY (user_id, pub_id),
  date_created TIMESTAMPTZ NOT NULL DEFAULT now()
);