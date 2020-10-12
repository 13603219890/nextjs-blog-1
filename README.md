```
nextjs特性：
1.创建项目：npm init next-app nextjs-blog-1
yarn dev
.gitignore 添加/.idea/
posts/first-post.js

yarn add --dev @types/react @types/react-dom //类型定义文件

2.快速导航：<Link href=xxx></Link>
3.代码同构：一份代码两端运行
index.js里添加一个console会发现浏览器跟nodejs都会运行
，但是不是所有的代码都会这样，比如
const clickMe = useCallback(()=>{
    console.log("点击了...")
},[])
<button onClick={clickMe}>点击</button>
4.自定义head
webstrom搜索的时候忽略某个目录：make direction as exclusion
index.js里面有个head标签中修改
meta:vp
格式化代碼 ctrl+alt+l
5.修改全局title和meta：vp
mk  pages/_app.js
open http：nextjs.org  查看：Assets，Metadata，and Css
复制：
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

粘贴到_app.js
```
