All columns have datatype string unless otherwise specified.

## **User**

column name | data type | details
--- | --- | ---
id | integer | not null, primary key
full_name | string | not null
session_token | string | not null
password_digest | string | not null
bio | string | not null
avatar_url | string | not null
timestamps| datetime

## **Article**

column name | data type | details
--- | --- | ---
id | integer | not null, primary key
title | string | not null, default: "Untitled"
author_id | integer | not null, foreign key, indexed
publish_date| datetime | indexed
featured_image_url | string
timestamps| datetime

## **Chunk**

column name | data type | details
--- | --- | ---
id | integer | not null, primary key
chunkable_id | integer | not null, foreign key, indexed
content | text
ord | integer | not null, indexed
content_type | string | in: [paragraph, h1, h2, h3, pull_quote, block_quote, divider, image], not null, default: "paragraph"
timestamps| datetime

*chunkable_id references either Article or Comment.

## **Comment**

column name | data type | details
--- | --- | ---
id | integer | not null, primary key
article_id | integer | not null, foreign key, indexed
parent_id | integer | foreign key, indexed
author_id| integer | not null, foreign key, indexed
timestamps| datetime

## **Follow**

column name | data type | details
--- | --- | ---
id | integer | not null, primary key
follower_id | integer | not null, foreign key, indexed
followee_id | integer | not null, foreign key, indexed
timestamps| datetime

## **Howl**

column name | data type | details
--- | --- | ---
id | integer | not null, primary key
howlable_id | integer | not null, foreign key, indexed
howler_id | integer | not null, foreign key, indexed
timestamps| datetime

## **Tag**

column name | data type | details
--- | --- | ---
id | integer | not null, primary key
tag_name | string | not null
timestamps | datetime

## **Tagging**

column name | data type | details
--- | --- | ---
id | integer | not null, primary key
article_id | integer | not null, foreign key, indexed
tag_id | integer | not null, foreign key, indexed
timestamps| datetime
