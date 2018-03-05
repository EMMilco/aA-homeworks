# Top Level Components
``` jsx
<Root>
  <App>
    <Header>
    < ... >
```
**Note:** `< ... >` designates the Router Switch which selectively renders one of the components listed below.

# ArticleShow
* `ArticleShowContainer` + `ArticleShow`
* Route: `/#/articles/:articleId`
* State:
  * `articles[:articleId]`
  * `users[articles[:articleId].author_id]`
  * `chunks` selected using `articles[:articleId].chunks`
* Components:
  * `Article`
    * `ArticleHeader`
    * `SocialSidebar`
    * `ArticleBody`
    * `ArticleFooter`
  * `CommentsSection`
    * `CommentForm`
    * `CommentsFeed`

### `ArticleHeader`
*TODO: wireframe*

### `SocialSidebar`
*TODO: wireframe*

### `ArticleBody`
*TODO: wireframe*

### `ArticleFooter`
*TODO: wireframe*

# CommentsFeed
**Note:** The CommentsFeed is rendered only on ArticleShow, and triggered by clicking a button at the bottom of the page.
* `CommentsFeedContainer` + `CommentsFeed`
* State:
  * `comments` fetched using `:articleId`
* Components:
  * `Comment`
    * `CommentHeader`
    * `CommentBody`

### `Comment`
*TODO: wireframe*

# ArticleEdit
* `ArticleEditContainer` + `ArticleEdit`
* Route: `/#/articles/:articleId/edit`
* State:
  * `articles[:articleId]`
  * `session.currentUser`
  * `chunks` selected using `articles[:articleId].chunks`
* Components:
    * `UserHeader`
    * `ArticleTitleEditor`
    * `ArticleBodyEditor`
      * `Chunk`
      * `ChunkContentTypeMenu`
      * `ChunkStyleMenu`

### `UserHeader`
*TODO: wireframe*

### `ArticleTitleEditor`
*TODO: wireframe*

### `ArticleBodyEditor`
*TODO: wireframe*

# New Article
AJAX request is sent to create a new article with one empty chunk,
title "Untitled", and `currentUser` as author.  User is then shown the
`ArticleEdit` view for that article, with route updated to `/#/articles/:articleId/edit`

# UserShow
* `UserShowContainer` + `UserShow`
* Route: `/#/users/:userId`
* State:
  * `users[:userId]`
  * `session.currentUser`
  * `articles` selected using `users[:userId].articles`
* Components:
    * `UserShowHeader`
    * `UserShowTabs`
    * `UserShowArticleFeed`
      * `UserShowArticleFeedItem`

# MyProfile
Alias for `/#/users/${currentUser.id}`

# ContentManager
* `ContentManagerContainer` + `ContentManager`
* Route: `/#/manage-content`
* State:
  * `users[session.currentUser.id]`
  * `drafts` selected from `articles` using `users[session.currentUser.id].articles`
  * `published` selected from `articles` using `users[session.currentUser.id].articles`
* Components:
    * `UserShowHeader`
    * `ContentManagerTabs`
    * `ContentManagerDraftsFeed`
      * `ContentManagerDraftsFeedItem`
    * `ContentManagerArticlesFeed`
      * `ContentManagerArticlesFeedItem`

*TODO: wireframe*

# Settings

* `SettingsContainer` + `Settings`
* Route: `/#/settings`
* State:
  * `users[session.currentUser.id]`

* Components:
    * `SettingsForm`

# Session
* `SignupForm`
* `SigninForm`
* State:
  `session.currentUser.id`

### `SignupForm`
*TODO: wireframe*

### `SigninForm`
*TODO: wireframe*


# Homepage
* `HomepageContainer` + `Homepage`
* Route: `/#/`
* State:
  * `users[session.currentUser.id].followees`
  * `articles` composed by `followees`
* Components:
  * `FeaturedArticles`
    * `MainFeed`
      * `MainFeedItem`

### `FeaturedArticles`
*TODO: wireframe*

### `MainFeed`
*TODO: wireframe*



# Complete Component Hierarchy

