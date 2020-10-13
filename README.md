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

6.全局css
styles/global.css
7.单文件css
<style jsx>
{
    'h1{color:red}'
}
</style>
jsx就会只在当前内部区域生效
想要全局生效可以加个global
或者 使用 cssModules：
新建first-post.module.css (写错的话，会报错：
./styles/first-post_module.css
Global CSS cannot be imported from files other than your Custom <App>. Please move all global CSS imports to pages\_app.js. Or convert the import to Component-Level CSS (CSS Modules).
Read more: https://err.sh/next.js/css-global
Location: pages\posts\first-post.js
）
.wrapper{
background:red;
border:1px solid blue
}
.content{
padding:10px;
}

8.setting plugins 安装styled-jsx
9.import '../styles/globals.css'把..去掉：
创建jsconfig.json 
nextjs.org文档里Adwanced Features=>Absolute Imports and Module Path Aliases
粘贴
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```
