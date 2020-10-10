import React from "react";
import Link from "next/Link";


export default function X(){
    return(
        <div>First Post

            <Link  href="/"><a>回到首页</a></Link>
        </div>
    )
}
//渲染页面：
//yarn add --dev @types/react @types/react-dom
//import React from "react";
//推测路径：/posts/first-post
//总结：
//1.约定大于配置
//2.不需要配置，只需要约定，开发者自然意会
//3.这是Rails的理念