BEGIN;

TRUNCATE 
  benrinote_notes,
  benrinote_sections,
  user_pub,
  benrinote_publications,
  benrinote_users
  RESTART IDENTITY CASCADE;

INSERT INTO benrinote_users (user_name, full_name, nickname, password, type)
VALUES
  ('dunder', 'Dunder Mifflin', null, '$2a$12$k2UvKln.iv/3BSNZqJAps.eJWhn6TNyMVGCPpxR8.LKNrGOKFZlJm', 'adim'),
  ('b.deboop', 'Bodeep Deboop', 'Bo', '$2a$12$XW7uoGcRCUPabSPJQa1ZJOx82rUpbR1UA32fsykhdhjyy21F0YGMa', 'publisher'),
  ('c.bloggs', 'Charlie Bloggs', 'Charlie', '$2a$12$/y8KxrkZ19gX2.Rf268Ij.7KkjOZOy060xtSzUYzB1sFjk2JyhjaS', 'normal'),
  ('s.smith', 'Sam Smith', 'Sam', '$2a$12$Cn1CjQlVQzW7J4CjQQYnk.BSuYcQ0iEU6EYHELimyNFi8XIdnFhxm', 'normal'),
  ('lexlor', 'Alex Taylor', 'Lex', '$2a$12$9jSfrDvCkn6P1Lbt/OJJRu0q8vAWvwX.TlquqL4Mnow6vZfppZOIS', 'normal'),
  ('wippy', 'Ping Won In', 'Ping', '$2a$12$m8AvGnwabKCrVmWDw6qov.ttrN3uZ71PVGA/j2CHHl1/h.IOzJj/G', 'normal');

