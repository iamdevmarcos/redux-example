import Wrapper from 'components/Wrapper'
import GithubCorner from 'react-github-corner'
import MainRoutes from 'Routes'

const App = () => (
  <Wrapper>
    <MainRoutes />

    <GithubCorner
      href="https://github.com/iamdevmarcos/redux-example"
      octoColor="#FBFBFB"
      bannerColor="#0449F7"
      target="_blank"
    />
  </Wrapper>
)

export default App