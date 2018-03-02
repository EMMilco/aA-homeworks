Back-end Routes

RESOURCE    ACTION       ROUTE           METHOD

users       #create      /users          POST
users       #show        /users/:id      GET
users       #update      /users/:id      PATCH
users       #destroy     /users/:id      DELETE

session     #create      /session        POST
session     #destroy     /session        DELETE

articles    #create      /articles       POST
articles    #index       /articles       GET
articles    #show        /articles/:id   GET
articles    #update      /articles/:id   PATCH
articles    #destroy     /articles/:id   DELETE

comments    #create      /comments/      POST
comments    #update      /comments/:id   PATCH
comments    #destroy     /comments/:id   DELETE

howls       #create      /howls/         POST
howls       #destroy     /howls/:id      DELETE

follows     #create      /follows/       POST
follows     #destroy     /follows/:id    DELETE




Front-end Routes

ROUTE                         NAME / DESCRIPTION
/                             homepage, main article feed
/users/:userId                user show page, author article feed
/profile                      profile, article feed for current user
/articles/:articleId          article show page, includes comment feed
/articles/:articleId/edit     user-restricted article edit page
/articles/new                 compose article page with autosave
/settings                     user control panel
/manage-articles              control panel for current user's articles
