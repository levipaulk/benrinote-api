CREATE TYPE section_type AS ENUM (
  'md',
  'bn'
);

ALTER TABLE benrinote_sections
  ADD COLUMN
    type section_type;