``` jsx
<Root>
  <Provider>
    <HashRouter>
      <App>
        <ModalOverlay /> // Triggered by SignupButton or SigninButton
        <Header>
          <SquareLogo /> // visible only on '/edit' pages
          <ArticleEditorStatus /> // on '/edit' pages, shows whether draft/published, saved/saving...
          <MainLogo /> // not visible on '/edit' pages
          <ControlPanel>
            <SearchBar /> // not visible on '/edit' pages
            <PublishDropdown> // visible only on '/edit' pages
              <TagForm />
              <HeaderImageSelector />
              <PublishButton />
            </PublishDropdown>
            <SigninButton /> // only displayed if not logged in
            <SignupButton /> // only displayed if not logged in
            <SigninModal> // triggered by click on SignupButton
              <SigninForm />
              <SignupButton /> // Styled as link, not button
            </SigninModal>
            <SignupModal> // triggered by click on SignupButton
              <SignupForm />
              <SigninButton /> // Styled as link, not button
            </SignupModal>
            <Notificatons />
            <UserMenu /> // Contains links to various user-centric pages
          </ControlPanel>
        </Header>
        <Switch>
          <Route path='/articles/:articleId'> // Renders ArticleShow
            <ArticleShow>
              <Article> // connected component
                <ArticleHeader>
                  <AuthorHeader>
                  </AuthorHeader>
                  <ArticleHeaderImage />
                  <ArticleTitle />
                </ArticleHeader>
                <SocialSidebar> // Howl, Share, Save
                  <HowlButton />
                  <TweetFBSave> // Recurring Component
                    <TweetButton />
                    <FBShareButton />
                    <BookmarkButton />
                  </TweetFBSave>
                </SocialSidebar>
                <ArticleBody>
                  <Chunk />
                </ArticleBody>
                <ArticleFooter>
                  <ArticleTags />
                  <SocialFooter>
                    <HowlButton />
                    <CommentButton />
                    <TweetFBSave />
                    <ReportBlockMenu />
                  </SocialFooter>
                  <AuthorFooter />
                </ArticleFooter>
              </Article>
              <CommentsSection> // connected component
                <CommentForm />
                <ShowCommentsButton />
                <CommentsFeed> // loads onClick from ShowCommentsButton
                  <Comment>
                    <CommentHeader />
                    <CommentBody>
                      <Chunk />
                    </CommentBody>
                    <CommentFooter>
                      <HowlButton /> // Greyed out on user's own comments
                      <BookmarkButton />
                      <ReportBlockMenu />
                    </CommentFooter>
                  </Comment>
                </CommentsFeed>
              </CommentsSection>
            </ArticleShow>
          </Route>
          <Route path='/articles/:articleId/edit'> // Renders ArticleEdit
            <ArticleEdit> // connected component
              <UserHeader /> // reuse comment header
              <ArticleTitle />
              <ArticleTitleLabel /> // rendered when ArticleTitle is active
              <ArticleBody>
                <Chunk />
                <ChunkContentTypeMenu /> // rendered when empty Chunk is active
                <ChunkStyleMenu /> // rendered when content in Chunk is double-clicked
              </ArticleBody>
            </ArticleEdit>
          </Route>
          <Route path='/articles/new'> // Renders ArticleEdit with Empty Content
            <ArticleEdit />
          </Route>
          <Route path='/users/:userId'> // Renders UserShow
            <UserShow>
              <UserShowHeader />
              <UserShowTabs />
              <UserShowArticleFeed>
                <UserShowArticleFeedItem />
              </UserShowArticleFeed>
            </UserShow>
          </Route>
          <Route path='/profile'> // Renders MyProfile (analogous to UserShow)
            <MyProfile>
              <MyProfileHeader /> // Includes edit toggle to change name,avatar,bio
              <UserShowTabs />
              <UserShowArticleFeed>
                <UserShowArticleFeedItem />
              </UserShowArticleFeed>
            </MyProfile>
          </Route>
          <Route path='/settings'> // Renders MySettings
            <SettingsPage>
              <SettingsListItem /> // Email, Password Update, etc.
            </SettingsPage>
          </Route>
          <Route path='/manage-content'> // Renders ContentManager
            <ContentManager>
              <ContentManagerHeader>
                <ComposeButton />
              </ContentManagerHeader>
              <ContentManagerTabs />
              <ContentManagerDraftsFeed>
                <ContentManagerDraftsFeedItem />
              </ContentManagerDraftsFeed>
              <ContentManagerArticlesFeed>
                <ContentManagerArticlesFeedItem />
              </ContentManagerArticlesFeed>
            </ContentManager>
          </Route>
          <Route path='/'> // Renders Homepage
            <Homepage> // Connected component, passes props to subordinates
              <ChannelNav> // Only displayed at root (homepage), nowhere else
                <ChannelIndex>
                  <ChannelIndexItem />
                </ChannelIndex>
              </ChannelNav>
              <FeaturedArticles> // Top headlines on front page
                <FeaturedOne />
                <FeaturedTwoThree />
                <FeaturedFourFive />
                <FeaturedSideBox />
              </FeaturedArticles>
              <MainFeed> // Has infinite scroll, connected component.
                <MainFeedItem />
              </MainFeed>
              <PopularArticlesSidebar />
            </Homepage>
          </Route>
        </Switch>
      </App>
    </HashRouter>
  </Provider>
</Root>
```