INSERT INTO benrinote_publications (title, cover, summary, author_id, publisher_id)
VALUES
  ('Publication 1', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ', 1, 2),
  ('Publication 2', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 3, 2),
  ('Publication 3', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 3, 2),
  ('Publication 4', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 4, 2),
  ('Publication 5', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 5, 2),
  ('Publication 6', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-flyer-template-6bd8f9188465e443a5e161a7d0b3cf33.jpg?ts=1456287935', 'Synopsis, tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 6, 2);

INSERT INTO user_pub (user_id, pub_id)
VALUES
  (1, 2),
  (1, 4),
  (1, 5),
  (2, 2),
  (2, 1),
  (2, 4),
  (3, 1),
  (3, 3),
  (3, 5),
  (4, 1),
  (4, 3),
  (4, 5),
  (5, 1),
  (5, 2),
  (5, 3);

INSERT INTO benrinote_sections (pub_id, section, title, text)
VALUES
  (1, 1, 'First Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (1, 2, 'Second Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (1, 3, 'Third Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (2, 1, 'First Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (2, 2, 'Second Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (2, 3, 'Third Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (3, 1, 'First Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (3, 2, 'Second Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (3, 3, 'Third Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (4, 1, 'First Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (4, 2, 'Second Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (4, 3, 'Third Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (5, 1, 'First Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (5, 2, 'Second Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...'),
  (5, 3, 'Third Section', 'It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...It is a long established fact that a reader will be...');

INSERT INTO benrinote_notes (user_id, pub_id, sec_id, text)
VALUES
  (1, 2, 1, 'Test notes for USER 1s PUBLICATION 2s SECTION 1 NOTES'),
  (1, 2, 2, 'Test notes for USER 1s PUBLICATION 2s SECTION 2 NOTES'),
  (1, 2, 3, 'Test notes for USER 1s PUBLICATION 2s SECTION 3 NOTES'),
  (1, 4, 1, 'Test notes for USER 1s PUBLICATION 4s SECTION 1 NOTES'),
  (1, 4, 2, 'Test notes for USER 1s PUBLICATION 4s SECTION 2 NOTES'),
  (1, 4, 3, 'Test notes for USER 1s PUBLICATION 4s SECTION 3 NOTES'),
  (1, 5, 1, 'Test notes for USER 1s PUBLICATION 5s SECTION 1 NOTES'),
  (1, 5, 2, 'Test notes for USER 1s PUBLICATION 5s SECTION 2 NOTES'),
  (1, 5, 3, 'Test notes for USER 1s PUBLICATION 5s SECTION 3 NOTES'),
  (2, 2, 1, 'Test notes for USER 2s PUBLICATION 2s SECTION 1 NOTES'),
  (2, 2, 2, 'Test notes for USER 2s PUBLICATION 2s SECTION 2 NOTES'),
  (2, 2, 3, 'Test notes for USER 2s PUBLICATION 2s SECTION 3 NOTES'),
  (2, 1, 1, 'Test notes for USER 2s PUBLICATION 1s SECTION 1 NOTES'),
  (2, 1, 2, 'Test notes for USER 2s PUBLICATION 1s SECTION 2 NOTES'),
  (2, 1, 3, 'Test notes for USER 2s PUBLICATION 1s SECTION 3 NOTES'),
  (2, 4, 1, 'Test notes for USER 2s PUBLICATION 4s SECTION 1 NOTES'),
  (2, 4, 2, 'Test notes for USER 2s PUBLICATION 4s SECTION 2 NOTES'),
  (2, 4, 3, 'Test notes for USER 2s PUBLICATION 4s SECTION 3 NOTES'),
  (3, 1, 1, 'Test notes for USER 3s PUBLICATION 1s SECTION 1 NOTES'),
  (3, 1, 2, 'Test notes for USER 3s PUBLICATION 1s SECTION 2 NOTES'),
  (3, 1, 3, 'Test notes for USER 3s PUBLICATION 1s SECTION 3 NOTES'),
  (3, 3, 1, 'Test notes for USER 3s PUBLICATION 3s SECTION 1 NOTES'),
  (3, 3, 2, 'Test notes for USER 3s PUBLICATION 3s SECTION 2 NOTES'),
  (3, 3, 3, 'Test notes for USER 3s PUBLICATION 3s SECTION 3 NOTES'),
  (3, 5, 1, 'Test notes for USER 3s PUBLICATION 5s SECTION 1 NOTES'),
  (3, 5, 2, 'Test notes for USER 3s PUBLICATION 5s SECTION 2 NOTES'),
  (3, 5, 3, 'Test notes for USER 3s PUBLICATION 5s SECTION 3 NOTES'),
  (4, 1, 1, 'Test notes for USER 4s PUBLICATION 1s SECTION 1 NOTES'),
  (4, 1, 2, 'Test notes for USER 4s PUBLICATION 1s SECTION 2 NOTES'),
  (4, 1, 3, 'Test notes for USER 4s PUBLICATION 1s SECTION 3 NOTES'),
  (4, 3, 1, 'Test notes for USER 4s PUBLICATION 3s SECTION 1 NOTES'),
  (4, 3, 2, 'Test notes for USER 4s PUBLICATION 3s SECTION 2 NOTES'),
  (4, 3, 3, 'Test notes for USER 4s PUBLICATION 3s SECTION 3 NOTES'),
  (4, 5, 1, 'Test notes for USER 4s PUBLICATION 5s SECTION 1 NOTES'),
  (4, 5, 2, 'Test notes for USER 4s PUBLICATION 5s SECTION 2 NOTES'),
  (4, 5, 3, 'Test notes for USER 4s PUBLICATION 5s SECTION 3 NOTES'),
  (5, 1, 1, 'Test notes for USER 5s PUBLICATION 1s SECTION 1 NOTES'),
  (5, 1, 2, 'Test notes for USER 5s PUBLICATION 1s SECTION 2 NOTES'),
  (5, 1, 3, 'Test notes for USER 5s PUBLICATION 1s SECTION 3 NOTES'),
  (5, 2, 1, 'Test notes for USER 5s PUBLICATION 2s SECTION 1 NOTES'),
  (5, 2, 2, 'Test notes for USER 5s PUBLICATION 2s SECTION 2 NOTES'),
  (5, 2, 3, 'Test notes for USER 5s PUBLICATION 2s SECTION 3 NOTES'),
  (5, 3, 1, 'Test notes for USER 5s PUBLICATION 3s SECTION 1 NOTES'),
  (5, 3, 2, 'Test notes for USER 5s PUBLICATION 3s SECTION 2 NOTES'),
  (5, 3, 3, 'Test notes for USER 5s PUBLICATION 3s SECTION 3 NOTES');

COMMIT;