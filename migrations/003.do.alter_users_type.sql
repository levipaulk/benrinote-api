CREATE TYPE user_type AS ENUM (
  'adim',
  'publisher',
  'normal'
);

ALTER TABLE benrinote_users
  ADD COLUMN
    type user_type;