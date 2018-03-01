User
full_name
session_token 
password_digest
bio
avatar_url
timestamps

Article
title
author_id, integer
timestamps
featured_image_url

Chunk
article_id, integer
text
url
ord, integer
content_type, in: [text, figure, h1, h2, h3, pull_quote, double_quote, divider]
timestamps

Comment
article_id, integer
parent_id, integer
author_id, integer
content

Follow
follower_id, integer
followee_id, integer

Howl
howlable_id, integer
howler_id, integer

Tag
tag_name

Tagging
article_id, integer
tag_id, integer


