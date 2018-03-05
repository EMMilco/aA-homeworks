const howlApp = (
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
                <ArticleTitleEditor />
                <ArticleTitleLabel /> // rendered when ArticleTitle is active
                <ArticleBodyEditor>
                  <Chunk />
                  <ChunkContentTypeMenu /> // rendered when empty Chunk is active
                  <ChunkStyleMenu /> // rendered when content in Chunk is double-clicked
                </ArticleBodyEditor>
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
);
