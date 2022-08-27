import Wrapper from 'components/Wrapper'
import ThemeExample from 'examples/ThemeExample'
import TodoExample from 'examples/TodoExample'

import GithubCorner from 'react-github-corner'

const App = () => (
  <Wrapper>
    <ThemeExample />
    <TodoExample />

    <GithubCorner
      href="https://github.com/iamdevmarcos/redux-example"
      octoColor="#FBFBFB"
      bannerColor="#0449F7"
      target="_blank"
    />
  </Wrapper>
)

export default App