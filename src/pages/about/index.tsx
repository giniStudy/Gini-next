import { NextPage } from 'next';
import { MarkdownViewer } from '../../components/containers/Markdown';
import { ImageCard } from '../../components/containers/Card/ImageCard';
import { Col, Row } from 'antd';
import nextBase64 from 'next-base64';

const AboutUserName = ['sasumpi123', 'pointehd', 'thjang94'];

const md = `### Hello:raised_hand: My name is SungHoon and I'm Junior FE Developer.:baby:<br/>
![sasumpi123's github stats](https://github-readme-stats.vercel.app/api?username=sasumpi123&show_icons=true)[![sasumpi123's github stats](https://github-readme-stats.vercel.app/api/top-langs/?username=sasumpi123&show_icons=true&hide_border=true&title_color=004386&icon_color=004386&layout=compact)](https://github.com/sasumpi123)
**Languages and Tools**
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/graphql/graphql.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code>
`;
const AboutPage: NextPage = () => {
  const arrayShuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  console.log(
    nextBase64.decode(
      'IyMjIEhlbGxvOnJhaXNlZF9oYW5kOiBNeSBuYW1lIGlzIFN1bmdIb29uIGFu\nZCBJJ20gSnVuaW9yIEZFIERldmVsb3Blci46YmFieTo8YnIvPgoKIVtzYXN1\nbXBpMTIzJ3MgZ2l0aHViIHN0YXRzXShodHRwczovL2dpdGh1Yi1yZWFkbWUt\nc3RhdHMudmVyY2VsLmFwcC9hcGk/dXNlcm5hbWU9c2FzdW1waTEyMyZzaG93\nX2ljb25zPXRydWUpWyFbc2FzdW1waTEyMydzIGdpdGh1YiBzdGF0c10oaHR0\ncHM6Ly9naXRodWItcmVhZG1lLXN0YXRzLnZlcmNlbC5hcHAvYXBpL3RvcC1s\nYW5ncy8/dXNlcm5hbWU9c2FzdW1waTEyMyZzaG93X2ljb25zPXRydWUmaGlk\nZV9ib3JkZXI9dHJ1ZSZ0aXRsZV9jb2xvcj0wMDQzODYmaWNvbl9jb2xvcj0w\nMDQzODYmbGF5b3V0PWNvbXBhY3QpXShodHRwczovL2dpdGh1Yi5jb20vc2Fz\ndW1waTEyMykKCioqTGFuZ3VhZ2VzIGFuZCBUb29scyoqICAKCjxjb2RlPjxp\nbWcgaGVpZ2h0PSIyMCIgc3JjPSJodHRwczovL3Jhdy5naXRodWJ1c2VyY29u\ndGVudC5jb20vZ2l0aHViL2V4cGxvcmUvODA2ODhlNDI5YTdkNGVmMmZjYTFl\nODIzNTBmZThlMzUxN2QzNDk0ZC90b3BpY3MvamF2YXNjcmlwdC9qYXZhc2Ny\naXB0LnBuZyI+PC9jb2RlPgo8Y29kZT48aW1nIGhlaWdodD0iMjAiIHNyYz0i\naHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2dpdGh1Yi9leHBs\nb3JlLzgwNjg4ZTQyOWE3ZDRlZjJmY2ExZTgyMzUwZmU4ZTM1MTdkMzQ5NGQv\ndG9waWNzL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC5wbmciPjwvY29kZT4KPGNv\nZGU+PGltZyBoZWlnaHQ9IjIwIiBzcmM9Imh0dHBzOi8vcmF3LmdpdGh1YnVz\nZXJjb250ZW50LmNvbS9naXRodWIvZXhwbG9yZS84MDY4OGU0MjlhN2Q0ZWYy\nZmNhMWU4MjM1MGZlOGUzNTE3ZDM0OTRkL3RvcGljcy9yZWFjdC9yZWFjdC5w\nbmciPjwvY29kZT4KPGNvZGU+PGltZyBoZWlnaHQ9IjIwIiBzcmM9Imh0dHBz\nOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9naXRodWIvZXhwbG9yZS84\nMDY4OGU0MjlhN2Q0ZWYyZmNhMWU4MjM1MGZlOGUzNTE3ZDM0OTRkL3RvcGlj\ncy9ub2RlanMvbm9kZWpzLnBuZyI+PC9jb2RlPgo8Y29kZT48aW1nIGhlaWdo\ndD0iMjAiIHNyYz0iaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29t\nL2dpdGh1Yi9leHBsb3JlLzgwNjg4ZTQyOWE3ZDRlZjJmY2ExZTgyMzUwZmU4\nZTM1MTdkMzQ5NGQvdG9waWNzL3Z1ZS92dWUucG5nIj48L2NvZGU+Cjxjb2Rl\nPjxpbWcgaGVpZ2h0PSIyMCIgc3JjPSJodHRwczovL3Jhdy5naXRodWJ1c2Vy\nY29udGVudC5jb20vZ2l0aHViL2V4cGxvcmUvNWMwNThhMzg4ODI4YmI1ZmRl\nMGJjYWZkNGJjODY3YjViYjNmMjZmMy90b3BpY3MvZ3JhcGhxbC9ncmFwaHFs\nLnBuZyI+PC9jb2RlPgo8Y29kZT48aW1nIGhlaWdodD0iMjAiIHNyYz0iaHR0\ncHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2dpdGh1Yi9leHBsb3Jl\nLzgwNjg4ZTQyOWE3ZDRlZjJmY2ExZTgyMzUwZmU4ZTM1MTdkMzQ5NGQvdG9w\naWNzL2phdmEvamF2YS5wbmciPjwvY29kZT4KPGNvZGU+PGltZyBoZWlnaHQ9\nIjIwIiBzcmM9Imh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9n\naXRodWIvZXhwbG9yZS84MDY4OGU0MjlhN2Q0ZWYyZmNhMWU4MjM1MGZlOGUz\nNTE3ZDM0OTRkL3RvcGljcy9weXRob24vcHl0aG9uLnBuZyI+PC9jb2RlPgo=\n',
    ),
  );
  return (
    <>
      <MarkdownViewer
        value={md}
        hideToolbar={true}
        height={300}
        preview={'preview'}
        highlightEnable={false}
      />
      <h1 style={{ marginTop: 20, marginBottom: 20 }}>Made By</h1>
      <div>
        <Row justify="space-between" align={'middle'}>
          {arrayShuffle(AboutUserName).map((name) => {
            return (
              <Col span={5} key={name}>
                <ImageCard userName={name} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default AboutPage;
