import { NextPage } from 'next';
import { Space } from 'antd';
import { useEffect, useState, useCallback } from 'react';
import { MarkdownViewer } from '../components/containers/Markdown';

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
  const [value, setValue] = useState(md);

  const handleChange = useCallback((value: any) => {
    setValue(value);
  }, []);
  return (
    <>
      <MarkdownViewer
        value={value}
        onChange={handleChange}
        hideToolbar={true}
        height={700}
        preview={'preview'}
        highlightEnable={false}
      />
    </>
  );
};

export default AboutPage;
